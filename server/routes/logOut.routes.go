package routes

import (
	"net/http"
	"time"
)

func Logout(w http.ResponseWriter, r *http.Request){
	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires: time.Unix(0, 0),
		HttpOnly: true,
	}
	http.SetCookie(w, cookie)
	w.WriteHeader(http.StatusAccepted)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte("LogOut Success"))
}