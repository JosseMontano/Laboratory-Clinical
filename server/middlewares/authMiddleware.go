package middlewares

import (
	"github.com/JosseMontano/clinical-laboratory/utilities"
	"github.com/gofiber/fiber/v2"
)

func IsAuthenticated(c *fiber.Ctx) error{
	cookie := c.Cookies("jwt")
	if _, err := utilities.ParseJwt(cookie); err !=nil{
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "unauthenticated",
		})
	}
	return c.Next()
}