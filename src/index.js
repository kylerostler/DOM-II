import './less/index.less'

// Your code goes here!
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();
        console.log('Sorry links broken');
    })
})
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
signButtons[1].addEventListener('mouseout', purpleBox);
signButtons[2].addEventListener('mouseleave', purpleText);



const copyright = document.querySelector('.footer p');
//copyright section
function blueText() {
    document.body.style.color = 'blue';
};
copyright.addEventListener('click', blueText);



// const funBus = document.querySelector('.logo-heading');
// //fun bus heading
function blackBackground(event) {
    if (event.key === 'b'){
    document.body.style.backgroundColor = 'black'};
};
function whiteBackground(event) {
    if (event.key === 'w'){
    document.body.style.backgroundColor = 'white'};
};
document.addEventListener('keydown', blackBackground);
document.addEventListener('keyup', whiteBackground);
