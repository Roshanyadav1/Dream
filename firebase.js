// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCR6CiG4oCB3g84a55U_dn5os5wc6t4mlY",
    authDomain: "dream-ec53f.firebaseapp.com",
    databaseURL: "https://dream-ec53f-default-rtdb.firebaseio.com",
    projectId: "dream-ec53f",
    storageBucket: "dream-ec53f.appspot.com",
    messagingSenderId: "1079256256419",
    appId: "1:1079256256419:web:3dbada07818a6833eed416",
    measurementId: "G-76NV664X1K"
};

// Initialize Firebase

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { auth };