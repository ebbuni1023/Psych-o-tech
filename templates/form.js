 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDcsz0XVdJgoIOmAE1ecWHT6HhzPeSwakI",
    authDomain: "psych-o-tech-77e63.firebaseapp.com",
    projectId: "psych-o-tech-77e63",
    storageBucket: "psych-o-tech-77e63.appspot.com",
    messagingSenderId: "378074155770",
    appId: "1:378074155770:web:52b899e12a5ce109bcd743"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");


}

function logIn() {

    var email = document.getElementById("emailLogIn");
    var password = document.getElementById("passwordLogIn");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));


}

auth.onAuthStateChanged(function(user) {

    if (user) {

        var email = user.email;
        alert("Active User " + email);

        //Take user to a different or home page
        window.location = "Livemeeting.html";
        //is signed in

    } else {

        alert("No Active User");
        //no user is signed in

    }



});