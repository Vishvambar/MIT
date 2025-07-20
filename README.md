# 🎓 MIT Student Portal Clone

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanjivani188/MIT.git)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC.svg)](https://tailwindcss.com/)

A fully responsive React.js student portal application that replicates the MIT-ADT University student management system interface. Features modern UI design, comprehensive authentication, and multiple student portal modules.

## 🌟 Features

- **📱 Fully Mobile Responsive** - Optimized for all devices
- **🔐 Authentication System** - Secure login with session management
- **📊 Student Dashboard** - Real university announcements and updates
- **👤 Profile Management** - Complete student profile with all details
- **📚 Academic Modules** - Programs, exam forms, grade cards, results
- **💳 Payment System** - Fee management and payment processing
- **🎫 Student Services** - Redressal system and support services
- **⚡ Modern UI/UX** - Built with Tailwind CSS and Framer Motion

## 🚀 Live Demo

**🌐 [View Live Demo](https://mit-student-portal.vercel.app)**

### 🔑 Demo Credentials
- **Username:** `ADT23SOCB0699`
- **Password:** `9090@PAPA`

## 🛠️ Tech Stack

- **Frontend:** React.js 18.2.0
- **Styling:** Tailwind CSS 3.3.0
- **Routing:** React Router DOM 6.20.1
- **Animations:** Framer Motion 10.16.4
- **Icons:** Lucide React 0.294.0
- **Build Tool:** Create React App
- **Deployment:** Vercel

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js (16.0.0 or higher)
- npm (8.0.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanjivani188/MIT.git
   cd MIT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **One-click deployment:**
   [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanjivani188/MIT.git)

2. **Manual deployment:**
   ```bash
   npm install -g vercel
   npm run build
   vercel --prod
   ```

### Deploy to Netlify

1. **Connect your GitHub repository to Netlify**
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`

## 📂 Project Structure

```
MIT/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── SignInPage.js     # Authentication page
│   │   ├── DashboardPage.js  # Student dashboard
│   │   ├── ProfilePage.js    # Student profile
│   │   └── ...               # Other components
│   ├── utils/
│   │   └── validation.js     # Validation utilities
│   ├── App.js               # Main app component
│   └── index.js             # App entry point
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
├── vercel.json              # Vercel deployment config
└── README.md               # Project documentation
```

## 🔧 Configuration

### Demo Credentials

The application uses hardcoded credentials for demonstration:
- **Username:** `ADT23SOCB0699`
- **Password:** `9090@PAPA`

Update these in `src/components/SignInPage.js` for production use.

## 📱 Mobile Responsiveness

The application is fully responsive with:
- **Mobile-first design approach**
- **Touch-optimized navigation**
- **Responsive sidebar with hamburger menu**
- **Mobile-friendly forms and layouts**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Vishvambar** - [@Vishvambar](https://github.com/Vishvambar)

---

⭐ **Star this repository if you found it helpful!**
