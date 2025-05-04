// handlers/contact.go
package main

import (
  "context"
  "log"
  "time"
  "net/http"
  "github.com/gin-gonic/gin"
  mailgun "github.com/mailgun/mailgun-go/v5"
)

type ContactForm struct{ Name, Email, Message string }

func ContactHandler(c *gin.Context) {
  var f ContactForm
  if err := c.ShouldBindJSON(&f); err != nil {
    c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
  }
  go sendMailgun(f)
  c.JSON(http.StatusOK, gin.H{"status": "enquiry received"})
}

func sendMailgun(f ContactForm) {
  mg := mailgun.NewMailgun("YOUR_DOMAIN", "YOUR_API_KEY")
  message := mg.NewMessage(
    "Sadguru Catering <noreply@yourdomain.com>",
    "New Enquiry from "+f.Name,
    f.Message+"\n\nFrom: "+f.Email,
    "you@yourdomain.com",
  )
  ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
  defer cancel()
  resp, id, err := mg.Send(ctx, message)
  if err != nil {
    log.Println("Mailgun error:", err)
  } else {
    log.Printf("Mailgun queued: ID=%s Resp=%s\n", id, resp)
  }
}
