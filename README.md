# 📦 User Profile API (GET + POST with Image Upload)

This is a simple **Node.js + Express** project with image upload support using `multer`. It allows you to:

- ✅ Get a list of user profiles (`GET /api/form`)
- ✅ Add a new user profile with an image (`POST /api/form/addUser`)

## ⚙️ Installation Guide

### Backend Setup

```bash
cd Backend
npm install
npm run server
```

> By default, the backend server runs at `http://localhost:5000`

### Frontend Setup

```bash
cd Frontend/QuestLab
npm install
npm run dev
```

> By default, the frontend runs at `http://localhost:3000`

## 🌐 API Endpoints

### 🔹 GET `/api/form`

Fetch all user profiles.

**Sample Response:**
```json
[
  {
    "firstName": "Ayush",
    "lastName": "Singh",
    "role": "Full Stack Developer",
    "image": "http://localhost:5000/uploads/ayush.jpg",
    "linkedin": "https://linkedin.com/in/ayushkumarsingh",
    "twitter": "https://twitter.com/ayush_dev"
  }
]
```

### 🔹 POST `/api/form/addUser`

Add a new user profile with an image (use `multipart/form-data`).

**Fields to send:**
- `firstName` (string)
- `lastName` (string)
- `role` (string)
- `linkedin` (string)
- `twitter` (string)
- `image` (file)

**Sample FormData in Postman:**

| Key       | Type | Value |
|-----------|------|--------|
| firstName | Text | Ayush |
| lastName  | Text | Singh |
| role      | Text | Full Stack Developer |
| linkedin  | Text | https://linkedin.com/in/ayushkumarsingh |
| twitter   | Text | https://twitter.com/ayush_dev |
| image     | File | [Choose File] |

**Success Response:**
```json
{
  "message": "User added successfully"
}
```

## 📝 Notes

- Ensure the `uploads/` folder exists in the backend directory to store uploaded images.
- Use `cors` and proxy configuration if frontend and backend are on different ports during development.
