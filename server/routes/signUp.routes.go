package routes

import (
	"encoding/json"
	"net/http"
	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
	"log"
	"golang.org/x/crypto/bcrypt"
)

func GeneratehashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}


func SignUp(w http.ResponseWriter, r *http.Request) {
	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte(err.Error()))
		return
	}
	var dbuser models.User
	db.DB.Where("email = ?", user.Email).First(&dbuser)
	//checks if email is already register or not
	if dbuser.Email != "" {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte("the email is ready"))
		return
	}
	user.Password, err = GeneratehashPassword(user.Password)
	if err != nil {
		log.Fatalln("error in password hash")
	}
	//insert user details in database
	db.DB.Create(&user)
	w.Header().Set("Content-Type", "application/json") //return in json
	json.NewEncoder(w).Encode(&user)
}

