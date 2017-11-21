(function () {

// Initialize Firebase
    const config = {
        apiKey: "AIzaSyBZu2Oyh9qGFNjUbsmH7brAR1kUoUGQZxE",
        authDomain: "scc565-34877.firebaseapp.com",
        databaseURL: "https://scc565-34877.firebaseio.com",
        projectId: "scc565-34877",
        storageBucket: "scc565-34877.appspot.com",
        messagingSenderId: "537837358114"
    };
    try {
        firebase.initializeApp({
            databaseURL: 'https://scc565-34877.firebaseio.com'
        })
    } catch (err) {
// we skip the "already exists" message which is
// not an actual error when we're hot-reloading
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack)
        }
    }



    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const btnlogin = document.getElementById('btnlogin');

    btnlogin.addEventListener('click', e => {
        const txtemail = email.value;
        const txtpass = pass.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(txtemail, txtpass);
        promise.cath(e => console.log(e.message));

    });


}());