const xhr = new XMLHttpRequest();
xhr.open('GET', '/assets/api/getDataFromDB.php');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            // console.log(data);
            // data.map(item=>(
            //     console.log(item)
            // ))

        } else {
            console.error('Error occurred: ' + xhr.status);
        }
    }
};
let email = document.querySelector('#email')
let login_submit = document.querySelector('.login_submit')
let email_user = '';
email.addEventListener('input', (e) => {
    email_user = e.target.value;
})

login_submit.addEventListener('click', (e) => {
    e.preventDefault()
    postData("http://coursovaya/assets/api/login.php/", { answer: email_user})
    //     .then((data) => {
    //         console.log(data); // JSON data parsed by `data.json()` call
    // });
})
// fetch("http://coursovaya/assets/api/login.php/", {method: "POST"})
//     .then((response) => response.json())
//     .then((data) => console.log(data));

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((response) => response.json())
        .then((data) => console.log(data));
    // return data; // parses JSON response into native JavaScript objects
}






// const xhr = new XMLHttpRequest();
// xhr.open('GET', '/assets/api/getDataFromDB.php');
// xhr.send();
//
// xhr.onload = function() {
//     if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         data.forEach(item=> console.log(item));
//     } else {
//         console.error('Error occurred: ' + xhr.status);
//     }
// };
//
// const email = document.querySelector('#email');
// let email_user = '';
//
// email.addEventListener('input', (e) => {
//     email_user = e.target.value;
// });
//
// const login_submit = document.querySelector('.login_submit');
//
// login_submit.addEventListener('click', (e) => {
//     // console.log(email_user)
//     e.preventDefault();
//     fetch("http://coursovaya/assets/api/login.php/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ username: email_user })
//     })
//         .then(response => response.json())
//         .then(data => console.log(data));
// });
