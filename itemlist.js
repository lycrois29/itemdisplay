const items = [
  { id: 1, name: "Mouse", category: "IT", inventory: 200, price: 240 },
  { id: 2, name: "Keyboard", category: "IT", inventory: 150, price: 490 },
  { id: 3, name: "Monitor", category: "IT", inventory: 75, price: 3200 },
  { id: 4, name: "USB Cable", category: "IT", inventory: 350, price: 120 },
  { id: 5, name: "Notebook", category: "Stationery", inventory: 500, price: 55 },
  { id: 6, name: "Pen", category: "Stationery", inventory: 900, price: 15 },
  { id: 7, name: "Desk Lamp", category: "Home", inventory: 120, price: 750 },
  { id: 8, name: "Water Bottle", category: "Lifestyle", inventory: 260, price: 210 },
  { id: 9, name: "Backpack", category: "Lifestyle", inventory: 95, price: 980 },
  { id: 10, name: "Phone Stand", category: "IT", inventory: 180, price: 160 },
  { id: 11, name: "Headphones", category: "IT", inventory: 130, price: 1450 }
];

const itemSelect = document.getElementById("item-list");
const itemId = document.getElementById("item-id");
const itemName = document.getElementById("item-name");
const itemCategory = document.getElementById("item-category");
const itemInventory = document.getElementById("item-inventory");
const itemPrice = document.getElementById("item-price");

function populateDropdown() {
  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "";
  itemSelect.appendChild(emptyOption);

  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    itemSelect.appendChild(option);
  });
}

function clearDisplay() {
  itemId.textContent = "";
  itemName.textContent = "";
  itemCategory.textContent = "";
  itemInventory.textContent = "";
  itemPrice.textContent = "";
}

function displayItem(id) {
  const selectedItem = items.find(item => item.id === Number(id));

  if (selectedItem) {
    itemId.textContent = selectedItem.id;
    itemName.textContent = selectedItem.name;
    itemCategory.textContent = selectedItem.category;
    itemInventory.textContent = selectedItem.inventory;
    itemPrice.textContent = selectedItem.price;
  }
}

itemSelect.addEventListener("change", function () {
  if (itemSelect.value === "") {
    clearDisplay();
  } else {
    displayItem(itemSelect.value);
  }
});

populateDropdown();
clearDisplay();