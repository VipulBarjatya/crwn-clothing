import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfH9joehP0rbDvDeQIqZe4lBh6NcSwgA8",
  authDomain: "crwn-clothing-db-90faa.firebaseapp.com",
  projectId: "crwn-clothing-db-90faa",
  storageBucket: "crwn-clothing-db-90faa.appspot.com",
  messagingSenderId: "181112563549",
  appId: "1:181112563549:web:b9ae0cce3731c95d89eab4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userRef)

    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
      const {uid, displayName, email} = userAuth;
      const createdAt = new Date()
      try{
        await setDoc(userRef,{
            uid,
            displayName,
            email,
            createdAt
        })
      } catch(err){
        console.log('error creating the user: ',err);
      }
    }

    return userRef;
}
