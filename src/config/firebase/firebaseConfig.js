import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig ={
    apiKey: "AIzaSyA0TtwPolCYdeO63IdeR_qzlVHUAokWVsE",
    authDomain: "login-react-f095d.firebaseapp.com",
    projectId: "login-react-f095d",
    storageBucket: "login-react-f095d.appspot.com",
    messagingSenderId: "536376080230",
    appId: "1:536376080230:web:d01a0de305e0ce82567aa7"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
