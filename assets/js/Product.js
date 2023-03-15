fetch('/assets/api/ProductData.php')
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            for (let item of data.message) {
                let item_id = item.id;
                let products_list = document.querySelector('.products-list');
                let product = document.createElement('div');
                let product_block_button = document.querySelector('.product-list-button')
                product_block_button.style.display = 'none';
                product.className = 'personal_info_booking_unit';
                product.innerHTML = `
            <img class="product_img" src="/assets/img/rent_ico.png" alt="#">
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
                    <div class="info_booking_price_btn">
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
                // let info_booking_add_img = product.querySelector('.info_booking_add_img')
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

                // let ul = product.querySelector('ul')
                // ul.style.cssText = 'font-weight: 500; font-size: 16px; padding-left: 20px; ' +
                //     'line-height: 20px; display: flex; flex-direction: column; gap: 5px;'
                // let li = product.querySelector('li')
                // li.style.cssText = 'color: #1BA39E;'

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

const buttons = document.querySelectorAll('.info_booking_btn');
for (const button of buttons) {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        console.log(id)
        // fetch('/path/to/api/Booking')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    });
}
