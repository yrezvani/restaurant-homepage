import {createPage} from './page-load';
import {secondTab} from './menu-tab';
import {contactTab} from './contact-tab';

createPage();
const content = document.querySelector('#content');
const body = document.querySelector('body');
const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
const contactBtn = document.createElement('button');
contactBtn.textContent = 'Contact Us';
body.insertBefore(contactBtn, body.children[0]);
body.insertBefore(menuBtn, body.children[0]);
body.insertBefore(homeBtn, body.children[0]);

homeBtn.addEventListener('click', function () {
    document.querySelector('#content').innerHTML = '';
    createPage();
});

menuBtn.addEventListener('click', function () {
    document.querySelector('#content').innerHTML = '';
    secondTab();
});

contactBtn.addEventListener('click', function () {
    document.querySelector('#content').innerHTML = '';
    contactTab();
});

// const contactBtn = document.createElement('button');
// btnOne.textContent = 'Contact';
