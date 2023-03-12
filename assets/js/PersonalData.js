const userId = document.getElementById("user_id").value;
fetch('/assets/api/personalData.php',{
    method: 'POST',
    body: JSON.stringify({
        userId
    })
})
    .then(response => response.json())
    .then(data => {
        let personal_data_block = document.querySelector('.personal_data');
        personal_data_block.innerHTML = `
                <div class="personal_data_fn">
                    <div class="personal_surname">${data[0].surname}</div>
                    <div class="personal_name">${data[0].name}</div>
                    <div class="personal_patronymic">${data[0].patronymic}</div>
                    <div class="personal_editing_btn"><img src="assets/img/editing.png" alt="#"></div>
                </div>
                <div class="personal_data_phone">
                    <div class="personal_phone">${data[0].phone}</div>
                    <div class="personal_editing_btn"><img src="assets/img/editing.png" alt="#"></div>
                </div>
                <div class="personal_data_mail">
                    <div class="personal_mail">${data[0].email}</div>
                    <div class="personal_editing_btn"><img src="assets/img/editing.png" alt="#"></div>
                </div>
        `
    })
    .catch(error => console.log(error));