const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

const loginBtn = document.getElementById('loginBtn')

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

function login() {
    loginBtn.addEventListener('click', (event) => {
        const userName = document.getElementById('')
        alert(`${userName} Logged in`)
    })

}