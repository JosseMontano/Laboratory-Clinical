package routes

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
	"github.com/golang-jwt/jwt"
)

func SearchProfile(Email string) (models.User, bool) {
	_, cancel := context.WithTimeout(context.Background(), time.Second*15)
	defer cancel()
	var perfil models.User
	db.DB.Where("email = ?", Email).First(&perfil)
	if perfil.Email == "" {
		fmt.Println("Not found")
		return perfil, false
	}
	return perfil, true
}

func SeeProfile(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("jwt")
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte("Token not found"))
		w.Header().Set("Content-Type", "application/json")
		return
	}
	secretkey := "8021947cbba"
	var mySigningKey = []byte(secretkey)
	token, _ := jwt.Parse(cookie.Value, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("There was an error in parsing")
		}
		return mySigningKey, nil
	})
	//probar the return with token
	//claims is the data of the user
	if token.Claims != nil {
		w.WriteHeader(http.StatusAccepted)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(token.Claims)
		return
	}
	w.WriteHeader(http.StatusBadRequest) //400
	w.Write([]byte("Not authorized"))
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(err)

}
