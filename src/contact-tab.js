'use strict';

const contactTab = function () {
    const content = document.querySelector('#content');
    const contact = document.createElement('h1');
    contact.textContent = 'Contact us';
    const email = document.createElement('h3');
    email.textContent = 'Email us at';
    const emailText = document.createElement('p');
    emailText.textContent = 'lkjsd@gmail.com';
    const call = document.createElement('h3');
    call.textContent = 'Call us at';
    const callText = document.createElement('p');
    callText.textContent = '078654635';
    const facebook = document.createElement('h3');
    facebook.textContent = 'Our Facebook page';
    const facebookText = document.createElement('p');
    facebookText.textContent = 'Facebook.com/ourpage';

    content.append(
        contact,
        email,
        emailText,
        call,
        callText,
        facebook,
        facebookText
    );
};

export {contactTab};
