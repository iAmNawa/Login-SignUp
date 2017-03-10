(function() {
    // Initialize Firebase
     var config = {
       apiKey: "AIzaSyC7IoyuN7WZgww0SYxiPs3-JxSYDxhWVZM",
       authDomain: "titans-e8040.firebaseapp.com",
       databaseURL: "https://titans-e8040.firebaseio.com",
       storageBucket: "titans-e8040.appspot.com",
       messagingSenderId: "889899415412"
     };
     firebase.initializeApp(config);

     //Get elements
     const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
       const btnLogin = document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('btnSignUp');
         const btnLogout = document.getElementById('btnLogout');

        //Add login event
        btnLogin.addEventListener('click', e => {
            //Get email and pass
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();
            //Sign in
            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message));
        });
        //Add Sign Up event
        btnSignUp.addEventListener('click', e => {
            //Get email and pass
            // TODO: CHECK FOR REAL EMAIL
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();
            //Sign in
            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise
            .catch(e => console.log(e.message));
        });
        btnLogout.addEventListener('click', e => {
            firebase.auth.signOut();
        });
        //Add a realtime listener
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);
                btnLogout.classList.remove('hide');
            } else {
                console.log('not logged in');
                btnLogout.classList.add('hide');
            }
        });
}());
