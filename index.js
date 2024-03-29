// Sample menu data with item names and prices
const menu = {
    Starters: [
        { name: "Garlic Bread", price: 60.00 },
        { name: "Bruschetta", price: 60.00 }
    ],
    MainCourses: [
        { name: "Margherita Pizza", price: 60.00 },
        { name: "Spaghetti Carbonara", price: 60.00 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 60.00 },
        { name: "Cheesecake", price: 60.00 }
    ]
};

// Function to display menu items by category
//It finds the HTML element where the menu will be displayed.
//Then, it loops through each category in the menu.
//For each category, it creates a heading and a list.
//Within each list, it adds the menu items as list items.
//When you click on a menu item, it adds it to your order.
//In essence, it organizes and shows menu items in a user-friendly format.

function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const [category, items] of Object.entries(menu)) {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        const itemList = document.createElement('ul');
        menuContainer.appendChild(itemList);

        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - R${item.price.toFixed(2)}`; // Include item name and price with "R" for rands
            listItem.addEventListener('click', () => addToOrder(item));
            itemList.appendChild(listItem);
        });
    }
}

// Callback function for adding an item to the order
//This function adds an item to the order:
//It creates a list item with the name and price of the item.
//It adds a click event listener to the list item to remove it from the order when clicked.
//It appends the list item to the order list.
//It updates the total price of the order by adding the price of the item to the current total.

function addToOrder(item) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - R${item.price.toFixed(2)}`; // Include item name and price with "R" for rands

    // Add a click event listener to the list item to remove it from the order
    listItem.addEventListener('click', () => removeFromOrder(listItem));

    orderItemsList.appendChild(listItem);

    const itemPrice = item.price; // Use item price

    let currentTotal = parseFloat(orderTotal.textContent.substring(1));
    const newTotal = currentTotal + itemPrice;

    orderTotal.textContent = `R${newTotal.toFixed(2)}`; // Update total with "R" for rands
}

// Callback function for removing an item from the order
//This function removes an item from the order:
//It retrieves the price of the item being removed from the text content of the list item.
//It removes the item from the order list.
//It calculates the new total by subtracting the price of the removed item from the current total.
//It updates the total price of the order with the new total, displaying it with "R" for rands.

function removeFromOrder(item) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    // Retrieve the price of the item being removed
    const itemPrice = parseFloat(item.textContent.split('-')[1].trim().substring(1)); // Parse price from the text content

    // Remove the item from the order list
    orderItemsList.removeChild(item);

    // Calculate the new total by subtracting the price of the removed item
    let currentTotal = parseFloat(orderTotal.textContent.substring(1));
    const newTotal = currentTotal - itemPrice;

    orderTotal.textContent = `R${newTotal.toFixed(2)}`; // Update total with "R" for rands
}

// Function to initialize the menu system

//This function initializes the menu system by displaying menu items. 
//It takes a menu object as input and calls the `displayMenuItems` function to display the menu items on the webpage.
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function


//This line of code starts the menu system by calling the `initMenuSystem` function with the menu object as an argument, triggering the display of menu items on the webpage.
initMenuSystem(menu);
