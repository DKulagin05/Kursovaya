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

