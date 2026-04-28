// Get elements
const costInput = document.getElementById("cost");
const litersInput = document.getElementById("liters");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");

// When button is clicked
calcBtn.addEventListener("click", () => {

    // Convert input values to numbers
    const cost = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);

    // Calculate total
    const total = cost * liters;

    // Display result
    result.textContent = `Total: £${total.toFixed(2)}`;
});
