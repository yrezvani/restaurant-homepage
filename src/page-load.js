'use strict';

const createPage = function () {
    const img = document.createElement('img');
    img.src = './restaurant.jpg';
    const h1 = document.createElement('h1');
    h1.textContent = 'Fantastic restaurant';
    const p = document.createElement('p');
    p.textContent =
        'We offer the highest quality food at the lowest possible price. You will not regret choosing our restaurant.';
    const content = document.querySelector('#content');
    content.append(img, h1, p);
};

export {createPage};
