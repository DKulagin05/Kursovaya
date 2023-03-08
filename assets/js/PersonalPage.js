// const xhr = new XMLHttpRequest();
// xhr.open('GET', '/personal_account.php');
// xhr.send();
//
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText);
//             console.log(data);
//         } else {
//             console.error('Error occurred: ' + xhr.status);
//         }
//     }
// };






// // создаем объект XMLHttpRequest
// let xhr = new XMLHttpRequest();
//
// // указываем тип запроса и URL-адрес
// xhr.open('GET', './api/PersonalData', true);
//
// // отправляем запрос
// xhr.send();
//
// // обрабатываем ответ от сервера
// xhr.onload = function() {
//     if (xhr.status == 200) {
//         // данные получены успешно
//         let data = JSON.parse(xhr.response);
//         // обработка полученных данных
//         processData(data);
//     } else {
//         // произошла ошибка
//         console.error(xhr.statusText);
//     }
// };
//
// function processData(data) {
//     // обработка полученных данных
//     console.log(data);
// }






// получаем ссылку на форму
let loginForm = document.getElementById('loginForm');

// добавляем обработчик события submit
loginForm.addEventListener('submit', function(event) {
    // отменяем стандартное поведение формы
    event.preventDefault();

    // получаем данные из формы
    let formData = new FormData(loginForm);

    // отправляем AJAX-запрос на сервер
    fetch('/api/login', {
        method: 'POST',
        body: formData
    })
        .then(function(response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            // парсим полученные данные
            return response.json();
        })
        .then(function(data) {
            // обрабатываем полученные данные
            // console.log(data);
        })
        .catch(function(error) {
            console.error(error);
        });
});