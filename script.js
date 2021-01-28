const productOne = document.getElementById("product-1");
const productTwo = document.getElementById("product-2");

const plusIconOne = document.getElementById("plusIcon-1");
const minusIconOne = document.getElementById("minusIcon-1");
const productAmountOne = document.getElementById("productAmountOne");
const pricePerProductOne = Number(
  document.getElementById("currentPriceOne").innerText
);
const currentPriceOne = document.getElementById("currentPriceOne");

const plusIconTwo = document.getElementById("plusIcon-2");
const minusIconTwo = document.getElementById("minusIcon-2");
const productAmountTwo = document.getElementById("productAmountTwo");
const pricePerProductTwo = Number(
  document.getElementById("currentPriceTwo").innerText
);
const currentPriceTwo = document.getElementById("currentPriceTwo");

const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const total = document.getElementById("total");
const checkoutButton = document.getElementById("checkout");

function increment(productAmount, pricePerProduct, currentPrice) {
  const productAmountNumber = Number(productAmount.value);
  const currentPriceNumber = Number(currentPrice.innerText);
  const currentSubtotal = parseFloat(subtotal.innerText.replace(",", ""));

  const formatToString = new Intl.NumberFormat();

  const incrementAmount = productAmountNumber + 1;
  const currentPriceAmount = currentPriceNumber + pricePerProduct;

  productAmount.value = incrementAmount;
  currentPrice.innerText = currentPriceAmount;

  const subtotalNumber = currentSubtotal + pricePerProduct;
  const currentTax = Math.round((subtotalNumber * 15) / 100);
  const totalPrice = subtotalNumber + currentTax;

  subtotal.innerText = formatToString.format(subtotalNumber);
  tax.innerText = formatToString.format(currentTax);
  total.innerText = formatToString.format(totalPrice);
}

function decrement(productAmount, pricePerProduct, currentPrice) {
  const productAmountNumber = Number(productAmount.value);
  const currentPriceNumber = Number(currentPrice.innerText);
  const currentSubtotal = parseFloat(subtotal.innerText.replace(",", ""));

  const formatToString = new Intl.NumberFormat();

  const subtotalNumber = currentSubtotal - pricePerProduct;
  const currentTax = Math.round((subtotalNumber * 15) / 100);
  const totalPrice = subtotalNumber - currentTax;

  if (productAmountNumber > 0) {
    const decrementAmount = productAmountNumber - 1;
    const currentPriceAmount = currentPriceNumber - pricePerProduct;

    productAmount.value = decrementAmount;
    currentPrice.innerText = currentPriceAmount;

    subtotal.innerText = formatToString.format(subtotalNumber);
    tax.innerText = formatToString.format(currentTax);
    total.innerText = formatToString.format(totalPrice);
  }
}

function removeProduct(id) {
  const product = document.getElementById(id);
  const crossIcon = product.getElementsByClassName("crossIcon");
}

function checkout(id) {
  const entireCart = document.getElementById("entireCart");
}

plusIconOne.addEventListener("click", () => {
  increment(productAmountOne, pricePerProductOne, currentPriceOne);
});
minusIconOne.addEventListener("click", () => {
  decrement(productAmountOne, pricePerProductOne, currentPriceOne);
});

plusIconTwo.addEventListener("click", () => {
  increment(productAmountTwo, pricePerProductTwo, currentPriceTwo);
});
minusIconTwo.addEventListener("click", () => {
  decrement(productAmountTwo, pricePerProductTwo, currentPriceTwo);
});

// Clicking on cross icon:
// - display none on individual section

// Checkout Section:
// - display none all products and total section
// - You haven't added any items in cart yet.
