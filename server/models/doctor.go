package models

import "gorm.io/gorm"

type Doctor struct {
	gorm.Model
	FirstName      string `gorm:"type:varchar(50);not null" json:"first_name"`
	LastName       string `gorm:"type:varchar(50);not null" json:"last_name"`
	MotherLastName string `gorm:"type:varchar(50);not null" json:"mother_last_name"`
	Age            uint8  `gorm:"not null" json:"age"`
	Sex            string `gorm:"type:varchar(50);not null" json:"sex"`
	PatientDoctors []PatientDoctor `json:"patient_doctor"`
	User []User `json:"users"`
}
