package models

import (
	"time"
	"gorm.io/gorm"
)

type ExamePatient struct {
	gorm.Model
	Date time.Time `gorm:"type:date; not null" json:"date"`
	Sample string `gorm:"type:varchar(50); not null" json:"sample"`
	Result string `gorm:"type:varchar(50); not null" json:"result"`
	PatientId uint `json:"patient_id"`
	MedicalExamId uint `json:"medical_exams_id"`
}