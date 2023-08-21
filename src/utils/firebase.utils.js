import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
