'use strict';

const secondTab = function () {
    const content = document.querySelector('#content');
    const menu = document.createElement('h1');
    menu.textContent = 'Menu';
    const mainCourse = document.createElement('h3');
    menu.textContent = 'Main course';
    const ul = document.createElement('ul');
    const biryani = document.createElement('li');
    biryani.textContent = 'Biryani';
    const chicken = document.createElement('li');
    chicken.textContent = 'Chicken Tikka';
    const steak = document.createElement('li');
    steak.textContent = 'Steak';
    const desserts = document.createElement('h3');
    menu.textContent = 'Desserts';
    const ul2 = document.createElement('ul');
    const iceCream = document.createElement('li');
    iceCream.textContent = 'Ice cream';
    const peachPie = document.createElement('li');
    peachPie.textContent = 'Peach pie';
    const chocolate = document.createElement('li');
    chocolate.textContent = 'Double Chocolate Bundt Cake';

    ul.append(biryani, chicken, steak);
    ul2.append(iceCream, peachPie, chocolate);
    content.append(menu, mainCourse, ul, desserts, ul2);
};

export {secondTab};
