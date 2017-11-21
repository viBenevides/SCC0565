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
    const cadastroform = document.getElementById('formcadastro');
    const csucesso = document.getElementById('csucesso');
    btnlogin.addEventListener('click', e => {
        const txtemail = email.value;
        const txtpass = pass.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(txtemail, txtpass);



    });

//    btnlogout.addEventListener('click', e => {
//        firebase.auth().signOut();
//    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            var re = /apples/gi;
            var str = 'login';
            var newstr = str.replace(re, 'logout');
            window.alert("Voce esta logado!");
            window.location.replace("index.html");

            csucesso.classList.remove('hide');
            cadastroform.classList.add('hide');
        } else {
            csucesso.classList.add('hide');
            cadastroform.classList.remove('hide');
        }
    });

}());