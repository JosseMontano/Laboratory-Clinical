package routes

import (
	"encoding/json"
	"net/http"

	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
	"github.com/gorilla/mux"
)

func GetPatientsHandler(w http.ResponseWriter, r *http.Request) {
	var patients []models.Patient
	db.DB.Find(&patients)
	json.NewEncoder(w).Encode(&patients)
}
func GetPatientHandler(w http.ResponseWriter, r *http.Request) {
	var patients models.Patient
	params := mux.Vars(r)
	db.DB.First(&patients, params["id"])
	if patients.ID == 0 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("data Not found"))
		return
	}
	/*
	db.DB.Model(&patients).Association("Doctor").Find(&patients.Doctor) //it*/
	json.NewEncoder(w).Encode(&patients)
}
func PostPatientHandler(w http.ResponseWriter, r *http.Request) {
	var user models.Patient
	json.NewDecoder(r.Body).Decode(&user) //save the body in user
	createdUser := db.DB.Create(&user)
	err := createdUser.Error
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //400
		w.Write([]byte(err.Error()))
	}
	json.NewEncoder(w).Encode(&user)
}
func DeletePatientHandler(w http.ResponseWriter, r *http.Request) {
	var patient models.Patient
	params := mux.Vars(r)
	db.DB.First(&patient, params["id"])
	if patient.ID == 0 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("Data not found"))
		return
	}
	//	db.DB.Delete(&patient) //it no deleted of the table
	db.DB.Unscoped().Delete(&patient) //it if deleted
	w.WriteHeader(http.StatusOK)
}
