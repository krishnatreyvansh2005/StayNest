# 🏠 StayNest

A full-stack Airbnb-inspired stay listing web application built with **Node.js, Express.js, MongoDB, and EJS**.

StayNest allows users to explore properties, create and manage listings, upload images, write reviews, and securely manage their accounts.

## 🚀 Live Demo

Coming soon.

---

## ✨ Features

* 🔐 User Authentication & Authorization
* 🏡 Create, Read, Update, and Delete Listings
* 📸 Image Upload with Cloudinary
* ⭐ Ratings and Reviews
* 👤 User Account Management
* 🔒 Secure Session Management
* ⚡ Flash Messages
* 📱 Responsive UI
* 🏷️ Stay categories and modern listing interface
* 💰 Listing price and property information
* ✏️ Edit and delete listing functionality

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap
* EJS Templates
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local Strategy

### Image Storage

* Cloudinary
* Multer

### Other Tools

* Git & GitHub
* dotenv
* Method Override

---

## 📂 Project Structure

```text
StayNest
│
├── controllers
├── models
├── routes
├── views
├── public
├── utils
├── init
├── classroom
│
├── app.js
├── cloudconfig.js
├── middleware.js
├── schema.js
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/krishnatreyvansh2005/StayNest.git
```

### 2. Go to the Project Directory

```bash
cd StayNest
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
ATLASDB_URL=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret
SECRET=your_session_secret
```

### 5. Run the Application

```bash
npm start
```

The application will run locally at:

```text
http://localhost:8080
```

---

## 📸 Screenshots

### StayNest Home Page

<img src="./Screenshot 2026-07-30 015421.png" width="800"/>

---

## 🔮 Future Improvements

* 💳 Payment Gateway Integration
* 🗺️ Interactive Maps
* 🔎 Advanced Search and Filtering
* ❤️ Wishlist / Favorites
* 📍 Location-based Search
* ☁️ Cloud Deployment
* 📱 Further Mobile UI Improvements

---

## 👨‍💻 Author

**Vansh Krishnatrey**

B.Tech Computer Science Engineering

GitHub:
https://github.com/krishnatreyvansh2005

LinkedIn:
https://linkedin.com/in/vansh-krishnatrey

🙏 Acknowledgement

This project was developed by customizing and extending an existing Airbnb-style project structure. The original project was created by Yash Arya.

The current version includes customized StayNest branding, UI, layouts, rating interface, and other modifications.

⭐ If you find StayNest useful, consider giving the repository a star!