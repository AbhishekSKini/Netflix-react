import Firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from "../seed";



const config={
    apiKey: "AIzaSyD0gD4iqYqZA7NsHUnMtSh3e-et2S1iCYg",
    authDomain: "netflix-13b68.firebaseapp.com",
    projectId: "netflix-13b68",
    storageBucket: "netflix-13b68.appspot.com",
    messagingSenderId: "1024958678637",
    appId: "1:1024958678637:web:192bc526193455facbe164"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase); 
export {firebase};
