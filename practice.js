
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCHgTZMAyTAe0ZLuqkVo15iQX1Rgneg8Rs",
    authDomain: "kwitter-project-2e6fb.firebaseapp.com",
    databaseURL: "https://kwitter-project-2e6fb-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-2e6fb",
    storageBucket: "kwitter-project-2e6fb.appspot.com",
    messagingSenderId: "431013564926",
    appId: "1:431013564926:web:dfb6ebdfc347eb3fbcf0af"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addUser() {
     user_name = document.getElementById ("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
     });
 }