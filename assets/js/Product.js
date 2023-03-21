fetch('/assets/api/ProductData.php')
    .then(response => response.json())
    .then(data => {
        renderAllProduct(data.message);
        if (data.success) {
            const form = document.querySelector('.filters-more-fliters');
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Отменяем действие по умолчанию, чтобы страница не перезагружалась
                const priceFrom = parseFloat(document.querySelector('#search_price_start').value);
                const priceTo = parseFloat(document.querySelector('#search_price_end').value);
                const sortBy = document.querySelector('[name="filters-more-fliters-sort"]').value;
                let filteredProducts = data.message;
                if (!isNaN(priceFrom) && !isNaN(priceTo)) {
                    filteredProducts = filteredProducts.filter(product => product.price >= priceFrom && product.price <= priceTo);
                }
                if (sortBy == 1) {
                    document.querySelector('.products-list').innerHTML = '';
                    filteredProducts.sort((a, b) => b.price - a.price);
                } else if (sortBy == 0) {
                    document.querySelector('.products-list').innerHTML = '';
                    filteredProducts.sort((a, b) => a.price - b.price);
                }

                renderAllProduct(filteredProducts);
            });
        } else {
            let products_block = document.querySelector('.products-list')
            let product_block_button = document.querySelector('.product-list-button')
            product_block_button.style.display = 'none';
            products_block.innerHTML = `
                <h3>${data.message}</h3>
            `
            products_block.style.cssText = 'font-size: 16px; display: flex; ' +
                'justify-content: center; margin-top: 30px;'
        }

    })
    .catch(error => console.log(error));
renderAllProduct = (items) => {
    for (let item of items) {
        let item_id = item.id;
        let products_list = document.querySelector('.products-list');
        let product = document.createElement('div');
        let product_block_button = document.querySelector('.product-list-button')
        product_block_button.style.display = 'none';
        product.className = 'personal_info_booking_unit';
        product.innerHTML = `
            <img class="product_img" src="/assets/img/products/${item.img}" alt="#">
            <div class="info_booking_body">
                <div class="info_booking_main">
                    <div class="info_booking_header">
                        <h1>${item.title}</h1>
                    </div>
                    <div class="info_booking_specifications">
                        <div class="specifications_square">
                            <img src="/assets/img/square.png" alt="#">
                            <p>${item.square} кв. м</p>
                        </div>
                        <div class="specifications_person">
                            <img src="/assets/img/person.png" alt="#">
                            <p>${item.people_count} чел.</p>
                        </div>
                    </div>
                    <div class="info_booking_price_btn" style="display:flex;">
                        <div class="info_booking_price">
                            <h1>Цена</h1>
                            <p>${item.price} р</p>
                        </div>
                        <div class="info_booking_btn data-id="${item.id}">Забронировать</div>
                </div>
                </div>
                <div class="info_booking_add_info hide">
                    <div class="info_booking_add_block">
                        <div class="info_add_top_block">
                            <h1>Дополнительные услуги</h1>
                            <div class="add_top_block_check">
                                <div class="checkbox_block">
                                    <input type="checkbox" name="breakfast" id="breakfast">
                                    <label for="breakfast">Завтрак</label>
                                </div>
                                <div class="checkbox_block">
                                    <input type="checkbox" name="dinner" id="dinner">
                                    <label for="dinner">Ужин</label>
                                </div>
                                <div class="checkbox_block">
                                    <input type="checkbox" name="spa" id="spa">
                                    <label for="spa">СПА</label>
                                </div>
                                <div class="checkbox_block">
                                    <input type="checkbox" name="transport" id="transport">
                                    <label for="transport">Транспорт<span>*</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="info_add_bottom_block">
                            <h1>Этот номер включает в себя</h1>
                            <ul class="product_add_info_block">
                            ${fetch("./assets/api/ProductDataAdd.php", {
            method: "POST",
            body: JSON.stringify({
                item_id
            }),
        })
            .then((response) => response.json()) // парсим ответ от сервера в формате JSON
            .then((product_add_info) => {
                let product_add_info_block = product.querySelector('.product_add_info_block');
                let htmlStrings = [];
                for (let add_info of product_add_info) {
                    if (add_info.TV == 1) {
                        htmlStrings.push('<li><p>TV</p></li>');
                    }
                    if (add_info.Minibar == 1) {
                        htmlStrings.push('<li><p>Мини-бар</p></li>');
                    }
                    if (add_info.WiFi == 1) {
                        htmlStrings.push('<li><p>Wi-Fi</p></li>');
                    }
                    if (add_info.Сonditioner == 1) {
                        htmlStrings.push('<li><p>Кондиционер</p></li>');
                    }
                }
                product_add_info_block.innerHTML = htmlStrings.join('');

            })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        products_list.appendChild(product);
        let product_img = product.querySelector('.product_img')
        let info_booking_body = product.querySelector('.info_booking_body');
        let info_booking_add_info = product.querySelector('.info_booking_add_info');
        info_booking_body.onmouseenter = () => {
            info_booking_add_info.classList.remove('hide');
            info_booking_add_info.style.cssText = 'z-index: 2; background: #CCECEB;';
        };
        info_booking_body.onmouseleave = () => {
            info_booking_add_info.classList.add('hide');
        };
        product_img.onmouseenter = () => {
            info_booking_add_info.classList.remove('hide');
            info_booking_add_info.style.cssText = 'z-index: 2; background: #CCECEB;';
        };
        product_img.onmouseleave = () => {
            info_booking_add_info.classList.add('hide');
        };

        product.querySelector('.info_booking_btn').addEventListener('click', () => {
            let item_booking = item;
            const userId = document.getElementById("user_id").value;
            fetch('./assets/api/booking.php', {
                method: 'POST',
                body: JSON.stringify({
                    item_booking,
                    userId
                })
            })
                .then(response => response.json())
                .then(data => {
                    if(data.success) {
                        alert(data.message);
                        window.location.href = "../personal_account.php";
                    } else {
                        alert(data.message);
                    }
                });
        });
    }
}


// const productsList = document.querySelector('.products-list');
// const productBlockButton = document.querySelector('.product-list-button');
//
// fetch('/assets/api/ProductData.php')
//     .then(response => response.json())
//     .then(data => {
//         renderAllProduct(data.message, data.success);
//         if (data.success) {
//             const form = document.querySelector('.filters-more-fliters');
//             const priceFromInput = document.querySelector('#search_price_start');
//             const priceToInput = document.querySelector('#search_price_end');
//             const sortByInput = document.querySelector('[name="filters-more-fliters-sort"]');
//
//             form.addEventListener('submit', (event) => {
//                 event.preventDefault();
//                 const priceFrom = parseFloat(priceFromInput.value);
//                 const priceTo = parseFloat(priceToInput.value);
//                 let filteredProducts = data.message;
//
//                 if (!isNaN(priceFrom) && !isNaN(priceTo)) {
//                     filteredProducts = filteredProducts.filter(product => product.price >= priceFrom && product.price <= priceTo);
//                 }
//
//                 if (sortByInput.value == 1) {
//                     productsList.innerHTML = '';
//                     filteredProducts.sort((a, b) => b.price - a.price);
//                 } else if (sortByInput.value == 0) {
//                     productsList.innerHTML = '';
//                     filteredProducts.sort((a, b) => a.price - b.price);
//                 }
//
//                 renderAllProduct(filteredProducts, true);
//             });
//         } else {
//             productBlockButton.style.display = 'none';
//             productsList.innerHTML = `<h3>${data.message}</h3>`;
//             productsList.style.cssText = 'font-size: 16px; display: flex; ' +
//                 'justify-content: center; margin-top: 30px;';
//         }
//     })
//     .catch(error => console.log(error));
//
// async function getProductAddInfo(product, itemId) {
//     const response = await fetch("./assets/api/ProductDataAdd.php", {
//         method: "POST",
//         body: JSON.stringify({ itemId }),
//     });
//     const productAddInfo = await response.json();
//     const productAddInfoBlock = product.querySelector('.product_add_info_block');
//     const htmlStrings = [];
//
//     for (let addInfo of productAddInfo) {
//         if (addInfo.TV == 1) {
//             htmlStrings.push('<li><p>TV</p></li>');
//         }
//         if (addInfo.Minibar == 1) {
//             htmlStrings.push('<li><p>Мини-бар</p></li>');
//         }
//         if (addInfo.WiFi == 1) {
//             htmlStrings.push('<li><p>Wi-Fi</p></li>');
//         }
//         if (addInfo.Сonditioner == 1) {
//             htmlStrings.push('<li><p>Кондиционер</p></li>');
//         }
//     }
//
//     productAddInfoBlock.innerHTML = htmlStrings.join('');
// }
//
// function renderAllProduct(items, showButton) {
//     productsList.innerHTML = '';
//     productBlockButton.style.display = showButton ? 'block' : 'none';
//
//     for (let item of items) {
//         const product = document.createElement('div');
//         const infoBookingBody = document.createElement('div');
//         const infoBookingAddInfo = document.createElement('div');
//         const infoBookingMain = document.createElement('div');
//         const infoBookingHeader = document.createElement('div');
//         const infoBookingSpecifications = document.createElement('div');
//         const specificationsSquare = document.createElement('div');
//         const specificationsPerson = document.createElement('div');
//         const infoBookingPriceBtn = document.createElement('div');
//         const infoBookingPrice = document.createElement('div');
//         const infoBookingBtn = document.createElement('div');
//
//         const item_id = item.id;
//         const price = item.price;
//         const title = item.title;
//         const peopleCount = item.people_count;
//         const square = item.square;
//         const imgSrc = '/assets/img/rent_img/'+item.img;
//
//         product.className = 'personal_info_booking_unit';
//         infoBookingBody.className = 'info_booking_body';
//         infoBookingAddInfo.className = 'info_booking_add_info hide';
//         infoBookingMain.className = 'info_booking_main';
//         infoBookingHeader.className = 'info_booking_header';
//         infoBookingSpecifications.className = 'info_booking_specifications';
//         specificationsSquare.className = 'specifications_square';
//         specificationsPerson.className = 'specifications_person';
//         infoBookingPriceBtn.className = 'info_booking_price_btn';
//         infoBookingPrice.className = 'info_booking_price';
//         infoBookingBtn.className = 'info_booking_btn';
//         infoBookingBtn.setAttribute('data-id', item_id);
//
//         product.innerHTML = `
//             <img class="product_img" src="${imgSrc}" alt="#">
//         `;
//
//         infoBookingHeader.innerHTML = `
//             <h1>${title}</h1>
//         `;
//
//         specificationsSquare.innerHTML = `
//             <img src="/assets/img/square.png" alt="#">
//             <p>${square} кв. м</p>
//         `;
//
//         specificationsPerson.innerHTML = `
//             <img src="/assets/img/person.png" alt="#">
//             <p>${peopleCount} чел.</p>
//         `;
//
//         infoBookingPrice.innerHTML = `
//             <h1>Цена</h1>
//             <p>${price} р</p>
//         `;
//
//         infoBookingBtn.textContent = 'Забронировать';
//
//         infoBookingHeader.append(infoBookingSpecifications);
//         infoBookingSpecifications.append(specificationsSquare, specificationsPerson);
//         infoBookingMain.append(infoBookingHeader, infoBookingPriceBtn);
//         infoBookingPriceBtn.append(infoBookingPrice, infoBookingBtn);
//         infoBookingBody.append(infoBookingMain, infoBookingAddInfo);
//         product.append(infoBookingBody);
//         productsList.appendChild(product);
//
//         infoBookingBody.addEventListener('mouseenter', () => {
//             infoBookingAddInfo.classList.remove('hide');
//             infoBookingAddInfo.style.cssText = 'z-index: 2; background: #CCECEB;';
//         });
//
//         infoBookingBody.addEventListener('mouseleave', () => {
//             infoBookingAddInfo.classList.add('hide');
//         });
//
//         const productImg = product.querySelector('.product_img');
//
//         productImg.addEventListener('mouseenter', () => {
//             infoBookingAddInfo.classList.remove('hide');
//             infoBookingAddInfo.style.cssText = 'z-index: 2; background: #CCECEB;';
//         });
//
//         productImg.addEventListener('mouseleave', () => {
//             infoBookingAddInfo.classList.add('hide');
//         });
//
//         infoBookingBtn.addEventListener('click', () => {
//             const userId = document.getElementById("user_id").value;
//             fetch('./assets/api/booking.php', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     item_booking: item,
//                     userId
//                 })
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.success) {
//                         alert(data.message);
//                         window.location.href = "../personal_account.php";
//                     } else {
//                         alert(data.message);
//                     }
//                 });
//         });
//
//         getProductAddInfo(product, item_id);
//     }
// }
