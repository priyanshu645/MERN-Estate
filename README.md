# 🏡 MERN Estate – AI-Powered Real Estate Platform

A full-stack real estate web application built using the MERN stack. MERN Estate allows users to explore property listings, search and filter properties, manage listings, and interact with AI-powered features for a smarter property discovery experience.

## 🚀 Features

- 🔐 User authentication and authorization
- 🏘️ Browse real estate property listings
- 🔎 Search and filter properties
- 📝 Create, update, and manage property listings
- 🖼️ Property image uploads
- 🤖 AI-generated property descriptions
- 🧠 AI-powered property advisor
- ✨ AI property recommendations
- 📍 Property details and listing information
- 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- Tailwind CSS
- Redux Toolkit
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST API

### AI Integration
- Groq API
- LLM-powered property descriptions
- AI-based property search and filtering
- Property recommendation system

### Deployment
- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

## 📂 Project Structure

```text
MERN-Estate/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   │   └── aiService.js
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── assets/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/priyanshu645/MERN-Estate.git
```

Navigate to the project folder:

```bash
cd MERN-Estate
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and configure your environment variables.

```env
PORT=3000
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key
```

Add any additional environment variables required by your backend configuration.

Start the backend development server:

```bash
npm run dev
```

### 3. Setup the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Configure the frontend `.env` file:

```env
VITE_API_URL=http://localhost:3000/api
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will be available at the local URL provided by Vite, usually:

```text
http://localhost:5173
```

## 🤖 AI Features

MERN Estate integrates AI capabilities using the Groq API.

### AI Property Description Generator
Generate descriptive and engaging property descriptions to improve listing quality.

### AI Property Advisor
Get AI-assisted guidance when exploring properties and making real estate decisions.

### AI Property Recommendations
Receive property suggestions based on user preferences and search criteria.

### AI Search & Filter
Use natural language to describe property requirements and convert them into search filters.

## 🌐 Deployment

### Frontend Deployment
The frontend can be deployed using Netlify.

Configure the production API URL in the frontend environment variables:

```env
VITE_API_URL=https://your-backend-url/api
```

### Backend Deployment
The backend can be deployed using Render.

Set all backend environment variables in:

**Render Dashboard → Your Backend Service → Environment**

Never expose API keys or secrets in frontend code or commit them to GitHub.

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO` | MongoDB connection string |
| `JWT_SECRET` | Secret used for authentication |
| `GROQ_API_KEY` | Groq API key for AI features |
| `VITE_API_URL` | Backend API URL used by frontend |

> Environment variable names may vary depending on your backend configuration. Check the source code before adding or changing them.

## 🧑‍💻 Development Workflow

```text
Local Development
      ↓
   VS Code
      ↓
    Git
      ↓
   GitHub
      ↓
   Render / Netlify
      ↓
   Live Application
```

1. Clone the repository.
2. Make changes in VS Code.
3. Test the application locally.
4. Commit and push changes to GitHub.
5. Deploy updated code through Render or Netlify.

## 📌 Future Improvements

- Advanced property search
- Map-based property exploration
- Saved and favorite listings
- Improved AI personalization
- Real-time messaging between buyers and sellers
- Enhanced property analytics

## 👨‍💻 Author

**Priyanshu**

GitHub: [@priyanshu645](https://github.com/priyanshu645)

## 📄 License

This project is developed for educational and portfolio purposes.

---

⭐ If you find this project interesting, consider starring the repository.
