const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // отменяем стандартное действие браузера при отправке формы

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const patronymic = document.getElementById('patronymic').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const password_repeat = document.getElementById('password_repeat').value;


    fetch("./assets/api/registration.php", {
        method: "POST",
        body: JSON.stringify({
            name,
            surname,
            patronymic,
            email,
            phone,
            password,
            password_repeat
         }),
    })
        .then((response) => response.json()) // парсим ответ от сервера в формате JSON
        .then((data) => {
            if (data.status) {
                window.location.href = "../personal_account.php"; // переходим на страницу личного кабинета
            } else {
                alert(data.message); // выводим сообщение об ошибке регистрации
            }
        })
        .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
});