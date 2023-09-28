//your code here
// Function to calculate the total price and update the total cell
        function calculateTotal() {
            const prices = document.querySelectorAll('[data-ns-test="prices"]');
            let total = 0;

            prices.forEach(priceElement => {
                const price = parseFloat(priceElement.innerText);
                if (!isNaN(price)) {
                    total += price;
                }
            });
			const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
            grandTotalElement.innerText = total.toFixed(2); // Display total with two decimal places
        }

        // Calculate the initial total when the page loads
        calculateTotal();

        // Add an event listener to recalculate the total if prices change
        const prices = document.querySelectorAll('[data-ns-test="prices"]');
        prices.forEach(priceElement => {
            priceElement.addEventListener('input', calculateTotal);
        });