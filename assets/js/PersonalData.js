const userId = document.getElementById("user_id").value;
fetch('/assets/api/personalData.php',{
    method: 'POST',
    body: JSON.stringify({
        userId
    }),
    headers: { 'Content-Type': 'application/json' }
})
    .then(response => response.json())
    .then(data => {
        let personal_data_block = document.querySelector('.personal_info_body');
        personal_data_block.innerHTML = `
            <div class="personal_img"><img style="width: 300px; height:300px;" src="./assets/img/profile_pictures/${data[0].img}" alt="Profile_Img"></div>
            <div class="personal_data">
                <div class="personal_data_fn">
                    <div class="personal_surname">${data[0].surname}</div>
                    <div class="personal_name">${data[0].name}</div>
                    <div class="personal_patronymic">${data[0].patronymic}</div>
                </div>
                <div class="personal_data_phone">
                    <div class="personal_phone">${data[0].phone}</div>
                </div>
                <div class="personal_data_mail">
                    <div class="personal_mail">${data[0].email}</div>
                </div>
                <div class="admin_box">
                    <a href="./adminPage.php" class="admin_panel_btn">Админ панель</a>
                </div>
                <div class="edit_profile_btn">Редактировать профиль</div>
                <form class="edit_personal_data hide">
                    <div style="margin-bottom: 20px;">
                        <label for="edit_name">Имя:</label>
                        <input type="text" value="${data[0].name}" name="edit_name" id="edit_name" required>
                        
                        <label for="edit_surname">Фамилия:</label>
                        <input type="text" value="${data[0].surname}" name="edit_surname" id="edit_surname" required>
                        
                        <label for="edit_patronymic">Отчетство:</label>
                        <input type="text" value="${data[0].patronymic}" name="edit_patronymic" id="edit_patronymic">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label for="edit_phone">Телефон:</label>
                        <input type="text" value="${data[0].phone}" name="edit_phone" id="edit_phone" required>
                        
                        <label for="edit_mail">Email:</label>
                        <input type="text" value="${data[0].email}" name="edit_mail" id="edit_mail" required>
                        
                        <label for="edit_profile_img">Изображение профиля:</label>
                        <input type="file" value="" name="edit_profile_img" id="edit_profile_img">  
                    </div>
                    <input type="submit" class="save_changes">
                </form> 
            </div>
        `
        document.querySelector('.edit_profile_btn').addEventListener('click',()=>{
            document.querySelector('.edit_personal_data').classList.toggle('hide')
        })
        let form = document.querySelector('form')

        form.addEventListener('submit', (e) => {
            e.preventDefault();
                const input_edit_photo = document.querySelector('input[type="file"]')
                let edit_data = new FormData()
                edit_data.append('id', data[0].id)
                if (!input_edit_photo.files[0]) {
                    edit_data.append('edit_img', '')
                } else {
                    edit_data.append('edit_img', input_edit_photo.files[0])
                }
                edit_data.append('new_name', document.getElementById('edit_name').value)
                edit_data.append('new_surname', document.getElementById('edit_surname').value)
                edit_data.append('new_patronymic', document.getElementById('edit_patronymic').value)
                edit_data.append('new_phone', document.getElementById('edit_phone').value)
                edit_data.append('new_mail', document.getElementById('edit_mail').value)
                fetch("./assets/api/editPersonalData.php", {
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
    })
    .catch(error => console.log(error));

