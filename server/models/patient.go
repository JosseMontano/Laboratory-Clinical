package models

import "gorm.io/gorm"

type Patient struct {
	gorm.Model
	FirstName      string   `gorm:"type:varchar(50);not null" json:"first_name"`
	LastName       string   `gorm:"type:varchar(50);not null" json:"last_name"`
	MotherLastName string   `gorm:"type:varchar(50);not null" json:"mother_last_name"`
	Age            uint8      `gorm:"not null" json:"age"`
	Sex            string   `gorm:"type:varchar(50);not null" json:"sex"`
	ExamePatient []ExamePatient `json:"examen_patient"`
	PatientDoctors []PatientDoctor `json:"patients_doctor"`
}
