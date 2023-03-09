fetch('/assets/api/ProductData.php')
    .then(response => response.json())
    .then(data => {
        for (let item of data) {
            let products_list = document.querySelector('.products-list');
            let product = document.createElement('div');
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
                            <ul>
                                <li><p>TV</p></li>
                                <li><p>Wi-Fi</p></li>
                                <li><p>Кондиционер</p></li>
                                <li><p>Мини-бар</p></li>
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
            let info_booking_add_img = product.querySelector('.info_booking_add_img')
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
