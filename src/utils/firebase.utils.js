import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
 initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

console.log("auth", auth);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { uid, displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        uid,
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating the user: ", err);
    }
  }

  return userRef;
};

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuth = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutAuth = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
