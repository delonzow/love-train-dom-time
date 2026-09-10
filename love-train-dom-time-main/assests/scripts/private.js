console.log('in private dot js');

const signedIn = sessionStorage.getItem('signedIn');

if (signedIn === 'true') {
    console.log('yes, signed in');
}
else {
    console.log('not signed in');
}