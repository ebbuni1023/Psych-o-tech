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

function signOut() {

    auth.signOut();
    alert("Signed Out");
    window.location = "index.html";

}

auth.onAuthStateChanged(function(user) {

    if (user) {

        var email = user.email;
        alert("Active User " + email);

        //Take user to a different or home page

        //is signed in

    } else {

        alert("No Active User");
        //no user is signed in


    }



});