🍬 Sweet Shop Management System

--> A fully tested, production-ready inventory management system for a Sweet Shop.
--> Built using JavaScript, Jest (TDD), and a fully responsive Vanilla HTML/CSS/JS frontend.
--> Every feature was implemented using Test Driven Development (TDD) ensuring reliability, accuracy, and clean architecture.

🚀 Overview

--> This project simulates a real-world inventory management solution for a sweet shop, allowing the user to add, update, delete, filter, sort, purchase, and restock sweets in a clean and interactive UI.
It includes:
--> A complete frontend UI
--> A fully working backend logic (Inventory + Sweet classes)
--> Automated Jest tests ensuring 100% feature coverage
--> A detailed engineering journey showcasing problem-solving and debugging

✅ Functional Requirements
Feature	Description
--> Add Sweet	Add a new sweet with ID, name, category, price, quantity
--> Delete Sweet	Remove any sweet using its unique ID
--> View Sweets	Display all sweets in card format
--> Search by Name	Filter sweets by name
--> Search by Category	Filter sweets by categories (Milk-Based, Nut-Based etc.)
--> Search by Price Range	Apply minimum & maximum price filters
--> Sorting System	Sort sweets by Name, Price, or Quantity in ASC/DESC order
--> Purchase	Decrease stock with correct validations
--> Restock	Increase stock (admin-like functionality)
--> Responsive UI	Mobile, tablet, and desktop fully supported


🎯 Non-Functional Requirements
--> Quality Attribute	Description
--> Usability	Simple, clean UI designed for shopkeepers
--> Responsiveness	Smooth experience across all screen sizes
--> Performance	Fast UI updates, minimal DOM operations
--> Maintainability	Modular codebase (Sweet.js, Inventory.js, app.js)
--> Testability	TDD-driven development with Jest
--> Version Control	Structured Git commits per feature
--> Extensibility	Can be extended to full-stack MERN easily

🌟 Features

🍬 Manage full sweet inventory
➕ Add, View, Delete sweets
🔍 Search by Name / Category / Price
🔃 Sort by Name / Price / Quantity
🛒 Purchase integration
📦 Restock sweets
💯 Fully tested using Jest
🎨 Beautiful, responsive UI with animations
📱 Mobile + Tablet + Desktop optimised
🧼 Clean, modular codebase

## PROJECT STRUCTURE 
SweetShop_Management_System/
├── frontend/
│   ├── index.html          # UI structure
│   ├── style.css           # Styling & responsiveness
│   ├── app.js              # UI logic (filtering, sorting, rendering)
│   ├── Sweet.js            # Sweet model (ES module)
│   └── Inventory.js        # Inventory logic (ES module)
│
├── src/
│   ├── Sweet.js            # Backend-style Sweet class
│   └── Inventory.js        # Backend-style Inventory class
│
├── tests/
│   └── inventory.test.js   # Jest test cases (TDD)
│
├── README.md
├── package.json
└── .gitignore

## HOW TO RUN BACK END 
cd SweetShop_Management_System
npm install
npm test

## HOW TO RUN FRONT END 
1.Go to frontend/
2.Right-click on index.html
3.Select Open with Live Server

🛠️ The Engineering Journey (TDD + UI Development)
🔍 TDD Journey (Backend)
1. Setup
 --> Initialized project
--> Installed Jest
--> Encountered inotify error (ignored safely on Windows)
2. File Setup
Created:
--> src/Sweet.js
--> src/Inventory.js
--> tests/inventory.test.js

3. First Test (RED Phase)
--> Test: should add a sweet to inventory
--> Error: Cannot find module '../src/Inventory'
✔ Fixed: Correct imports & module paths
 --> clean TDD WORKFLOW


🎨 Frontend Development Journey
1. UI Setup
--> Created index.html, style.css
--> Used Flexbox + Grid for layout
--> Added animated loader

2. Module System Bugs
--> export default missing → SyntaxError
✔ Fixed via proper ES Module export/import

3. Implemented Features
--> Add / Delete
--> Search / Filter
--> Price Range
--> Sorting module
--> Purchase / Restock with validations

4. Responsiveness
--> Desktop first
--> Mobile (<768px) tuning
--> Tablet (768–1024px) layout adjustments
--> Clean stacking & resizing

5. Sorting vs Filtering Conflict
✔ Resolved by creating unified applyFiltersAndSorting() function

## 🤝 Acknowledgment
--> This project was built to demonstrate:
--> Problem solving
--> TDD discipline
--> UI/UX design
--> Clean coding
--> Debugging ability
--> Modular architecture

##  AUTHOR 
xNikhilx1
