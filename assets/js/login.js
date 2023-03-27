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
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                alert(data.message)
                window.location.href = '../personal_account.php';
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error(error));
});