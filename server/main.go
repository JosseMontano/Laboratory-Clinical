package main

import (
	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
	"github.com/JosseMontano/clinical-laboratory/routes"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	db.DBConn()
	db.DB.AutoMigrate(models.Doctor{})
	db.DB.AutoMigrate(models.Patient{})
	db.DB.AutoMigrate(models.User{})
	db.DB.AutoMigrate(models.MedicalExam{})
	db.DB.AutoMigrate(models.ExamePatient{})
	db.DB.AutoMigrate(models.PatientDoctor{})
	r := mux.NewRouter()

	r.HandleFunc("/", routes.HomeHandler)
	/* ===== PATIENTNS ===== */
	r.HandleFunc("/patients", routes.GetPatientsHandler).Methods("GET")
	r.HandleFunc("/patients/{id}", routes.GetPatientHandler).Methods("GET")
	r.HandleFunc("/patients", routes.PostPatientHandler).Methods("POST")
	r.HandleFunc("/patients/{id}", routes.DeletePatientHandler).Methods("DELETE")
	/* ===== DOCTORS ===== */
	r.HandleFunc("/doctors", routes.GetDoctorsHandler).Methods("GET")
	r.HandleFunc("/doctors/{id}", routes.GetDoctorHandler).Methods("GET")
	r.HandleFunc("/doctors", routes.PostDoctorsHandler).Methods("POST")
	r.HandleFunc("/doctors/{id}", routes.PutDoctorHandler).Methods("PUT")
	r.HandleFunc("/doctors/{id}", routes.DeleteDoctorHandler).Methods("DELETE")
	/* ===== JWT ===== */
	r.HandleFunc("/signup", routes.SignUp).Methods("POST")
	r.HandleFunc("/signin", routes.SignIn).Methods("POST")
	r.HandleFunc("/profile", routes.SeeProfile).Methods("GET")
	
	http.ListenAndServe(":3000", r)


}
