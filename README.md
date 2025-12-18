# 🐞 Bug Tracker – Angular + ASP.NET Core

A full-stack **Bug Management application** built with **Angular 16** (frontend) and **ASP.NET Core Web API (Minimal API)** following clean architecture principles.

This project demonstrates **real-world CRUD operations**, pagination, validation handling, and proper UI–API integration.

---

## ✨ Features

### Frontend (Angular 16)
- Bug listing with pagination
- Create, Edit, Delete bugs
- Reusable Add/Edit form
- Enum mapping (BugStatus → readable text)
- Proper API error & validation handling
- Cancel action for forms
- Clean routing (`/bugs`, `/bugs/add`, `/bugs/edit/:id`)
- Bootstrap-based responsive UI

### Backend (ASP.NET Core)
- Minimal APIs
- FluentValidation for request validation
- Paginated API responses
- Clean DTO separation
- Consistent API response structure

---

## 🧱 Tech Stack

### Frontend
- Angular 16
- TypeScript
- Bootstrap 5
- ngx-pagination
- Angular Router
- HttpClient

### Backend
- ASP.NET Core Web API
- Minimal APIs
- FluentValidation
- Entity Framework Core
- SQL Database

---

## 📂 Project Structure (Angular)

src/app
│
├── components
│ ├── bugs-list
│ └── add-bug
│
├── models
│ ├── bug.model.ts
│ ├── bug-status.enum.ts
│ └── api-response.model.ts
│
├── requests
│ ├── create-bug.request.ts
│ ├── update-bug.request.ts
│ └── pagination.request.ts
│
├── services
│ └── bug.service.ts
│
└── app-routing.module.ts


---

## 🔌 API Endpoints

Base URL: http://localhost:5091/api/bugs


| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/` | Create bug |
| PUT | `/{id}` | Update bug |
| DELETE | `/{id}` | Delete bug |
| GET | `/{id}` | Get bug by id |
| POST | `/pagination` | Get paginated bug list |

---

## 📦 API Response Format

### Success Response
```json
{
  "success": true,
  "message": null,
  "data": {
    "items": [],
    "totalCount": 18,
    "pageNumber": 1,
    "totalPages": 6
  }
}

