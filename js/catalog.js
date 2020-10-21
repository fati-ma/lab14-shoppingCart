/* global Product, Cart */
'use strict';
// Set up an empty cart for use on this page.
var cart = new Cart([]);
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
var selectElement = document.getElementById('items');
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  for (var i in Product.allProducts) {
    var option = document.createElement('option');
    option.value = Product.allProducts[i].name;
    option.textContent = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
var number;
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading
  number = parseInt(event.target[2].value);
  console.log(cartIAll);
  // console.log(cartAll);
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}
// var number = document.querySelector('#quantity');
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  new CartItem(selectElement.value, number);
  cart.addItem(selectElement.value, number);
}
// TODO: Update the cart count in the header nav with the number of items in the Cart
// var count = 0;
function updateCounter() {
  // count += number
  var headCount = document.querySelector('#itemCount');
  var count = 0;
  var z = localStorage.getItem('cart');
  if (z) {
    var cart = JSON.parse(z);
    for (var i = 0; i < cart.length; i++) {
      count += cart[i][1];
      console.log(cart.length)
    }
    headCount.textContent = `_${count}_`;
  }
}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
var sectionM = document.querySelector(".col-2")
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var mCartContent = document.querySelector('#cartContents');
  var di = document.createElement('div');
  di.setAttribute('id', 'cartContents');
  di.setAttribute('class', 'card');
  var items = JSON.parse(localStorage.getItem('cart'));
  var x = document.createElement('a');
  for (var i = 0; i < items.length; i++) {
    // di.setAttribute('id', i);
    x.setAttribute('id', i);
    x.addEventListener('click', () => {
      if (event.target.textContent === 'X') {
        var x = document.getElementById(i);
        while (x.firstChild) {
          x.firstChild.remove();
        };
      }
    });
  }
  x.textContent = 'X';
  di.appendChild(x);
  var h = document.createElement('h1');
  h.textContent = ` __item: ${selectElement.value} || Quantity: ${number}`;
  di.appendChild(h);
  var anc = document.createElement('a');
  anc.href = 'cart.html';
  anc.textContent = `View In Cart`
  di.appendChild(anc);
  sectionM.appendChild(di);
}
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);
// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
updateCounter();


// /* global Product, Cart */

// 'use strict';

// // Set up an empty cart for use on this page.
// var cart = new Cart([]);

// // On screen load, we call this method to put all of the busmall options
// // (the things in the Product.allProducts array) into the drop down list.

// var productSelected = document.getElementById('items');

// function populateForm() {

//     //TODO: Add an <option> tag inside the form's select for each product
//     for (var i in Product.allProducts) {
//         var optionEl = document.createElement("option");
//         var optionName = Product.allProducts[i].name;
//         optionEl.textContent = optionName;
//         optionEl.value = optionName;
//         productSelected.appendChild(optionEl);
//     }

// }

// // When someone submits the form, we need to add the selected item to the cart
// // object, save the whole thing back to local storage and update the screen
// // so that it shows the # of items in the cart and a quick preview of the cart itself.
// function handleSubmit(event) {

//     // TODO: Prevent the page from reloading
//     event.preventDefault();
//     number = parseInt(event.target[2].value);

//     // Do all the things ...
//     addSelectedItemToCart();
//     cart.saveToLocalStorage();
//     updateCounter();
//     updateCartPreview();

// }

// // TODO: Add the selected item and quantity to the cart
// function addSelectedItemToCart() {
//     // TODO: suss out the item picked from the select list

//      new CartItem(productSelected.value, number);
//      cart.addItem(productSelected.value,number);
    
//     // TODO: get the quantity
    
    
//     // TODO: using those, add one item to the Cart
    
    
//     // var itemSelected = document.getElementById('items').value;
//     // var quantitySelected = document.getElementById('quantity').value;
//     // cart.addItem(itemSelected, quantitySelected);
// }

// // TODO: Update the cart count in the header nav with the number of items in the Cart

// function updateCounter() {
//     // count += number
//     var headCount = document.querySelector('#itemCount');
//     var count = 0;
//     var z = localStorage.getItem('cart');
//     if (z) {
//         var cart = JSON.parse(z);
//         for (var i = 0; i < cart.length; i++) {
//             count += cart[i][1];
//             console.log(cart.length)
//         }
//         headCount.textContent = `_${count}_`;
//     }
// }
// // function updateCounter() {

// //     var itemCounter = document.getElementById('itemCount');

// //     var counter = 0;

// //     var tool = localStorage.getItem('cart');
// //     if (tool){
// //         var cart = JSON.parse(tool);  
        
// //         for (var i = 0; i < cart.length; i++) {
// //             counter += cart[i][1];
// //         }
// //         itemCounter.textContent = `_${counter}_`;
// //     }
// // }


// // TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
// var sectionM = document.querySelector(".col-2")
// function updateCartPreview() {
//     // TODO: Get the item and quantity from the form
//     // TODO: Add a new element to the cartContents div with that information
//     var mCartContent = document.querySelector('#cartContents');
//     var di = document.createElement('div');
//     di.setAttribute('id', 'cartContents');
//     di.setAttribute('class', 'card');
//     var items = JSON.parse(localStorage.getItem('cart'));
//     var x = document.createElement('a');
//     for (var i = 0; i < items.length; i++) {
//       // di.setAttribute('id', i);
//       x.setAttribute('id', i);
//       x.addEventListener('click', () => {
//         if (event.target.textContent === 'X') {
//           var x = document.getElementById(i);
//           while (x.firstChild) {
//             x.firstChild.remove();
//           };
//         }
//       });
//     }
//     x.textContent = 'X';
//     di.appendChild(x);
//     var h = document.createElement('h1');
//     h.textContent = ` __item: ${selectElement.value} || Quantity: ${number}`;
//     di.appendChild(h);
//     var anc = document.createElement('a');
//     anc.href = 'cart.html';
//     anc.textContent = `View In Cart`
//     di.appendChild(anc);
//     sectionM.appendChild(di);
//   }
//   // Set up the "submit" event listener on the form.
//   // This is the trigger for the app. When a user "submits" the form, it will
//   // Call that handleSubmit method above and kick off the whole process
//   var catalogForm = document.getElementById('catalog');
//   catalogForm.addEventListener('submit', handleSubmit);
//   // Before anything else of value can happen, we need to fill in the select
//   // drop down list in the form.
//   populateForm();
//   updateCounter();

// // // TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
// // function updateCartPreview() {
// //     // TODO: Get the item and quantity from the form
// //     // TODO: Add a new element to the cartContents div with that information
// //     var cartContents = document.getElementById('cartContents');
// //     var itemsCart = document.getElementById('items').value;
// //     var quantityCart = document.getElementById('quantity').value;
// //     cartContents.textContent = itemsCart + '  ' + quantityCart;
// // }

// // // Set up the "submit" event listener on the form.
// // // This is the trigger for the app. When a user "submits" the form, it will
// // // Call that handleSubmit method above and kick off the whole process
// // var catalogForm = document.getElementById('catalog');
// // catalogForm.addEventListener('submit', handleSubmit);

// // // Before anything else of value can happen, we need to fill in the select
// // // drop down list in the form.
// // populateForm();

