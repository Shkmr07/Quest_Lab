# 📦 User Profile API (GET + POST with Image Upload)

This is a simple Node.js + Express project that allows you to:

- ✅ Get a list of user profiles (`GET /api/form`)
- ✅ Add a new user profile with an image using `multer` (`POST /api/form/addUser`)

---

## 🧪 API Endpoints

### 🔹 GET `/api/form`

> Fetch all users

#### ✔️ Sample Response:
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
