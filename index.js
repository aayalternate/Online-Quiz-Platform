  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import{getAuth,GoogleAuthProvider,signInWithPopup}from"https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


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
  const auth=getAuth(app)
  auth.languageCode='en'
const provider=new googleAuthProvider();


const googleLogin=document.getElementById("firebaseui-auth-container")
googleLogin.addEventListener("click",(){
    
})