function updateQuantityNumber(product, price, isIncreasing) {
    const inputQuantity = document.getElementById(product + '-quantity');
    let inputQuantityText = parseInt(inputQuantity.value);
    if (isIncreasing) {
        inputQuantityText = inputQuantityText + 1;
    }
    else if (inputQuantityText > 0) {
        inputQuantityText = inputQuantityText - 1;
    }
    inputQuantity.value = inputQuantityText;
    // total for case
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = inputQuantity.value * price;
    // total calculate call
    totalCalculate();
}
// total quantity calculate for total
function totalQuantity(product) {
    const productQuantity = document.getElementById(product + '-quantity');
    const phoneInputNumber = parseInt(productQuantity.value);
    return phoneInputNumber;
}
function totalCalculate() {

    const phoneTotal = totalQuantity('phone') * 50;
    const caseTotal = totalQuantity('case') * 20;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;

}
//phone elements
document.getElementById('phone-plus').addEventListener('click', function () {
    updateQuantityNumber('phone', '50', true);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateQuantityNumber('phone', '50', false);
})

// case element
document.getElementById('case-plus').addEventListener('click', function () {
    updateQuantityNumber('case', '20', true);
})
document.getElementById('input-minus').addEventListener('click', function () {
    updateQuantityNumber('case', '20', false);
})