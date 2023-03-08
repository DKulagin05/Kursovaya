// let products_list = document.querySelector('.products-list');
//
// for (let i = 0; i < 12 ; i++) {
//     products_list.innerHTML += `
//     <div class="product">
//             <div class="product-img">
//                 <img src="/assets/img/background_head.png" alt="#">
//             </div>
//             <div class="product-img-slider">
//                 <div class="type-product">
//                     <input type="radio" name="switch" id="slider_1" checked>
//                     <input type="radio" name="switch" id="slider_2">
//                     <input type="radio" name="switch" id="slider_3">
//                     <input type="radio" name="switch" id="slider_4">
//
//                     <div class="searches">
//                         <label for="slider_1"></label>
//                         <label for="slider_2"></label>
//                         <label for="slider_3"></label>
//                         <label for="slider_4"></label>
//                     </div>
//                 </div>
//             </div>
//             <div class="product-name">
//                 <h1>Foxxx Kitsune Mini Black Vintage RCA</h1>
//                 <p>6 000 ₽</p>
//             </div>
//                 </div>
//     `
// }
//
// function add_products () {
//     for (let i = 0; i < 4 ; i++) {
//         products_list.innerHTML += `
//     <div class="product">
//             <div class="product-img">
//                 <img src="/assets/img/background_head.png" alt="#">
//             </div>
//             <div class="product-img-slider">
//                 <div class="type-product">
//                     <input type="radio" name="switch" id="slider_1" checked>
//                     <input type="radio" name="switch" id="slider_2">
//                     <input type="radio" name="switch" id="slider_3">
//                     <input type="radio" name="switch" id="slider_4">
//
//                     <div class="searches">
//                         <label for="slider_1"></label>
//                         <label for="slider_2"></label>
//                         <label for="slider_3"></label>
//                         <label for="slider_4"></label>
//                     </div>
//                 </div>
//             </div>
//             <div class="product-name">
//                 <h1>Foxxx Kitsune Mini Black Vintage RCA</h1>
//                 <p>6 000 ₽</p>
//             </div>
//                 </div>
//     `
//     }
// }

// let products_list = document.querySelector('.products-list');
//
// // Repeated HTML code
// let productHTML = `
//     <div class="product">
//         <div class="product-img">
//             <img src="/assets/img/background_head.png" alt="#">
//         </div>
//         <div class="product-img-slider">
//             <div class="type-product">
//                 <input type="radio" name="switch" id="slider_1" checked>
//                 <input type="radio" name="switch" id="slider_2">
//                 <input type="radio" name="switch" id="slider_3">
//                 <input type="radio" name="switch" id="slider_4">
//
//                 <div class="searches">
//                     <label for="slider_1"></label>
//                     <label for="slider_2"></label>
//                     <label for="slider_3"></label>
//                     <label for="slider_4"></label>
//                 </div>
//             </div>
//         </div>
//         <div class="product-name">
//             <h1>Foxxx Kitsune Mini Black Vintage RCA</h1>
//             <p>6 000 ₽</p>
//         </div>
//     </div>
// `;

// Add the initial 12 products
// for (let i = 0; i < 12 ; i++) {
//     products_list.insertAdjacentHTML('beforeend', productHTML);
// }

function add_products () {
    // Create a document fragment to hold the new elements
    let frag = document.createDocumentFragment();

    // Add 4 new products to the fragment
    for (let i = 0; i < 4 ; i++) {
        frag.insertAdjacentHTML('beforeend', productHTML);
    }

    // Add the fragment to the main container
    products_list.appendChild(frag);
}

