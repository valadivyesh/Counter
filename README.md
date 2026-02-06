# React Timer & Counter Project

This project showcases a simple yet functional **React Timer** and **Increment-Decrement Counter** built using React functional components and hooks. It is designed as a clean beginner-friendly implementation that demonstrates state management, event handling, and component structure in React.

---

## 🚀 Project Overview

This project contains **two core features**:

### 1️⃣ **Timer Component**

* Starts counting seconds when the timer begins.
* Pauses the timer without resetting.
* Resets the timer back to 0.
* Built using the `useState` and `useEffect` hooks.
* Uses `setInterval` for time updates and proper cleanup using `clearInterval`.

### 2️⃣ **Increment-Decrement Counter**

* Simple counter with three buttons: **+ Increase**, **- Decrease**, and **Reset**.
* Uses `useState` to store the counter value.
* Prevents negative values (optional, based on your implementation).

---

## 🧠 What You Learn From This Project

* Understanding and using React Hooks (`useState`, `useEffect`).
* Handling intervals and cleanup in React.
* Building reusable UI components.
* Mastering basic interactions and real-time updates in React.

---

## 📁 Folder Structure

```
project-folder/
│
├── src/
│   ├── components/
│   │   ├── Timer.jsx
│   │   └── Counter.jsx
│   ├── App.jsx
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

* **React JS**
* **JavaScript (ES6+)**
* **CSS for basic styling**

---

## 📝 Example Timer Logic (Concept)

The timer works using:

* A `seconds` state to track time
* A `running` state to check if timer is active
* An interval set inside `useEffect`

When you click start:

```
setRunning(true)
```

React continuously updates the timer every second until paused or reset.

---

## 📌 Example Counter Logic (Concept)

The counter simply updates state like:

```
setCount(count + 1)
setCount(count - 1)
setCount(0)
```

And React re-renders the UI instantly.

---

## ▶️ How to Run the Project

1. Install dependencies:

```
npm install
```

2. Start development server:

```
npm start
```

3. Open in browser:

```
http://localhost:3000
```

---
