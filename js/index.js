// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product);
  //... your code goes here
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  price = price.innerHTML;
  quantity = quantity.value;
  let totalProduct = Number(price) * Number(quantity);
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = totalProduct;
  return totalProduct;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.getElementsByClassName('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let sumTotal = 0;
  let product = document.querySelectorAll('.product');
  product.forEach(e => {
    sumTotal += updateSubtotal(e);
  });

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  totalnnerHTML = sumTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
