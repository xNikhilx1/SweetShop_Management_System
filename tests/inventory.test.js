// Jest Test Suite for Sweet Shop Inventory System

const Inventory = require("../src/Inventory.js");
const Sweet = require("../src/Sweet.js");

describe("Sweet Shop Inventory System", () => {
  // Add sweet to Inventory
  test("should add a sweet to the Inventory", () => {
    const inventory = new Inventory();
    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20); //Parameters are Entered in the Format of Sweet Class
    inventory.addSweet(sweet);
    const sweets = inventory.viewSweets();
    expect(sweets.length).toBe(1);
  });

  // Delete Sweet from Inventory
  test("should delete a sweet from the Inventory", () => {
    const inventory = new Inventory();

    //Parameters are Entered in the Format of Sweet Class
    const sweet1 = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    const sweet2 = new Sweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15);

    inventory.addSweet(sweet1);
    inventory.addSweet(sweet2);

    inventory.deleteSweet(1001); //Deleting Sweet on the basis of ID

    const sweets = inventory.viewSweets();
    expect(sweets.length).toBe(1);
    expect(sweets[0].id).toBe(1002);
  });

  //Seperate Test Case for Viewing  Sweets
  test("should view all sweets", () => {
    const inventory = new Inventory();

    const sweets = [
      new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20),
      new Sweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15),
    ];

    sweets.forEach((sweet) => inventory.addSweet(sweet));

    const result = inventory.viewSweets();

    expect(result.length).toBe(2);
    expect(result[0].name).toBe("Kaju Katli");
    expect(result[1].name).toBe("Gajar Halwa");
  });

  //Searching Sweets
  describe("Searching Sweets on Different Parameters", () => {
    // Searching Sweet from Inventory on the basis of Name
    test("should search sweets by name", () => {
      const inventory = new Inventory();

      const sweets = [
        //Parameters are Entered in the Format of Sweet Class
        new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20),
        new Sweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15),
        new Sweet(1003, "Kaju Katli", "Milk-Based", 10, 50),
      ];

      sweets.forEach((sweet) => inventory.addSweet(sweet));

      const result = inventory.searchByName("Kaju Katli");

      expect(result.length).toBe(2);
      expect(result[0].name).toBe("Kaju Katli");
    });

    // Searching Sweet from Inventory on the basis of Category
    test("should search sweets by category", () => {
      const inventory = new Inventory();

      const sweets = [
        new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20),
        new Sweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15),
        new Sweet(1003, "Kaju Katli", "Milk-Based", 10, 50),
      ];

      sweets.forEach((sweet) => inventory.addSweet(sweet));

      const result = inventory.searchByCategory("Milk-Based");

      expect(result.length).toBe(1);
      expect(result[0].category).toBe("Milk-Based");
    });

    // Searching Sweet from Inventory on the basis of Price Range
    test("should search sweets by price", () => {
      const inventory = new Inventory();

      const sweets = [
        new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20),
        new Sweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15),
        new Sweet(1003, "Kaju Katli", "Milk-Based", 10, 50),
      ];

      sweets.forEach((sweet) => inventory.addSweet(sweet));

      const result = inventory.searchByPriceRange(25, 60); //Looking for sweets between 25 and 60

      expect(result.length).toBe(2);
      expect(result[0].price).toBeGreaterThanOrEqual(25);
      expect(result[0].price).toBeLessThanOrEqual(60);
      expect(result[1].price).toBeGreaterThanOrEqual(25);
      expect(result[1].price).toBeLessThanOrEqual(60);
    });
  });

  describe("Sorting Sweets", () => {
    //Sorting Sweets in Inventory on the basis of Price
    test("should sort sweets by price in ascending order", () => {
      const inventory = new Inventory();

      const sweets = [
        new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20),
        new Sweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15),
        new Sweet(1003, "Gulab Jamun", "Mik-Based", 10, 50),
      ];

      sweets.forEach((sweet) => inventory.addSweet(sweet));

      const sorted = inventory.sortBy("price", "asc");

      expect(sorted[0].name).toBe("Gulab Jamun");
      expect(sorted[1].name).toBe("Gajar Halwa");
      expect(sorted[2].name).toBe("Kaju Katli");
    });

    //Sorting Sweets in Inventory on the basis of Name
    test("should sort sweets by name in ascending order", () => {
      const inventory = new Inventory();

      const sweets = [
        new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20),
        new Sweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15),
        new Sweet(1003, "Gulab Jamun", "Mik-Based", 10, 50),
      ];

      sweets.forEach((sweet) => inventory.addSweet(sweet));

      const sorted = inventory.sortBy("name", "asc");

      expect(sorted[0].name).toBe("Gajar Halwa");
      expect(sorted[1].name).toBe("Gulab Jamun");
      expect(sorted[2].name).toBe("Kaju Katli");
    });

    //Sorting Sweets in Inventory on the basis of Quantity
    test("should sort sweets by quantity in ascending order", () => {
      const inventory = new Inventory();

      const sweets = [
        new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20),
        new Sweet(1002, "Gajar Halwa", "Vegetable-Based", 30, 15),
        new Sweet(1003, "Gulab Jamun", "Mik-Based", 10, 50),
      ];

      sweets.forEach((sweet) => inventory.addSweet(sweet));

      const sorted = inventory.sortBy("quantity", "asc");

      expect(sorted[0].name).toBe("Gajar Halwa");
      expect(sorted[1].name).toBe("Kaju Katli");
      expect(sorted[2].name).toBe("Gulab Jamun");
    });
  });

  //Purchasing Sweet from Inventory and Reducing its Quantity
  test("should purchase a sweet and reduce its quantity", () => {
    const inventory = new Inventory();

    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    inventory.addSweet(sweet);

    inventory.purchaseSweet(1001, 5);

    const result = inventory.viewSweets();

    expect(result[0].quantity).toBe(15);
  });

  //Restock Sweet in Inventory and Increase its Quantity
  test("should restock a sweet and increase its quantity", () => {
    const inventory = new Inventory();

    const sweet = new Sweet(1001, "Kaju Katli", "Nut-Based", 50, 15);
    inventory.addSweet(sweet);

    inventory.restockSweet(1001, 10); //Adding 10 more sweets to the inventory

    const result = inventory.viewSweets();

    expect(result[0].quantity).toBe(25);
  });
});
