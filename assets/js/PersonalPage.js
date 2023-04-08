fetch('/assets/api/personalBookingInfo.php')
    .then(response => response.json())
    .then(data => {
        const token = localStorage.getItem('token');
        for (let i in data.result) {
            let item = data.result[i][1];
            let services = data.result[i][0];
                let item_id = item.id;
                let products_list = document.querySelector('.products-list');
                let product = document.createElement('div');
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
                        <div class="info_booking_price_btn">
                            <div class="info_booking_price">
                                <h1>Цена</h1>
                                <p>${item.price} р</p>
                            </div>
                            <div class="info_booking_btn">Отменить</div>
                        </div>
                    </div>
                    <div class="info_booking_add_info hide">
                        <div class="info_booking_add_block">
                            <div class="info_add_top_block">
                                <h1>Дополнительные услуги</h1>
                                <div class="add_top_block_check">
                                    <div class="checkbox_block">
                                        <input type="checkbox" name="breakfast" id="breakfast" disabled>
                                        <label for="breakfast">Завтрак</label>
                                    </div>
                                    <div class="checkbox_block">
                                        <input type="checkbox" name="dinner" id="dinner" disabled>
                                        <label for="dinner">Ужин</label>
                                    </div>
                                    <div class="checkbox_block">
                                        <input type="checkbox" name="spa" id="spa" disabled>
                                        <label for="spa">СПА</label>
                                    </div>
                                    <div class="checkbox_block">
                                        <input type="checkbox" name="transport" id="transport" disabled>
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
                        item_id,
                        token
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then((response) => response.json())
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
                if (services.breakfast == 1) {
                    product.querySelector('#breakfast').checked = true
                }
                if (services.dinner == 1) {
                    product.querySelector('#dinner').checked = true
                }
                if (services.spa == 1) {
                    product.querySelector('#spa').checked = true
                }
                if (services.transport == 1) {
                    product.querySelector('#transport').checked = true
                }
                products_list.appendChild(product);
                let product_img = product.querySelector('.product_img')
                let info_booking_body = product.querySelector('.info_booking_body');
                let info_booking_add_info = product.querySelector('.info_booking_add_info');
                let product_zero = document.querySelector('.product_zero')
                product_zero.classList.add('hide')
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
                    if (confirm('Вы уверены что хотите отменить бронирование?')) {
                        let item_booking = item;
                        const userId = document.getElementById("user_id").value;
                        fetch('./assets/api/cancelBooking.php', {
                            method: 'POST',
                            body: JSON.stringify({
                                item_booking,
                                userId
                            }),
                            headers: { 'Content-Type': 'application/json' }
                        })
                            .then(response => response.json())
                            .then(data => {
                                if(data.success) {
                                    alert(data.message);
                                    location.reload();
                                } else {
                                    alert(data.message);
                                }
                            });
                    }
                });

        }
    })
    .catch(error => console.log(error));