import jwt_decode from '../../node_modules/jwt-decode/build/jwt-decode';

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('./assets/api/check_login.php', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {

                localStorage.setItem('token',data.token);

                const token = data.token;
                const decoded = jwt_decode(token);
                console.log(decoded);
                // console.log(jwt.encode(data.token));
                alert(data.message)
                // window.location.href = '../personal_account.php';
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error(error));
});