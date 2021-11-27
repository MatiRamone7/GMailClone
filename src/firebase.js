import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq3fIs99V0k4E-MCMqn_iGtw0ghKpdTGo",
  authDomain: "clone-yt-84534.firebaseapp.com",
  projectId: "clone-yt-84534",
  storageBucket: "clone-yt-84534.appspot.com",
  messagingSenderId: "1074019927473",
  appId: "1:1074019927473:web:47c6567b0ecd97a584e990"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { firebaseApp, auth, db, provider };