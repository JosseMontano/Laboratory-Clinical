package routes

import (
	"encoding/json"
	"net/http"
	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
	"github.com/gorilla/mux"

)

func GetDoctorsHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
	var doctors []models.Doctor
	db.DB.Find(&doctors)
	w.WriteHeader(http.StatusAccepted)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(doctors)
	}
	/*w.WriteHeader(http.StatusBadGateway)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte("There ir an error in token"))*/
}


func SecureGreeting() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("hello from secure endpoint"))
	}
}

func PostDoctorsHandler(w http.ResponseWriter, r *http.Request) {
	var doctors models.Doctor
	json.NewDecoder(r.Body).Decode(&doctors)
	createdDoctor := db.DB.Create(&doctors)
	err := createdDoctor.Error
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte(err.Error()))
		return
	}
	json.NewEncoder(w).Encode(&doctors)
}
func GetDoctorHandler(w http.ResponseWriter, r *http.Request) {
	var doctor models.Doctor
	params := mux.Vars(r)
	db.DB.First(&doctor, params["id"])
	if doctor.ID == 0 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("Doctor no found"))
		return
	}

	db.DB.Model(&doctor).Association("User").Find(&doctor.User)
	json.NewEncoder(w).Encode(&doctor)
}
func PutDoctorHandler(w http.ResponseWriter, r *http.Request) {
	//get data
	var doctor models.Doctor
	params := mux.Vars(r)
	db.DB.First(&doctor, params["id"])
	if doctor.ID == 0 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("Doctor no found"))
		return
	}
	//update data
	var doctorSend models.Doctor
	json.NewDecoder(r.Body).Decode(&doctorSend)
	doctor.LastName = doctorSend.LastName
	doctor.FirstName = doctorSend.FirstName
	doctor.MotherLastName = doctorSend.MotherLastName
	doctor.Age = doctorSend.Age
	doctor.Sex = doctorSend.Sex
	updatedDoctor := db.DB.Save(&doctor)
	err := updatedDoctor.Error
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte(err.Error()))
		return
	}
	json.NewEncoder(w).Encode(&doctor)
}
func DeleteDoctorHandler(w http.ResponseWriter, r *http.Request) {
	var doctor models.Doctor
	params := mux.Vars(r)
	db.DB.First(&doctor, params["id"])
	if doctor.ID == 0 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("Doctor no found"))
		return
	}
	db.DB.Unscoped().Delete(&doctor)
	w.WriteHeader(http.StatusNoContent) //204
}
