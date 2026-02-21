# 📩 Notification Dashboard (Full Stack Assignment)

This project is a **full-stack notification dashboard** built as part of an internship assignment.  
It demonstrates the ability to quickly build a **functional, clean, and well-structured application** using practical (vibe coding) approaches.

The application allows users to log **Email, SMS, and WhatsApp notifications**, store them in a database, and view them in tab-based list views.

---

## 🚀 Features

- Single-page dashboard with **3 tabs**:
  - Email
  - SMS
  - WhatsApp
- Each tab displays a **list view (table)** with relevant columns
- Separate forms to:
  - Send Email
  - Send SMS
  - Send WhatsApp
- Data is **saved to the database** (no real messages are sent)
- Lists **auto-refresh** after form submission
- Basic input validation for better UX
- Clean and minimal UI using basic CSS

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Basic CSS (`index.css`)
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
project-root/
│
├── backend/
│   ├── models/
│   │   ├── Email.js
│   │   ├── Sms.js
│   │   └── Whatsapp.js
│   ├── routes/
│   │   ├── email.routes.js
│   │   ├── sms.routes.js
│   │   └── whatsapp.routes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Tabs.jsx
│   │   │   ├── TableView.jsx
│   │   │   └── Forms.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🔗 API Endpoints

### Email
- `GET /email` → Fetch email logs
- `POST /email` → Save email entry

### SMS
- `GET /sms` → Fetch SMS logs
- `POST /sms` → Save SMS entry

### WhatsApp
- `GET /whatsapp` → Fetch WhatsApp logs
- `POST /whatsapp` → Save WhatsApp entry

---

## 📝 Data Schema

### Email
- emailTo
- createdAt (timestamp – backend generated)

### SMS / WhatsApp
- mobileNumber
- message
- createdAt (timestamp – backend generated)

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone <your-github-repo-url>
cd project-root
```

---

### 2️⃣ Start Backend
```bash
cd backend
npm install
node server.js
```

Make sure MongoDB is running locally.

Backend runs on:
```
http://localhost:5000
```

---

### 3️⃣ Start Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## ✅ Assignment Notes

- No real Email/SMS/WhatsApp is sent
- All data is stored and retrieved from the database
- Serial numbers are **generated dynamically in the UI**
- Timestamps are **100% backend-generated**
- Separate APIs and collections are used for Email, SMS, and WhatsApp
- Application focuses on clarity, correctness, and speed of development

---

## 🧠 Design Decisions

- **Separate endpoints and collections** for each notification type
- **Minimal UI** to keep focus on functionality
- **Client-side validation** for better UX
- Serial number handled at UI level (presentation concern)

---

## 📌 Conclusion

This project fulfills all the requirements of the assignment and demonstrates:
- Full-stack integration
- Clean API design
- Practical frontend development
- Clear data flow and state management
