import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMF86EEJ1RtqCZgnzHBh8CYvQCADraE4g",
    authDomain: "raghav-app-4bcda.firebaseapp.com",
    projectId: "raghav-app-4bcda",
    storageBucket: "raghav-app-4bcda.appspot.com",
    messagingSenderId: "565022612156",
    appId: "1:565022612156:web:4a07a614720c848da30eb9",
    measurementId: "G-9GR4HXP5V6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};


export { signInWithGoogle};

