//your code here
// Get all elements with data-ns-test="prices" attribute
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Initialize total price to zero
let totalPrice = 0;

// Loop through the price elements and sum their values
priceElements.forEach((priceElement) => {
  totalPrice += parseFloat(priceElement.textContent);
});

// Get the grand total cell
const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');

// Update the grand total cell with the calculated total
grandTotalCell.textContent = totalPrice.toFixed(2); // Assuming you want to display the total with two decimal places
