..
# 🎟️ Ticket Booking App (MERN Stack)

## 📌 Overview

The **Ticket Booking App** is a full-stack web application built using the **MERN stack (MongoDB, Express, React, Node.js)**.
It is designed to function at **production scale**, similar to real-world platforms like **BookMyShow**, enabling users to browse events, reserve seats, and complete secure bookings with online payment integration.

---

## 🚀 Features

### 👤 User Features

* Browse, search, and filter events (movies, concerts, sports, etc.).
* View event details, show timings, and seat layouts.
* Select and hold seats in **real-time**.
* Secure checkout with **online payments**.
* Download **e-tickets with QR codes**.
* Cancel bookings (policy-based) and request refunds.
* Receive **email/SMS notifications** for confirmations.

### 🎭 Organizer Features

* Create and manage events (movies, concerts, etc.).
* Schedule shows with venues, timings, and pricing.
* Configure seat layouts and dynamic pricing.
* Monitor bookings and sales in real-time.

### 🛠️ Admin Features

* Manage users, events, and organizers.
* Monitor platform activity with dashboards.
* Access **audit logs** for actions.
* Handle disputes, refunds, and settlements.

### ⚡ Advanced Features

* **Concurrency-safe seat locking** (prevents double booking).
* **Real-time updates** of seat availability via WebSockets/SSE.
* **Role-based access control** (User, Organizer, Admin).
* **JWT authentication** with refresh tokens.
* **Scalable architecture** with modular APIs.
* **Optional caching** with Redis for performance boost.
* **Payment gateway integration** (Razorpay/Stripe).
* **Observability**: logging, health checks, metrics.

---

## 🏗️ Architecture

```
Frontend (React + Vite) 
        ↓
Backend API (Node.js + Express)
        ↓
Database (MongoDB Atlas)
        ↓
Optional Cache (Redis)
```

* **React (Frontend)**: User interface, seat maps, booking flow, and dashboards.
* **Express (Backend)**: REST APIs, authentication, booking logic, payments.
* **MongoDB (Database)**: Stores users, events, venues, shows, bookings, payments.
* **Redis (Optional)**: For seat-locks, caching, and performance optimization.
* **Payment Gateway**: Razorpay/Stripe integration for secure transactions.

---

## 🗂️ Database Schema (MongoDB Collections)

### Users

* name, email, phone, passwordHash, roles (`USER`, `ORGANIZER`, `ADMIN`), status

### Venues

* name, address, seatMapId, amenities, screens

### SeatMaps

* layout of seats (sections, rows, seat numbers, base pricing)

### Events

* title, type (movie/concert/sport), language, rating, organizerId

### Shows

* eventId, venueId, screenId, startAt, endAt, pricingRules, status

### SeatHolds

* showId, userId, selectedSeats\[], expiresAt (with TTL index)

### Bookings

* userId, showId, seats\[], amount, status, qrCode

### Payments

* bookingId, provider, orderId, paymentId, status, amount

### Refunds

* paymentId, amount, status, reason

### AuditLogs

* actorId, action, entity, payload, timestamp

---

## 🌐 API Endpoints (v1)

### Authentication

* `POST /auth/register`
* `POST /auth/login`
* `POST /auth/refresh`
* `POST /auth/logout`

### Events & Shows

* `GET /events` → browse events
* `GET /events/:id`
* `GET /events/:id/shows`
* `GET /shows/:id/availability`

### Booking Flow

* `POST /shows/:id/hold` → lock seats
* `POST /holds/:id/confirm` → confirm booking (before payment)
* `POST /payments/razorpay/order`
* `POST /payments/razorpay/webhook`
* `GET /bookings/me`
* `POST /bookings/:id/cancel`

### Organizer

* `POST /organizer/events`
* `POST /organizer/events/:id/shows`
* `PATCH /organizer/shows/:id/pricing`

### Admin

* `GET /admin/metrics`
* `GET /admin/audits`

---

## 🔑 Seat Locking Strategy

1. When user selects seats → system checks if already **booked/held**.
2. If free → creates a `SeatHold` document with an **expiry (TTL = 8 mins)**.
3. User must complete payment before expiry.
4. On success → booking confirmed, seats removed from hold.
5. On expiry → seats auto-release (via TTL index).

---

## 🛠️ Tech Stack

* **Frontend**: React.js (Vite, React Router, Axios)
* **Backend**: Node.js + Express
* **Database**: MongoDB (Atlas recommended)
* **Authentication**: JWT with access & refresh tokens
* **Payments**: Razorpay/Stripe integration
* **Real-time**: WebSockets/SSE
* **Deployment**:

  * Frontend: Vercel/Netlify
  * Backend: Render/Heroku/AWS
  * Database: MongoDB Atlas

---

## ⚙️ Setup & Installation

### Prerequisites

* Node.js (>=18)
* MongoDB Atlas account
* Razorpay/Stripe account (for payments)





## 📈 Future Enhancements

* AI-based event recommendations.
* Dynamic surge pricing based on demand.
* Multiple payment providers & wallets.
* Organizer revenue settlements.
* Customer support chat integration.
* Full CI/CD pipeline with Docker & Kubernetes.

---

