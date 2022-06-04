const code = '<h1 style="font-family: cursive; color: #fff">Not for small devices, :(</h1>';
const content = document.querySelector('.content');
const heading = document.querySelector('.heading');
const circle = document.querySelector('.circle');

if(window.innerWidth < 1000) {
    document.body.innerHTML = code;
};

function home() {
    content.innerHTML = `The Home Page`;

    heading.innerHTML = `Home`;

    document.querySelector('.home').style.color = `darkcyan`;
    document.querySelector('.about').style.color = `#fff`;
    document.querySelector('.creations').style.color = `#fff`;
    document.querySelector('.blogs').style.color = `#fff`;
    document.querySelector('.more').style.color = `#fff`;
}

function about() {
    heading.innerHTML = `About`;
    content.innerHTML = `The About Page`;
    document.querySelector('.about').style.color = 'darkcyan';
    document.querySelector('.home').style.color = `#fff`;
    document.querySelector('.creations').style.color = `#fff`;
    document.querySelector('.blogs').style.color = `#fff`;
    document.querySelector('.more').style.color = `#fff`;
    
}

function creations() {
    heading.innerHTML = `Creations`;
    content.innerHTML = `The Creations Page`;
    document.querySelector('.creations').style.color = 'darkcyan';
    document.querySelector('.home').style.color = `#fff`;
    document.querySelector('.about').style.color = `#fff`;
    document.querySelector('.blogs').style.color = `#fff`;
    document.querySelector('.more').style.color = `#fff`;
}

function blogs() {
    heading.innerHTML = `Blogs`;
    content.innerHTML = `
    <h1>#Blog 1 - Pound Tracker</h1>
    <h3>Date: 25/04/2022</h3>
    <small>Hello readers,</small>
    <small>
    I have been recently working on web app called Pound Tracker. It is a income/expense tracker
    which allows you to add your incomes/expenses into a table along with the date, type of
    incomes/expenses and a description.The github repository can be found at
    https://github.com/IsaiahfromIndia/Pound-Tracker. Thank you for reading.
    </small>
    `;
    document.querySelector('.blogs').style.color = 'darkcyan';
    document.querySelector('.home').style.color = `#fff`;
    document.querySelector('.about').style.color = `#fff`;
    document.querySelector('.creations').style.color = `#fff`;
    document.querySelector('.more').style.color = `#fff`;
}

function more() {
    heading.innerHTML = `More`;
    content.innerHTML = `The page with more things`;
    document.querySelector('.more').style.color = 'darkcyan';
    document.querySelector('.home').style.color = `#fff`;
    document.querySelector('.about').style.color = `#fff`;
    document.querySelector('.creations').style.color = `#fff`;
    document.querySelector('.blogs').style.color = `#fff`;
}