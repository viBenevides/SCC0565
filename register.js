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

    const name = document.getElementById('name');
    const birthday = document.getElementById('birthday');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');
    const cell = document.getElementById('cell');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass1');
    const btnregister = document.getElementById('btnregister');

    btnregister.addEventListener('click', e => {
        const txtname = name.value;
        const txtbirthday = birthday.value;
        const txtcidade = cidade.value;
        const txtuf = uf.value;
        const txtcell = cell.value;
        const txtemail = email.value;
        const txtpass = pass.value;
        const auth = firebase.auth();
        const promise = auth().createUserWithEmailAndPassword(txtemail, txtpassword).catch(function (error) {
           
        });
        promise.cath(e => console.log(e.message));

    });
        
        

}());