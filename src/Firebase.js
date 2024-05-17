import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpCZ_jnDLcZWsx6zvmDrMQmMq2ExQWVZg",
  authDomain: "auth-5de4d.firebaseapp.com",
  projectId: "auth-5de4d",
  storageBucket: "auth-5de4d.appspot.com",
  messagingSenderId: "232102284100",
  appId: "1:232102284100:web:aadedc1a2fc86838c72511"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle= ()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        const name = result.user.displayName
        const email = result.user.email
        const photo = result.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("photo", photo)
    })
    .catch((error)=>{
        console.log(error)
    })
}