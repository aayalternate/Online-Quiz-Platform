  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import{getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword}from"https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import{getDatabase,set,ref}from"https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";



const firebaseConfig = {
  apiKey: "AIzaSyCKdvKeWF1_ocK7FaWW_XwJJthLolzeWI0",
  authDomain: "onlinequizplatform.firebaseapp.com",
  databaseURL: "https://onlinequizplatform-default-rtdb.firebaseio.com",
  projectId: "onlinequizplatform",
  storageBucket: "onlinequizplatform.appspot.com",
  messagingSenderId: "123207401335",
  appId: "1:123207401335:web:27de70ff0f0889d09b2b72",
  measurementId: "G-PBVBSJGC1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database=getDatabase(app)

const auth=getAuth(app)
auth.languageCode='en'
const provider=new GoogleAuthProvider();





document.getElementById("signup-button").addEventListener("click",function(){
  var username=document.getElementById("username").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    set(ref(database,'users/'+user.uid),{
      username:username,
      email:email,
    })
    
    window.location.href="quiz.html";

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})


const googleLogin=document.getElementById("google-button");
googleLogin.addEventListener("click",function(){
signInWithPopup(auth, provider)
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const user = result.user;
window.location.href="quiz.html";

}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
 
  
});
  
})

