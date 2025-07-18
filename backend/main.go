package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	mailgun "github.com/mailgun/mailgun-go/v5"
)

type ContactForm struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Message string `json:"message" binding:"required"`
}

type CateringService struct {
	ID          int      `json:"id"`
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Price       string   `json:"price"`
	Images      []string `json:"images"`
	Category    string   `json:"category"`
}

type APIResponse struct {
	Status  string      `json:"status"`
	Message string      `json:"message,omitempty"`
	Data    interface{} `json:"data,omitempty"`
}

var services = []CateringService{
	{
		ID:          1,
		Name:        "Wedding Catering",
		Description: "Complete wedding catering service with traditional and modern cuisine",
		Price:       "₹500-800 per person",
		Images:      []string{"/images/wedding1.jpg", "/images/wedding2.jpg"},
		Category:    "wedding",
	},
	{
		ID:          2,
		Name:        "Corporate Events",
		Description: "Professional catering for corporate meetings and events",
		Price:       "₹300-500 per person",
		Images:      []string{"/images/corporate1.jpg", "/images/corporate2.jpg"},
		Category:    "corporate",
	},
	{
		ID:          3,
		Name:        "Birthday Parties",
		Description: "Fun and festive catering for birthday celebrations",
		Price:       "₹250-400 per person",
		Images:      []string{"/images/birthday1.jpg", "/images/birthday2.jpg"},
		Category:    "birthday",
	},
	{
		ID:          4,
		Name:        "Festival Catering",
		Description: "Traditional festival foods and celebration catering",
		Price:       "₹200-350 per person",
		Images:      []string{"/images/festival1.jpg", "/images/festival2.jpg"},
		Category:    "festival",
	},
}

func main() {
	// Set Gin mode based on environment
	if os.Getenv("GIN_MODE") == "" {
		gin.SetMode(gin.DebugMode)
	}

	r := gin.Default()

	// CORS middleware
	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, APIResponse{
			Status:  "success",
			Message: "Sadguru Catering API is running",
		})
	})

	// API routes
	api := r.Group("/api/v1")
	{
		// Get all services
		api.GET("/services", getServices)

		// Get service by ID
		api.GET("/services/:id", getServiceByID)

		// Get services by category
		api.GET("/services/category/:category", getServicesByCategory)

		// Contact form submission
		api.POST("/contact", contactHandler)

		// Get company info
		api.GET("/company", getCompanyInfo)
	}

	// Serve static files
	r.Static("/images", "./static/images")
	r.Static("/assets", "./static/assets")

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("🚀 Sadguru Catering API starting on port %s", port)
	log.Fatal(r.Run(":" + port))
}

func getServices(c *gin.Context) {
	c.JSON(http.StatusOK, APIResponse{
		Status: "success",
		Data:   services,
	})
}

func getServiceByID(c *gin.Context) {
	id := c.Param("id")

	for _, service := range services {
		if service.ID == parseStringToInt(id) {
			c.JSON(http.StatusOK, APIResponse{
				Status: "success",
				Data:   service,
			})
			return
		}
	}

	c.JSON(http.StatusNotFound, APIResponse{
		Status:  "error",
		Message: "Service not found",
	})
}

func getServicesByCategory(c *gin.Context) {
	category := c.Param("category")
	var filteredServices []CateringService

	for _, service := range services {
		if service.Category == category {
			filteredServices = append(filteredServices, service)
		}
	}

	c.JSON(http.StatusOK, APIResponse{
		Status: "success",
		Data:   filteredServices,
	})
}

func contactHandler(c *gin.Context) {
	var form ContactForm

	if err := c.ShouldBindJSON(&form); err != nil {
		c.JSON(http.StatusBadRequest, APIResponse{
			Status:  "error",
			Message: "Invalid form data: " + err.Error(),
		})
		return
	}

	// Send email asynchronously
	go sendMailgun(form)

	// Log the enquiry
	log.Printf("📧 New enquiry from: %s (%s)", form.Name, form.Email)

	c.JSON(http.StatusOK, APIResponse{
		Status:  "success",
		Message: "Thank you for your enquiry! We'll get back to you soon.",
	})
}

func getCompanyInfo(c *gin.Context) {
	companyInfo := map[string]interface{}{
		"name":        "Sadguru Catering Services",
		"description": "Premium catering services for all your special occasions",
		"phone":       "+91 7702638605",
		"email":       "saivamshik11@gmail.com",
		"address":     "17-38/1 vishnupuricolony road no 12 , medipally , peerzadiguda ",
		"established": "2015",
		"specialties": []string{"Traditional Tamil Cuisine", "North Indian", "South Indian", "Chinese", "Continental"},
		"social": map[string]string{
			"facebook":  "https://facebook.com/sadgurucatering",
			"instagram": "https://instagram.com/sadgurucatering",
			"whatsapp":  "https://wa.me/7674989311",
		},
	}

	c.JSON(http.StatusOK, APIResponse{
		Status: "success",
		Data:   companyInfo,
	})
}

func sendMailgun(form ContactForm) {
	domain := os.Getenv("MAILGUN_DOMAIN")
	apiKey := os.Getenv("MAILGUN_API_KEY")
	recipientEmail := os.Getenv("RECIPIENT_EMAIL")

	if domain == "" || apiKey == "" {
		log.Println("⚠️  Mailgun credentials not configured. Email not sent.")
		log.Printf("📝 Contact form data: Name=%s, Email=%s, Message=%s", form.Name, form.Email, form.Message)
		return
	}

	if recipientEmail == "" {
		recipientEmail = "info@sadgurucatering.com"
	}

	mg := mailgun.NewMailgun(domain)
	mg.SetAPIKey(apiKey)

	subject := "New Enquiry from " + form.Name + " - Sadguru Catering"
	body := `
New catering enquiry received:

Name: ` + form.Name + `
Email: ` + form.Email + `
Message: ` + form.Message + `

Please respond to this enquiry promptly.

Best regards,
Sadguru Catering System
	`

	message := mg.NewMessage(
		"Sadguru Catering <noreply@"+domain+">",
		subject,
		body,
		recipientEmail,
	)

	// Set reply-to as the customer's email
	message.SetReplyTo(form.Email)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()

	resp, id, err := mg.Send(ctx, message)
	if err != nil {
		log.Printf("❌ Mailgun error: %v", err)
	} else {
		log.Printf("✅ Email sent successfully - ID: %s, Response: %s", id, resp)
	}
}

// Helper function to parse string to int (simplified)
func parseStringToInt(s string) int {
	switch s {
	case "1":
		return 1
	case "2":
		return 2
	case "3":
		return 3
	case "4":
		return 4
	default:
		return 0
	}
}
