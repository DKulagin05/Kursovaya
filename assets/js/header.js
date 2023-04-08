let profile_btn = document.querySelector(".header_profile");
let window_log = document.querySelector(".window_reg_log");

profile_btn.addEventListener("click", ()=> {
    window_log.classList.toggle('active')
})
document.querySelector('.logout').addEventListener('click',()=>{
    localStorage.clear();
})

const token = localStorage.getItem('token');
const logoutEl = document.querySelector('.logout');
const profileEl = document.querySelector('.profile');
const loginEl = document.querySelector('.login');
const regEl = document.querySelector('.registration');

if (token) {
    logoutEl.classList.remove('hide');
    profileEl.classList.remove('hide');
    loginEl.classList.add('hide');
    regEl.classList.add('hide');
} else {
    logoutEl.classList.add('hide');
    profileEl.classList.add('hide');
    loginEl.classList.remove('hide');
    regEl.classList.remove('hide');
}