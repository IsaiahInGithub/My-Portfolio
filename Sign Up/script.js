const btn = document.querySelector('.btn');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

username.focus();

username.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        email.focus();
    }
});

email.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        password.focus();
    }
});

password.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        btn.focus();
        btn.click();
    }
});

btn.addEventListener('click', () => {
    if(username.value.length >= 3 && email.value.split('@')[1] === 'gmail.com' && password.value.length >= 6) {
        location.replace('/index.html');
    } else {
        alert('Username or/and email or/and password');
    }
});