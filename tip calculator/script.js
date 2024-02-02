const cost = document.getElementById('cost');
const tip = document.getElementById('tip');
const button = document.getElementById('calculate');
const total = document.getElementById('total');

button.addEventListener('click', (event) => {
    event.preventDefault();
    let c = parseFloat(cost.value);
    let t = parseFloat(tip.value);

    if (isNaN(c) || isNaN(t)) {
        alert("Please enter valid numbers for bill amount and tip percentage.");
        return;
    }

    let totalValue = c * (1 + t / 100);
    total.innerHTML = totalValue.toFixed(2);
});
