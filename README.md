# Sweet Shop Management System
A fully tested and user-friendly inventory management system for sweets.
Built with JavaScript, Jest (TDD), and Vanilla HTML/CSS/JS frontend — designed to look and feel like a real-world project. ( I have also added My Journey for Both Frontend and TDD to depict what a RollerCoaster it have been )

##  Functional Requirements

| Feature                      | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Add Sweet                   | Add new sweets with ID, name, category, price, and quantity                 |
| Delete Sweet                | Delete any sweet from inventory using its unique ID                        |
| View Sweets                 | View all sweets                           |
| Search by Name              | Filter sweets based on sweet name                                          |
| Search by Category          | Filter sweets based on category like Milk-Based, Nut-Based, etc.           |
| Search by Price Range       | Set minimum and maximum price to view filtered sweets                      |
| Sort by Name, Price, Qty    | Sort sweets by name, price or quantity (ascending or descending)           |
| Purchase Sweet              | Purchase functionality reduces quantity after successful stock check       |
| Restock Sweet               | Increases quantity for selected sweet                                      |
| Responsive Frontend         | Fully interactive UI with form, loader, filters, and sweet cards           |

## Non-Functional Requirements

| Quality Attribute       | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| Usability               | Clean and simple UI, intuitive for any shopkeeper                          |
| Responsiveness          | Works seamlessly on desktops, tablets (iPads), and mobile phones            |
| Performance             | Fast load times, minimal DOM manipulation, uses lightweight logic           |
| Maintainability         | Code is modular (Sweet.js, Inventory.js, app.js) and easy to update         |
| Testability             | Follows TDD, all features tested via Jest with 100% test coverage           |
| Version Control         | All changes tracked in GitHub with clear and meaningful commit messages     |
| Extensibility           | Codebase can easily be extended (e.g. add database, auth, dashboard later)  |


# Features
```bash
🍬 Manage a sweet shop inventory
➕ Add, View, Delete sweets
🔍 Search by Name, Category, and Price Range
🛒 Purchase (reduce stock)
📦 Restock (increase stock)
✅ Fully tested using Jest (Test-Driven Development)
🎨 Professionally designed frontend UI
🧼 Clean code with meaningful Git commits
🔃 Sort sweets by Name, Price, or Quantity (asc/desc)
📱 Fully responsive frontend (Mobile, Tablet, Desktop)



```
# Project Structure
```bash

SweetShop_Management_System/
├── frontend/              # Frontend Part (UI)
│   ├── index.html         # Web structure
│   ├── style.css          # Styling & layout
│   ├── app.js             # App logic (search, filter, restock)
│   ├── Sweet.js           # Sweet model (ES Module)
│   └── Inventory.js       # Inventory logic (ES Module)
│
├── src/                   # Backend logic
│   ├── Sweet.js
│   └── Inventory.js
│
├── tests/
│   └── inventory.test.js  # Jest test cases
│
├── README.md              # This file
├── package.json
└── .gitignore
```

# How to Run Backend Tests
```bash
git clone https://github.com/YahyaDumba/SweetShop_Management_System.git
cd SweetShop_Management_System
npm install
npm test
```

# How to Run Frontend
```bash
cd SweetShop_Management_System/frontend
```

   ## Option 1: VS Code
   ```bash
   Right-click index.html → Open with Live Server
```
   ## Option 2: CLI
   ```bash
   npx serve .
   ```
Go to http://localhost:3000 in browser 

# The Journey — From First Line to Final Product

## TESTING JOURNEY (TDD with Jest)

      1. SETUP
      Initialized with npm init -y
      Installed Jest: npm install --save-dev jest
      Got inotify platform error
      Ignored safely (non-blocking on Windows)

      2. FILE STRUCTURE
      Created:
         src/Sweet.js
         src/Inventory.js
         tests/inventory.test.js

      3. WROTE FIRST TEST
      Test: should add a sweet to inventory
      Cannot find module '../src/Inventory'
      Fixed: Created Inventory.js and imported properly

      4. ERRORS I SOLVED
      Issue	Fix
      Sweet is not defined	✅ Imported Sweet at top
      puchaseSweet() typo	✅ Renamed to purchaseSweet()
      .toLowerCase() on undefined	✅ Added null checks
      Logic error in test (wrong expectation)	✅ Corrected values

   5. FEATURE WISE TESTS
      | Feature                | Test | Errors                       | Status |
      | ---------------------- | ---- | ---------------------------- | ------ |
      | `addSweet()`           | ✅    | –                            | ✅      |
      | `deleteSweet()`        | ✅    | wrong ID used                | ✅      |
      | `searchByName()`       | ✅    | compared ID instead of count | ✅      |
      | `searchByCategory()`   | ✅    | `undefined.toLowerCase()`    | ✅      |
      | `searchByPriceRange()` | ✅    | expected wrong value         | ✅      |
      | `purchaseSweet()`      | ✅    | typo in method               | ✅      |
      | `restockSweet()`       | ✅    | –                            | ✅      |
      `sortBy()`|	✅ |	Logic bug|	✅

       
       6. Added Sorting Feature (Backend)
      Introduced sortBy(field, direction) method inside Inventory.js 
   Allowed sorting by:
   
name (alphabetically)

price (numerically)

quantity (stock units)

   ## FINAL TEST STATUS
      100% test coverage
      Clean logs, error handling, and code
      Proper folder structure
      Commits made per feature with clear messages

   ##  FRONTEND JOURNEY (HTML/CSS/JS)
      
      1. Basic Setup
      Created index.html and style.css
      Designed form + layout using CSS Grid/Flexbox
      Used <script type="module"> for ES imports

      2. Loader Setup
      Designed animated CSS loader
      Loader never disappears
      Fixed: added window.onload → hide loader after 1.5s

      3.  JS Modules: Inventory & Sweet
      export default missing → Uncaught SyntaxError
      Added export default in both Inventory.js & Sweet.js
      Created logic for: Add, Delete, Purchase, Restock

      4. Search & Filter
      Implemented filters:
         By Name
         By Category
         By Price Range
      Price filter bug: NaN
      Fixed using parseFloat() and isNaN() checks

      5.  Responsive Design
      Looks great on desktop
      Added media queries for mobile (<768px)
      Added separate breakpoints for iPad (768–1024px)
      Inputs resize well, cards stack or wrap naturally
      
      6. Sorting Feature
      Added sorting dropdowns for Name, Price, Quantity
      Supports both Ascending & Descending orders
      Faced issue: sorting and filtering were overriding each other
      Solved it by combining logic in a unified applyFiltersAndSorting() function


# TOTAL ERRORS SOLVED
| Area                     | Count |
| ------------------------ | ----- |
| Jest Setup Errors        | 3     |
| JS Logic Errors          | 4     |
| Import / Typo            | 2     |
| Loader / DOM Errors      | 2     |
|Sorting and Filtering Conflict|1  |
| Responsive layout tuning | 3     |
| TOTAL                    | 14+   |

# FINAL STATUS
```bash
Fully working backend (TDD)
Fully interactive frontend UI
Polished mobile & tablet responsive layout
Sorting integrated into both frontend and testable backend
Responsive design works perfectly across devices
Clean commits & structured repo
Project is presentation-ready 
```
## Author

- [@YahyaDumba](https://www.github.com/YahyaDumba)

