import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"




const firebaseConfig = {
    apiKey: "AIzaSyCOmoRxJK2siZuH5fPBRAVzyMvNTk5HQ1s",
    authDomain: "digitalpasal-app.firebaseapp.com",
    projectId: "digitalpasal-app",
    storageBucket: "digitalpasal-app.appspot.com",
    messagingSenderId: "705539821376",
    appId: "1:705539821376:web:54bd206a8c5912b67f74a5",
    measurementId: "G-VFMVKYRRL1"
  };
  firebase.initializeApp(firebaseConfig);
   const auth =firebase.auth();
   const firestore = firebase.firestore();
   const storage = firebase.storage(); 
   const facebookProvider = new firebase.auth.FacebookAuthProvider();
  //  const googleProvider = new firebase.auth.GoogleAuthProvider();
   export {auth,firestore,storage,facebookProvider};
  
  