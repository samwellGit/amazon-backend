

import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyASW2FdDbb2WHDFYP9NxomocFKUGYXHNTg",
  authDomain: "clon-c5324.firebaseapp.com",
  projectId: "clon-c5324",
  storageBucket: "clon-c5324.appspot.com",
  messagingSenderId: "754335844746",
  appId: "1:754335844746:web:fd888e1e364176c14be073",
  measurementId: "G-1VCDPBYL3H",
};

//Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth,db };




































//Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional






// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyASW2FdDbb2WHDFYP9NxomocFKUGYXHNTg",
//   authDomain: "clon-c5324.firebaseapp.com",
//   projectId: "clon-c5324",
//   storageBucket: "clon-c5324.appspot.com",
//   messagingSenderId: "754335844746",
//   appId: "1:754335844746:web:fd888e1e364176c14be073",
//   measurementId: "G-1VCDPBYL3H",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { auth, db };

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyASW2FdDbb2WHDFYP9NxomocFKUGYXHNTg",
//   authDomain: "clon-c5324.firebaseapp.com",
//   projectId: "clon-c5324",
//   storageBucket: "clon-c5324.appspot.com",
//   messagingSenderId: "754335844746",
//   appId: "1:754335844746:web:fd888e1e364176c14be073",
//   measurementId: "G-1VCDPBYL3H", // This might be optional
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Get the auth instance
// const auth = getAuth(app);

// export { auth, };






