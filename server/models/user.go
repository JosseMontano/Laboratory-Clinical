package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id       uint
	Email    string `gorm:"unique" json:"email"`
	Password []byte `json:"password"`
	//Role     string `json:"role"`
	DoctorId uint `json:"doctor_id"`
}
