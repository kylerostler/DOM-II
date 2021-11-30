import './less/index.less'

// Your code goes here!
const links = document.querySelectorAll('nav a');
const navLinks = Array.from(links);
//4 links
function greenText() {
    event.target.style.color = 'green';
};
navLinks[0].addEventListener('dblclick', greenText);
navLinks[1].addEventListener('wheel', greenText);
navLinks[2].addEventListener('copy', greenText);
navLinks[3].addEventListener('paste', greenText);

const busClicker = document.querySelector('.intro img');
//bus image
function redBus() {
    document.body.style.backgroundColor = 'red';
};
busClicker.addEventListener('mouseover', redBus);



const sign = document.querySelectorAll('.btn');
const signButtons = Array.from(sign);
//3 buttons
function purpleText() {
    event.target.style.color = 'purple';
};
function purpleBox() {
    event.target.style.backgroundColor = 'purple';
};
signButtons[0].addEventListener('cut', purpleText);
signButtons[1].addEventListener('', purpleBox);
signButtons[2].addEventListener('', purpleText);


const copyright = document.querySelector('.footer p');
//copyright section
function blueText() {
    document.body.style.color = 'blue';
};
copyright.addEventListener('click', blueText);



const funBus = document.querySelector('.logo-heading');
//fun bus heading


