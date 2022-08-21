package models

type Token struct {
	Email       string `json:"email"`
	Name	string `json:"name"`
	TokenString string `json:"token"`
}