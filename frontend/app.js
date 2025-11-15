import Inventory from "./Inventory.js";
import Sweet from "./Sweet.js";

const inventory = new Inventory();

// DOM Elements
const addForm = document.getElementById("addSweetForm");
const sweetList = document.getElementById("sweetList");
const searchInput = document.getElementById("searchInput");
const sortField = document.getElementById("sortField");
const sortDirection = document.getElementById("sortDirection");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");

// Loader: hide after 1.5 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("mainContent");
    if (loader && main) {
      loader.style.display = "none";
      main.style.display = "block";
    }
  }, 1500);
});

// RENDER SWEETS TO UI
function renderSweets(sweets = inventory.viewSweets()) {
  sweetList.innerHTML = "";

  if (sweets.length === 0) {
    sweetList.innerHTML = "<p>No sweets found.</p>";
    return;
  }

  sweets.forEach((sweet) => {
    const card = document.createElement("div");
    card.className = "sweet-card";
    card.innerHTML = `
      <h3>${sweet.name}</h3>
      <p><strong>ID:</strong> ${sweet.id}</p>
      <p><strong>Category:</strong> ${sweet.category}</p>
      <p><strong>Price:</strong> ₹${sweet.price}</p>
      <p><strong>Quantity:</strong> ${sweet.quantity}</p>
      <div class="card-buttons">
        <button class="delete">Delete</button>
        <button class="purchase">Purchase</button>
        <button class="restock">Restock</button>
      </div>
    `;

    // DELETE
    card.querySelector(".delete").addEventListener("click", () => {
      inventory.deleteSweet(sweet.id);
      applyFiltersAndSorting();
    });

    // PURCHASE
    card.querySelector(".purchase").addEventListener("click", () => {
      const qty = prompt("How many units to purchase?");
      if (qty && !isNaN(qty)) {
        try {
          inventory.purchaseSweet(sweet.id, parseInt(qty));
          applyFiltersAndSorting();
        } catch (e) {
          alert(e.message);
        }
      }
    });

    // RESTOCK
    card.querySelector(".restock").addEventListener("click", () => {
      const qty = prompt("How many units to restock?");
      if (qty && !isNaN(qty)) {
        try {
          inventory.restockSweet(sweet.id, parseInt(qty));
          applyFiltersAndSorting();
        } catch (e) {
          alert(e.message);
        }
      }
    });

    sweetList.appendChild(card);
  });
}

// FILTER + SORT COMBINED
function applyFiltersAndSorting() {
  const query = searchInput.value.toLowerCase();
  const min = parseFloat(minPriceInput.value);
  const max = parseFloat(maxPriceInput.value);
  const field = sortField.value;
  const direction = sortDirection.value;

  let sweets = inventory.viewSweets().filter((s) => {
    const matchesText =
      s.name.toLowerCase().includes(query) ||
      s.category.toLowerCase().includes(query);
    const matchesMin = isNaN(min) || s.price >= min;
    const matchesMax = isNaN(max) || s.price <= max;
    return matchesText && matchesMin && matchesMax;
  });

  sweets = sweets.slice().sort((a, b) => {
    if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
    if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
    return 0;
  });

  renderSweets(sweets);
}

// ADD NEW SWEET
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = parseInt(document.getElementById("sweetId").value);
  const name = document.getElementById("sweetName").value.trim();
  const category = document.getElementById("sweetCategory").value.trim();
  const price = parseFloat(document.getElementById("sweetPrice").value);
  const quantity = parseInt(document.getElementById("sweetQuantity").value);

  if (!id || !name || !category || isNaN(price) || isNaN(quantity)) {
    alert("Please fill all fields correctly.");
    return;
  }

  const sweet = new Sweet(id, name, category, price, quantity);
  inventory.addSweet(sweet);

  addForm.reset();
  applyFiltersAndSorting();
});

// EVENT LISTENERS
searchInput.addEventListener("input", applyFiltersAndSorting);
minPriceInput.addEventListener("input", applyFiltersAndSorting);
maxPriceInput.addEventListener("input", applyFiltersAndSorting);
sortField.addEventListener("change", applyFiltersAndSorting);
sortDirection.addEventListener("change", applyFiltersAndSorting);

// INITIAL RENDER
applyFiltersAndSorting();
