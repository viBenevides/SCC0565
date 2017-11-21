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
    firebase.initializeApp(config);

    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const btnlogin = document.getElementById('btnlogin');
    const btnlogout = document.getElementById('btnlogout');
    const formlogin = document.getElementById('formlogin');
    const cadastroform = document.getElementById('formcadastro');
    const csucesso = document.getElementById('csucesso');
    btnlogin.addEventListener('click', e => {
        const txtemail = email.value;
        const txtpass = pass.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(txtemail, txtpass);

    });

    btnlogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {            
            formlogin.style.visibility = 'hidden';      // Hide
            btnlogout.style.visibility = 'visible';     // Show
        } else {
            btnlogout.style.visibility = 'hidden';      // Hide
            formlogin.style.visibility = 'visible';     // Show
        }
    });

}());