$('#signinBtn').on('click', function () {

});

console.log('in sigin dot js');

const signInBtn = document.querySelector('#signin-btn');
const pwdBx = document.querySelector('#pwd-box');
const hardCodePwd = 'lasagna';

signInBtn.addEventListener('click', function (){
    const helloBox = document.querySelector('#hello-box');

    const userPwd = pwdBx.value;

    console.log("pwd value: ", pwdBx.value);

    console.log('user pwd: ', userPwd);
    console.log('hard code pwd: ', hardCodePwd);

    if(userPwd == hardCodePwd) {
        console.log('signed in');
        sessionStorage.setItem('signedIn', 'true');
        window.location.href = 'private.html';
    }
    else {
        console.log('not signed in');
        document.querySelector('#message').textContent = 'nope. try again!';
        pwdBx.value = '';
    }

})