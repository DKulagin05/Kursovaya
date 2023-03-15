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
            if (data.success) {
                if (data.admin == 0) {
                    window.location.href = '../personal_account.php';
                } else {
                    window.location.href = '../adminPage.php';
                }
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error(error));
});
