package db

import (
	"log"
	"os"

	"github.com/JosseMontano/clinical-laboratory/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func LoadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error to loading .env")
	}
}

var DB *gorm.DB

func Conn() {
	LoadEnv()
	host := os.Getenv("host")
	user := os.Getenv("user")
	password := os.Getenv("password")
	dbname := os.Getenv("dbname")
	port := os.Getenv("port")
	var DSN = "host=" + host + " user=" + user + " password=" + password + " dbname=" + dbname + " port=" + port
	db, err := gorm.Open(postgres.Open(DSN), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
		return
	}
	DB = db
	db.AutoMigrate(&models.User{})
}
