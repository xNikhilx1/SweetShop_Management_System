// Managing Sweet Items: ADD, VIEW, DELETE, SEARCH, PURCHASE AND RESTOCK

class Inventory {
  constructor() {
    this.sweets = []; //Stores all sweets in an array
  }

  addSweet(sweet) {
    this.sweets.push(sweet); //Adds new sweet to the list
  }

  viewSweets() {
    return this.sweets; //Returns all sweets
  }

  deleteSweet(id) {
    this.sweets = this.sweets.filter((sweet) => sweet.id !== id); //Deletes sweet by id
  }

  searchByName(name) {
    return this.sweets.filter(
      (sweet) => sweet.name && sweet.name.toLowerCase() === name.toLowerCase()
    ); //Searches sweets by name
  }

  searchByCategory(category) {
    return this.sweets.filter(
      (sweet) =>
        sweet.category &&
        sweet.category.toLowerCase() === category.toLowerCase()
    ); //Searches sweets by category
  }

  searchByPriceRange(minPrice, maxPrice) {
    return this.sweets.filter(
      (sweet) =>
        typeof sweet.price == "number" &&
        sweet.price >= minPrice &&
        sweet.price <= maxPrice
    ); //Searches sweets by price
  }

  sortBy(field,direction ='asc'){
    return this.sweets.slice().sort((a,b)=>{
      if(a[field] < b[field]) return direction === 'asc' ? -1 : 1;
      if(a[field] > b[field]) return direction === 'asc' ? 1 : -1;
      return 0; 
    });
  }
  
  purchaseSweet(id, quantity) {
    const sweet = this.sweets.find((sweet) => sweet.id === id);

    if (sweet) {
      if (sweet.quantity >= quantity) {
        //Checks For Quanntity
        sweet.quantity -= quantity; //Decrements the Quantity
      } else {
        throw new Error("Sorry To Say. Not enough quantity available");
      }
    } else {
      throw new Error("Sorry To Say. Sweet not found");
    }
  }

  restockSweet(id, quantity) {
    const sweet = this.sweets.find((sweet) => sweet.id === id);

    if (sweet && typeof sweet.quantity === "number") {
      //Checks For Quantity
      sweet.quantity += quantity; //Increments the Quantity
    } else {
      throw new Error("Sorry To Say. Sweet not found Or Invalid Quantity");
    }
  }
}

module.exports = Inventory;
