// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// change all this
const firebaseConfig = {
    apiKey: "AIzaSyDWyXgi85-4wZre9lPEkoPveobV-SCjn50",
    authDomain: "ecommer-ed930.firebaseapp.com",
    projectId: "ecommer-ed930",
    storageBucket: "ecommer-ed930.appspot.com",
    messagingSenderId: "123279315709",
    appId: "1:123279315709:web:8cca08aa6cd87f407b6494",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
