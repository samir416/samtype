# ⌨️ SamType — Typing Speed Test App

> A clean, distraction-free typing speed test built with React.js

🔗 **Live Demo:** [samtype-app.vercel.app](https://samtype-app.vercel.app)  
👨‍💻 **GitHub:** [github.com/samir416/samtype](https://github.com/samir416/samtype)

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Router](https://img.shields.io/badge/React_Router-v6-red?logo=reactrouter)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

---

## 🎯 About The Project

SamType is a real-time typing speed test application where users can
measure their **Words Per Minute (WPM)** and **Accuracy** in a 60-second
test. Built as a React.js project focusing on component-based
architecture, state management, and API integration.

---

## 🚀 Features

- ⏱️ **60-second typing test** with live countdown timer
- 📊 **Real-time WPM & Accuracy** calculation
- 🌙 **Dark / Light mode** with localStorage persistence
- 📝 **Random paragraphs** fetched from DummyJSON API
- ⏸️ **Pause & Resume** timer mid-test
- 🧩 **15 Reusable Components** — clean architecture
- ⚡ **Fast & minimal UI** — no distractions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend Framework |
| **React Router DOM v6** | Multi-page Navigation |
| **Bootstrap 5** | UI Components & Styling |
| **DummyJSON API** | Random Paragraph Generation |
| **localStorage** | Dark Mode Persistence |
| **Vercel** | Deployment & Hosting |

---

## 📁 Project Structure
```
src/
├── components/          # Reusable UI Components
│   ├── Navbar.jsx       # Navigation bar
│   ├── Logo.jsx         # Brand logo
│   ├── DarkModeToggle.jsx  # Theme switcher
│   ├── Footer.jsx       # Page footer
│   ├── HeroBadge.jsx    # Home page badge
│   ├── HeroHeading.jsx  # Home page heading
│   └── HeroButtons.jsx  # Home page CTA buttons
│
└── project/             # Page Components
    ├── Type.jsx          # Home page
    ├── TypeMaster.jsx    # Typing test page
    ├── Result.jsx        # Result page
    ├── TimerDisplay.jsx  # Countdown timer
    ├── ParagraphDisplay.jsx  # Text with color feedback
    ├── TypingInput.jsx   # Typing textarea
    ├── TypingControls.jsx   # Start/Back buttons
    ├── ExitModal.jsx     # Pause modal
    ├── ResultCard.jsx    # Result card wrapper
    ├── StatsRow.jsx      # WPM/Accuracy/Time stats
    └── ResultButtons.jsx # Result page buttons
```

---

## 🧠 How It Works
```
1. User lands on Home page
         ↓
2. Clicks "Start Typing Practice"
         ↓
3. 60-second timer starts
         ↓
4. Random paragraph loads from API
         ↓
5. User types — Green = Correct / Red = Wrong
         ↓
6. Timer ends → WPM & Accuracy calculated
         ↓
7. Result page shows final score
```

---

## ⚙️ Run Locally
```bash
# Clone the repository
git clone https://github.com/samir416/samtype.git

# Go into the project folder
cd samtype

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 App Pages

| Page | Route | Description |
|------|-------|-------------|
| 🏠 Home | `/` | Landing page with hero section |
| ⌨️ Practice | `/typemaster` | Live typing test |
| 📊 Result | `/result` | WPM, Accuracy & Time |

---

## 👨‍💻 Developer

**Samir Prajapat** — Frontend Developer

> *"Built this project to strengthen React.js concepts including*
> *component architecture, hooks, state management and API integration."*

[![GitHub](https://img.shields.io/badge/GitHub-samir416-black?logo=github&style=for-the-badge)](https://github.com/samir416)
[![Live Demo](https://img.shields.io/badge/Live_Demo-SamType-blue?logo=vercel&style=for-the-badge)](https://samtype-app.vercel.app)

---

## 📄 License

This project is open source and available under the
[MIT License](LICENSE).