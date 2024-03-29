let form = document.querySelectorAll('form')
form[0].addEventListener('submit', (e) => {
    e.preventDefault();
    let searchInput = document.getElementById('search').value;
    let search_room_get = document.querySelector('.search_room_get');
    let existingResult = search_room_get.querySelector('.search_room_result');

    fetch('/assets/api/searchEditProduct.php', {
        method: 'POST',
        body: JSON.stringify({
            id: searchInput
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                let room = data.message[0];
                let product = existingResult || document.createElement('div');
                product.className = 'search_room_result';
                product.innerHTML = `
        <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>people_count</th>
                        <th>square</th>
                        <th>price</th>
                        <th>img</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${room.id}</td>
                        <td>${room.title}</td>
                        <td>${room.description}</td>
                        <td>${room.people_count}</td>
                        <td>${room.square}</td>
                        <td>${room.price}</td>
                        <td>${room.img}</td>
                        <td><button class="redact_product">Редактировать</button></td>
                    </tr>
                    <tr class="redact_product_inputs hide">
                        <td><input id="old_id" type="text" value="${room.id}"></td>
                        <td><textarea id="new_title" cols="30" rows="10">${room.title}</textarea></td>
                        <td><textarea id="new_description" cols="30" rows="10">${room.description}</textarea></td>
                        <td><input id="new_people_count" type="text" value="${room.people_count}"></td>
                        <td><input id="new_square" type="text" value="${room.square}"></td>
                        <td><input id="new_price" type="text" value="${room.price}"></td>
                        <td><input id="new_img" type="file" value="${room.img}"></td>
                        <td><button class="save_changes">Сохранить изменения</button></td>
                    </tr>
                </tbody>
            </table>
        `;

                if (!existingResult) {
                    search_room_get.appendChild(product);
                }
                let save_changes = product.querySelector('.save_changes')

                save_changes.addEventListener("click", (event) => {
                    event.preventDefault();
                    const input_edit_photo = document.querySelector('input[type="file"]')
                    let edit_data = new FormData()
                    edit_data.append('edit_img', input_edit_photo.files[0])
                    edit_data.append('id', document.getElementById('old_id').value)
                    edit_data.append('new_title', document.getElementById('new_title').value)
                    edit_data.append('new_description', document.getElementById('new_description').value)
                    edit_data.append('new_people_count', document.getElementById('new_people_count').value)
                    edit_data.append('new_square', document.getElementById('new_square').value)
                    edit_data.append('new_price', document.getElementById('new_price').value)
                    fetch("./assets/api/editProduct.php", {
                        method: "POST",
                        body: edit_data,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.status) {
                                alert(data.message);
                                location.reload();
                            } else {
                                alert(data.message);
                            }
                        })
                        .catch((error) => console.error(error));
                })

                let redact_product = product.querySelector(`.redact_product`);
                let redact_product_inputs = product.querySelector('.redact_product_inputs');
                redact_product.addEventListener('click', (e) => {
                    redact_product_inputs.classList.toggle('hide');
                });
            } else {
                alert(data.message)
            }

        })
        .catch(error => console.error(error));
});




document.querySelector('.create_room_btn').addEventListener('click',(event) => {
    event.preventDefault();
    const input_photo = document.querySelector('input[type="file"]')
    let create_data = new FormData()
    create_data.append('create_img', input_photo.files[0])
    create_data.append('create_title', document.getElementById('create_title').value)
    create_data.append('create_description', document.getElementById('create_description').value)
    create_data.append('create_people_count', document.getElementById('create_people_count').value)
    create_data.append('create_square', document.getElementById('create_square').value)
    create_data.append('create_price', document.getElementById('create_price').value)
    fetch("./assets/api/createProduct.php", {
        method: "POST",
        body: create_data,
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data.status) {
                alert(data.message);
                location.reload();
                window.location.href = "../product.php";
            } else {
                alert(data.message);
            }
        })
        .catch((error) => console.error(error));
})



form[1].addEventListener('submit', (e) => {
    e.preventDefault();
    let searchInput = document.getElementById('search_delete').value;
    let search_remove_room_get = document.querySelector('.search_remove_room_get');
    let existingResultDelete = search_remove_room_get.querySelector('.search_room_delete_result');

    fetch('/assets/api/searchEditProduct.php', {
        method: 'POST',
        body: JSON.stringify({
            id: searchInput
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                let room = data.message[0];
                let product = existingResultDelete || document.createElement('div');
                product.className = 'search_room_delete_result';
                product.innerHTML = `
        <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>people_count</th>
                        <th>square</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="delete_id">${room.id}</td>
                        <td id="delete_title">${room.title}</td>
                        <td>${room.description}</td>
                        <td>${room.people_count}</td>
                        <td>${room.square}</td>
                        <td>${room.price}</td>
                        <td><button class="redact_product">Удалить</button></td>
                    </tr>
                </tbody>
            </table>
        `;

                if (!existingResultDelete) {
                    search_remove_room_get.appendChild(product);
                }
                let delete_btn = product.querySelector('.redact_product')

                delete_btn.addEventListener("click", (event) => {
                    event.preventDefault();
                    const delete_id = document.getElementById('delete_id').textContent;
                    const delete_title = document.getElementById('delete_title').textContent;
                    if (confirm('Вы уверены что хотите удалить номер с id ' + delete_id + '?'))
                    fetch("./assets/api/deleteProduct.php", {
                        method: "POST",
                        body: JSON.stringify({
                            delete_id,
                            delete_title
                        }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.status) {
                                alert(data.message);
                                location.reload();

                            } else {
                                alert(data.message);
                            }
                        })
                        .catch((error) => console.error(error));
                })
            } else {
                alert(data.message)
            }

        })
        .catch(error => console.error(error));
});
