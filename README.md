# 🩺 Doctor Search & Booking App

**MediConnect** is a full-stack, responsive web application that allows users to search for doctors by location and specialty, view doctor details, sign up or log in, and book appointments.

Built using:
- ⚛️ **Frontend**: Next.js + Tailwind CSS
- ☕ **Backend**: Java Spring Boot
- 🐬 **Database**: MySQL

---

## 🚀 Features

- 🔍 Search doctors by location and specialization
- 👨‍⚕️ View detailed doctor profile
- 📝 Book appointments
- 🔐 User login/signup system
- 🎨 Responsive UI with Tailwind CSS

---

## 📁 Folder Structure

```
doctor-app/
├── backend/
│   ├── src/main/java/com/practo/doctor/
│   │   ├── Doctor.java
│   │   ├── Booking.java
│   │   ├── User.java
│   │   ├── DoctorRepository.java
│   │   ├── BookingRepository.java
│   │   ├── UserRepository.java
│   │   ├── DoctorController.java
│   │   ├── BookingController.java
│   │   └── AuthController.java
│   ├── src/main/resources/application.properties
│   └── pom.xml
├── frontend/
│   ├── pages/
│   │   ├── index.js
│   │   ├── search.js
│   │   ├── doctor/[id].js
│   │   ├── book/[id].js
│   │   ├── login.js
│   │   └── signup.js
│   ├── styles/globals.css
│   ├── .env.local
│   ├── tailwind.config.js
│   └── postcss.config.js
├── database/init.sql
└── README.md
```

---

## ⚙️ Getting Started

### 1. 📦 Backend Setup (Spring Boot)

- Configure MySQL credentials in `application.properties`

```
spring.datasource.url=jdbc:mysql://localhost:3306/practo
spring.datasource.username=root
spring.datasource.password=root@123
```

- Run app with:

```bash
cd backend
./mvnw spring-boot:run
```

---

### 2. 🖥️ Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

- Set API base URL in `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

---

### 3. 🗃️ Database Setup (MySQL)

- Run the init script:

```bash
mysql -u root -p < database/init.sql
```

---

## 📌 Sample URLs

- Home: `http://localhost:3000`
- Doctor listing: `/search?location=JP Nagar&specialization=Dermatologist`
- Detail view: `/doctor/1`
- Book appointment: `/book/1`
- Login: `/login`
- Signup: `/signup`

---

## ✅ To-Do

- [ ] JWT-based secure authentication
- [ ] Admin panel to manage doctors/bookings
- [ ] Email notifications

---


## 📄 License

This project is licensed under the MIT License.
