package routes

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
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
	Email := r.URL.Query().Get("email")
	if len(Email) < 1 {
		http.Error(w, "you have send the email", http.StatusBadRequest)
		return
	}
	profile, flag := SearchProfile(Email)
	if !flag{
		http.Error(w, "we can`t find the data", http.StatusBadRequest)
		return
	}
	w.Header().Set("context-type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(profile)

}
