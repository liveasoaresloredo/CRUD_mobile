import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDDFvNBGnz3fzZ_hsvSIteqES0PZ9oz7us",
    authDomain: "crud-instituto-6e6e4.firebaseapp.com",
    projectId: "crud-instituto-6e6e4",
    storageBucket: "crud-instituto-6e6e4.appspot.com",
    messagingSenderId: "325532318847",
    appId: "1:325532318847:web:aabc9f23903bbb646cd34a"
};

const app = initializeApp(firebaseConfig);

export default app