package models

import (
	"time"

	"gorm.io/gorm"
)

type PatientDoctor struct {
	gorm.Model
	Date time.Time `gorm:"type:date; not null" json:"date"`
	PatientID uint `json:"patient_id"`
	DoctorID uint `json:"doctor_id"`
}