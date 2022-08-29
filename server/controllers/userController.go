package controllers

import (
	"github.com/JosseMontano/clinical-laboratory/db"
	"github.com/JosseMontano/clinical-laboratory/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func AllUsers(c *fiber.Ctx) error{
	var users []models.User
	db.DB.Find(&users)
	return c.JSON(users)
}
func CreateUser(c *fiber.Ctx) error{
	var user models.User
	if err := c.BodyParser(&user); err !=nil{
		return err
	}
	password, _ := bcrypt.GenerateFromPassword([]byte("1234"), 14)
	user.Password = password
	db.DB.Create(&user)
	return c.JSON(user)
}