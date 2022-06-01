//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCOt097CctiB8rTGfUNgYX6R2Sygl7024c",
    authDomain: "kwitter-81690.firebaseapp.com",
    databaseURL: "https://kwitter-81690-default-rtdb.firebaseio.com",
    projectId: "kwitter-81690",
    storageBucket: "kwitter-81690.appspot.com",
    messagingSenderId: "282677468967",
    appId: "1:282677468967:web:fb87b06a6e9ae56cc25302"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
