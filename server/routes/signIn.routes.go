package routes

import (
	"encoding/json"
	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
	"log"
	"net/http"
	"time"
)

func GenerateJWT(email string) (string, error) {
	secretkey := "8021947cbba"
	var mySigningKey = []byte(secretkey)
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["authorized"] = true
	claims["email"] = email
	claims["exp"] = time.Now().Add(24 * time.Hour) //1 day

	tokenString, err := token.SignedString(mySigningKey)

	if err != nil {
		log.Fatal(err.Error())
		return "", err
	}
	return tokenString, nil
}

func SignIn(w http.ResponseWriter, r *http.Request) {


	var authdetails models.Authentication
	err := json.NewDecoder(r.Body).Decode(&authdetails)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte("Error in reading body"))
		w.Header().Set("Content-Type", "application/json")
		return
	}

	var authuser models.User
	db.DB.Where("email = ?", authdetails.Email).First(&authuser)
	if authuser.Email == "" {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte("Username o password incorrect"))
		w.Header().Set("Content-Type", "application/json")
		return
	}

	check := CheckPasswordHash(authdetails.Password, authuser.Password)

	if !check {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte("Username o password incorrect"))
		w.Header().Set("Content-Type", "application/json")
		return
	}

	validToken, err := GenerateJWT(authuser.Email)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte("failed to generate token"))
		w.Header().Set("Content-Type", "application/json")
		return
	}

	var token models.Token
	token.Email = authuser.Email
	token.TokenString = validToken

	//json.NewEncoder(w).Encode(token)

	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    validToken,
		Expires:  time.Now().Add(time.Minute * 60),
		HttpOnly: true,
	}
	http.SetCookie(w, cookie)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(cookie.Value)
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
