package models
import "gorm.io/gorm"
type MedicalExam struct{
	gorm.Model
	Analysis string `gorm:"type:varchar(50); not null" json:"analysis"`
	ReferenceRange string `gorm:"type:varchar(50); not null" json:"reference_range"`
	ExamePatient []ExamePatient `json:"examen_patient"`
}