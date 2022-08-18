package routes

import (
	"fmt"
	"time"
	"github.com/golang-jwt/jwt"
	"encoding/json"
	"net/http"
	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
	"log"
	"golang.org/x/crypto/bcrypt"
)

func GenerateJWT(email, role string) (string, error) {
	secretkey := "8021947cbba"
	var mySigningKey = []byte(secretkey)
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["authorized"] = true
	claims["email"] = email
	claims["role"] = role
	claims["exp"] = time.Now().Add(time.Minute * 30).Unix()

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

	validToken, err := GenerateJWT(authuser.Email, authuser.Role)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte("failed to generate token"))
		w.Header().Set("Content-Type", "application/json")
		return
	}

	var token models.Token
	token.Email = authuser.Email
	token.Role = authuser.Role
	token.TokenString = validToken
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(token)
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}





func IsAuthorized(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		if r.Header["Token"] == nil {
			w.WriteHeader(http.StatusBadRequest) //400
			w.Write([]byte("Token not found"))
			w.Header().Set("Content-Type", "application/json")
			return
		}
		secretkey := "8021947cbba"

		var mySigningKey = []byte(secretkey)

		token, err := jwt.Parse(r.Header["Token"][0], func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("There was an error in parsing")
			}
			return mySigningKey, nil
		})

		if err != nil {
			w.WriteHeader(http.StatusBadRequest) //400
			w.Write([]byte("Token not found"))
			w.Header().Set("Content-Type", "application/json")
			return
		}

		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			if claims["role"] == "admin" {

				r.Header.Set("Role", "admin")
				handler.ServeHTTP(w, r)
				return

			} else if claims["role"] == "user" {

				r.Header.Set("Role", "user")
				handler.ServeHTTP(w, r)
				return
			}
		}
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte("Not authorized"))
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(err)
	}
}
