const mailingForm = document.getElementById('mailingForm');

mailingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('mailing').value;

    fetch('./assets/api/footer_mailing.php', {
        method: 'POST',
        body: JSON.stringify({
            email
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error(error));
});
// document.addEventListener('DOMContentLoaded', () => {
//     const mailingForm = document.getElementById('mailingForm');
//     if (mailingForm) {
//         mailingForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const email = document.getElementById('mailing').value;
//             fetch('./assets/api/footer_mailing.php', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     email
//                 })
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.success) {
//                         alert(data.message);
//                     } else {
//                         alert(data.message);
//                     }
//                 })
//                 .catch(error => console.error(error));
//         });
//     }
// });