# ☕ Midnight Brew - Coffee Shop

Midnight Brew is a minimalist, modern, and monochromatic coffee shop website built for a premium user experience. It features a complete product catalog, a dedicated receipt-style checkout system, and a full Stripe payment integration.

![Midnight Brew Preview](public/favicon.svg)

## ✨ Features

- **🌙 Dark Theme Aesthetics**: A sleek, high-end UI designed with a monochromatic palette.
- **🛒 Interactive Cart**: Add and remove items with real-time total and tax calculation.
- **🧾 Receipt Checkout**: A unique checkout page that generates a printable receipt.
- **💳 Stripe Integration**: Secure payment processing via Stripe's hosted checkout.
- **🖨️ Print Functionality**: Easy-to-use "Print Receipt" feature for users.
- **🎨 Custom Branding**: Minimalist SVG branding and custom favicon.

## 🚀 Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Lucide React (Icons).
- **Backend**: Node.js, Express, CORS, Dotenv.
- **Payment**: Stripe (@stripe/stripe-js).

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- A Stripe account for API keys

### 1. Clone & Install
```bash
git clone https://github.com/iamtakura/Midnight_Brew-Coffee-Shop-.git
cd "Midnight Brew"
npm install
cd server && npm install
```

### 2. Configure Keys
Create a root `.env` file for the frontend:
```env
VITE_STRIPE_PUBLISHABLE_KEY=your_pk_test_...
VITE_API_URL=http://localhost:4242
```

Create a `server/.env` file for the backend:
```env
STRIPE_SECRET_KEY=your_sk_test_...
PORT=4242
```

### 3. Run Locally
**Start the Backend:**
```bash
cd server
npm start
```

**Start the Frontend:**
```bash
# In the root directory
npm run dev
```

## 📂 Project Structure

- `src/`: React frontend source code.
- `server/`: Node.js/Stripe backend logic.
- `public/`: Assets, including the custom favicon.
- `.env.example`: Template for required environment variables.

## 📄 License
This project is open-source. Feel free to use and modify it for your coffee shop!
