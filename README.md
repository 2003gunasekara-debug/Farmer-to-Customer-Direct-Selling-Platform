<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-brightgreen?style=for-the-badge&logo=mongodb&logoColor=white" alt="MERN Stack" />
  <img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
</p>

# 🌾 Farmer to Customer Direct Selling Platform

> A full-stack MERN web application that connects Sri Lankan farmers directly with customers — eliminating middlemen, ensuring fresh produce, and empowering local agriculture.

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Seeding Sample Data](#-seeding-sample-data)
- [API Reference](#-api-reference)
- [User Roles & Workflows](#-user-roles--workflows)
- [Frontend Pages](#-frontend-pages)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 About the Project

The **Farmer to Customer Direct Selling Platform** bridges the gap between local farmers and consumers. Farmers can list their fresh produce, customers can browse, add to cart, and checkout seamlessly — all through a modern, responsive web interface. The platform features multi-role dashboards, real-time notifications, integrated payment processing, and a promotions engine to boost sales.

### 🎯 Problem Statement

Traditional agricultural supply chains involve multiple intermediaries, leading to:
- Higher prices for consumers
- Lower profits for farmers
- Reduced freshness of produce

This platform solves these issues by providing a **direct digital marketplace**.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🔐 **Authentication & Authorization** | JWT access + refresh tokens with role-based access control (RBAC) |
| 👥 **Multi-Role System** | Admin, Farmer, Customer, and Delivery Partner roles |
| 🛒 **Shopping Cart & Checkout** | Full cart management with COD and Stripe test payment support |
| 📦 **Order Management** | Complete order lifecycle with status tracking and delivery assignment |
| 🖼️ **Image Uploads** | Cloudinary integration via multer for product images |
| 🔔 **Real-Time Notifications** | Socket.io powered live notifications across all roles |
| 🏷️ **Promotions Engine** | Create, manage, and auto-expire promotional offers |
| ⭐ **Reviews & Ratings** | Customers can review products after successful delivery |
| 📊 **Analytics Dashboards** | Interactive charts with Recharts for product insights |
| 🗺️ **Map Integration** | Leaflet-based address selection for delivery |
| 🛡️ **Security** | Helmet, CORS, rate limiting, and input validation |
| 📧 **Email Support** | Nodemailer integration ready for transactional emails |

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Authentication (access + refresh tokens) |
| **Stripe** | Payment processing (test mode) |
| **Cloudinary** | Cloud image storage |
| **Socket.io** | Real-time communication |
| **Nodemailer** | Email service |
| **Helmet** | HTTP security headers |
| **Morgan** | HTTP request logger |

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library |
| **Vite** | Build tool & dev server |
| **Redux Toolkit** | State management |
| **React Router v6** | Client-side routing |
| **TailwindCSS** | Utility-first CSS framework |
| **Recharts** | Data visualization |
| **Leaflet** | Interactive maps |
| **Axios** | HTTP client |
| **React Icons** | Icon library |
| **React Hot Toast** | Toast notifications |

---

## 📁 Project Structure

```
farmer-customer-platform/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── MapAddressModal.jsx
│   │   │   ├── NotificationBell.jsx
│   │   │   ├── PromotionShowcaseCard.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── RoleSidebarLayout.jsx
│   │   │   └── StarRating.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── ProductInsights.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── OrderDetails.jsx
│   │   │   ├── Promotions.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Notifications.jsx
│   │   │   ├── ReviewManagement.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminOrders.jsx
│   │   │   ├── AdminProducts.jsx
│   │   │   ├── AdminUsers.jsx
│   │   │   ├── FarmerDashboard.jsx
│   │   │   ├── FarmerOrders.jsx
│   │   │   ├── FarmerProducts.jsx
│   │   │   ├── CustomerDashboard.jsx
│   │   │   ├── DeliveryDashboard.jsx
│   │   │   └── DeliveryOrdersToDeliver.jsx
│   │   ├── redux/              # Redux Toolkit slices & store
│   │   ├── services/           # API service layer
│   │   ├── constants/          # App constants
│   │   ├── utils/              # Utility functions
│   │   ├── App.jsx             # Root component with routing
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── server/                     # Express.js backend
│   ├── config/                 # Database configuration
│   ├── constants/              # Server constants
│   ├── controllers/            # Route handlers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   ├── promotionController.js
│   │   ├── reviewController.js
│   │   └── notificationController.js
│   ├── middleware/              # Custom middleware
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   ├── approvedFarmer.js
│   │   ├── errorMiddleware.js
│   │   ├── rateLimiter.js
│   │   └── uploadMiddleware.js
│   ├── models/                 # Mongoose schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   ├── Promotion.js
│   │   ├── Review.js
│   │   └── Notification.js
│   ├── routes/                 # API route definitions
│   ├── utils/                  # Utility functions (email, etc.)
│   ├── uploads/                # Local file uploads
│   ├── seeder.js               # Database seeder script
│   ├── server.js               # Entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **npm** (comes with Node.js)
- **Stripe** account (for test payments) — [Sign Up](https://stripe.com/)
- **Cloudinary** account (for image uploads) — [Sign Up](https://cloudinary.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/farmer-customer-platform.git
   cd farmer-customer-platform
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables** (see [Environment Variables](#-environment-variables))

5. **Run the development servers**

   **Terminal 1 — Backend (port 5000):**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 — Frontend (port 5173):**
   ```bash
   cd client
   npm run dev
   ```

6. **Open your browser** and navigate to `http://localhost:5173`

---

## 🔧 Environment Variables

### Server (`server/.env`)

Create a `.env` file in the `server/` directory based on `.env.example`:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://<user>:<pass>@cluster.mongodb.net/` |
| `MONGO_DB` | Database name | `farmer_customer_platform` |
| `JWT_SECRET` | JWT signing secret | `your-jwt-secret-key` |
| `JWT_REFRESH_SECRET` | Refresh token secret | `your-refresh-secret-key` |
| `CLIENT_URL` | Frontend URL | `http://localhost:5173` |
| `STRIPE_SECRET` | Stripe secret key (test) | `sk_test_...` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your-cloud-name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `123456789` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `your-api-secret` |
| `SMTP_HOST` | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | SMTP username | `your-email@gmail.com` |
| `SMTP_PASS` | SMTP password / app password | `your-app-password` |
| `SMTP_FROM` | Sender email | `noreply@farmplatform.com` |

### Client (`client/.env`)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |

---

## 🌱 Seeding Sample Data

Populate the database with sample users, products, promotions, orders, reviews, and notifications:

```bash
cd server
npm run seed
```

### Default Seeded Users

| Role | Email | Password |
|------|-------|----------|
| Admin | `admin@farm.com` | `password123` |
| Farmer | `farmer@farm.com` | `password123` |
| Customer | `customer@farm.com` | `password123` |
| Delivery | `delivery@farm.com` | `password123` |

---

## 📡 API Reference

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login & receive tokens |
| `POST` | `/api/auth/refresh` | Refresh access token |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users/profile` | Get current user profile |
| `PUT` | `/api/users/profile` | Update user profile |
| `GET` | `/api/users` | List all users (Admin) |
| `PUT` | `/api/users/approve/:id` | Approve a farmer (Admin) |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | List products (paginated, filterable) |
| `GET` | `/api/products/:id` | Get product details |
| `POST` | `/api/products` | Create product (Farmer) |
| `PUT` | `/api/products/:id` | Update product (Farmer) |
| `DELETE` | `/api/products/:id` | Delete product (Farmer/Admin) |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/orders` | Create order (Customer) |
| `GET` | `/api/orders/me` | Get customer's orders |
| `GET` | `/api/orders/farmer` | Get farmer's orders |
| `GET` | `/api/orders/delivery` | Get delivery orders |
| `PUT` | `/api/orders/:id/status` | Update order status |

### Promotions
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/promotions` | List active promotions |
| `POST` | `/api/promotions` | Create promotion (Admin/Farmer) |
| `PUT` | `/api/promotions/:id` | Update promotion |
| `DELETE` | `/api/promotions/:id` | Delete promotion |

### Reviews
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/reviews` | Add review (after delivery) |
| `GET` | `/api/reviews/product/:id` | Get product reviews |

### Notifications
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notifications` | Get user notifications |

> **Query Parameters for Products:** `page`, `limit`, `search`, `category`, `sort`, `minPrice`, `maxPrice`

---

## 👥 User Roles & Workflows

```
┌──────────┐     Registers     ┌──────────┐     Approves     ┌──────────┐
│ Customer │ ←───────────────→ │  System  │ ←──────────────→ │  Admin   │
└────┬─────┘                   └────┬─────┘                  └────┬─────┘
     │                              │                              │
     │ Browse, Cart,                │ Manage Users,                │
     │ Checkout, Review             │ Products, Orders             │
     │                              │                              │
     ▼                              ▼                              ▼
┌──────────┐     Lists         ┌──────────┐    Delivers      ┌──────────┐
│ Products │ ←───────────────→ │  Farmer  │ ──────────────→  │ Delivery │
└──────────┘                   └──────────┘                   └──────────┘
```

- **Customer** → Browse products, add to cart, checkout (COD / Stripe), track orders, leave reviews
- **Farmer** → List products, manage inventory, view orders, create promotions, view analytics
- **Delivery Partner** → View assigned deliveries, update delivery status
- **Admin** → Approve farmers, manage all users/products/orders, system oversight

---

## 🖥️ Frontend Pages

| Page | Route | Access |
|------|-------|--------|
| Home | `/` | Public |
| Login | `/login` | Public |
| Register | `/register` | Public |
| Product Listing | `/products` | Public |
| Product Details | `/products/:id` | Public |
| Cart | `/cart` | Customer |
| Checkout | `/checkout` | Customer |
| Orders | `/orders` | Authenticated |
| Order Details | `/orders/:id` | Authenticated |
| Profile | `/profile` | Authenticated |
| Notifications | `/notifications` | Authenticated |
| Promotions | `/promotions` | Authenticated |
| Product Insights | `/insights/:id` | Farmer |
| Admin Dashboard | `/admin/dashboard` | Admin |
| Admin Users | `/admin/users` | Admin |
| Admin Products | `/admin/products` | Admin |
| Admin Orders | `/admin/orders` | Admin |
| Farmer Dashboard | `/farmer/dashboard` | Farmer |
| Farmer Products | `/farmer/products` | Farmer |
| Farmer Orders | `/farmer/orders` | Farmer |
| Customer Dashboard | `/customer/dashboard` | Customer |
| Delivery Dashboard | `/delivery/dashboard` | Delivery |
| Delivery Orders | `/delivery/orders` | Delivery |

---

## 🌐 Deployment

### Backend (Render / Railway)
1. Connect your GitHub repository
2. Set build command: `cd server && npm install`
3. Set start command: `cd server && npm start`
4. Add all environment variables from `server/.env`

### Frontend (Vercel)
1. Connect your GitHub repository
2. Set root directory to `client`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variable: `VITE_API_URL=https://your-api-url.com`

### Database (MongoDB Atlas)
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Whitelist your server's IP address
3. Copy the connection string to `MONGO_URI`

---

## 🧪 Testing

- **Health Check:** `GET /` on server returns `"API running"`
- **Stripe Test Card:** `4242 4242 4242 4242` (any future date, any CVC)
- **RBAC Testing:** Create users with different roles and verify access restrictions
- **Socket.io:** Open multiple browser tabs with different roles to test real-time notifications

---

## 🔮 Future Enhancements

- [ ] Email triggers for order confirmation and farmer approval
- [ ] Advanced product image gallery with drag-and-drop upload
- [ ] Input validation & sanitization with express-validator
- [ ] Enhanced dashboard charts and analytics
- [ ] Mobile-responsive PWA support
- [ ] Order tracking with live GPS location
- [ ] Multi-language support (Sinhala, Tamil, English)
- [ ] Inventory management with low-stock alerts
- [ ] Customer loyalty/rewards program

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ for Sri Lankan Farmers
</p>
