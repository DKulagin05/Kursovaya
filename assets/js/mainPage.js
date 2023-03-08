const headMinus = document.querySelector('.head_booking_minus');
const headPlus = document.querySelector('.head_booking_plus');
const headCount = document.querySelector('.head_booking_count');

let headCountNum = 1;

function updateCount() {
    headCount.innerHTML = headCountNum;
}

headMinus.addEventListener('click', () => {
    if (headCountNum > 1) {
        headCountNum--;
        updateCount();
    }
});

headPlus.addEventListener('click', () => {
    if (headCountNum < 9) {
        headCountNum++;
        updateCount();
    }
});