let profile_btn = document.querySelector(".header_profile");
let window_log = document.querySelector(".window_reg_log");

profile_btn.addEventListener("click", ()=> {
    window_log.classList.toggle('active')
})