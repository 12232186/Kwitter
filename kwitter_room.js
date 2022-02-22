
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
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
user_name = localStorage.getItem("user_name");
document.getElementById("user_Name").innerHTML = "Welcome " +  user_name + "!";





function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log ("Room Name - " + Room_names);
row = "<div class = 'room_name' id="+Room_names+ "onclick = 'redrirectToRoomName (this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code

      });});}
getData();
function logout(){
  window.location = "index.html";
}


function addroom ()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding a room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}
function redrirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location ="kwitter_page.html";
}