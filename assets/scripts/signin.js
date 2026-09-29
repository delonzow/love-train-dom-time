console.log('in signin.js');

const signInBtn = document.querySelector('#signin-btn');
const pwdBx = document.querySelector('#pwd-box');
const message = document.querySelector('#message');
const hardCodePwd = 'lasagna';

signInBtn.addEventListener('click', function () {
    const userPwd = pwdBx.value.trim();

    console.log('pwd value: ', userPwd);
    console.log('user pwd: ', userPwd);
    console.log('hard code pwd: ', hardCodePwd);

    if (userPwd === hardCodePwd) {
        console.log('signed in');
        sessionStorage.setItem('signedIn', 'true');
        window.location.href = 'private.html';
    } else {
        console.log('not signed in');
        message.textContent = 'nope. try again!';
        pwdBx.value = '';
    }
});