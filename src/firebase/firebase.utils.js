import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* Typically it is good practice not to expose your API key publicly, 
but in the case of firebase, we have to do so because this is how 
firebase knows the application is ours! This is perfectly safe, 
and the intended purpose of this public API key. If you commit your 
code to Github, you may get a warning from GitGuardian having caught 
a google key, but GitGuardian has acknowledged that this is not an issue.*/

const firebaseConfig = {
    apiKey: "AIzaSyAH8NcWKAmkFAaBtyAJPYHm3HSP7V8g48g",
    authDomain: "ecommerce-app-react-f53a9.firebaseapp.com",
    databaseURL: "https://ecommerce-app-react-f53a9.firebaseio.com",
    projectId: "ecommerce-app-react-f53a9",
    storageBucket: "ecommerce-app-react-f53a9.appspot.com",
    messagingSenderId: "388248180924",
    appId: "1:388248180924:web:17819c034aef49ceff98b9",
    measurementId: "G-C52PHQWNWE"
  };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for Google auth

//Google auth provider class
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
//asynchronous 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;