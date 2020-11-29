import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB590QJP6gsG2pmJHLYxuwi6lUfUl5cyuU",
  authDomain: "crwn-db-29f4d.firebaseapp.com",
  databaseURL: "https://crwn-db-29f4d.firebaseio.com",
  projectId: "crwn-db-29f4d",
  storageBucket: "crwn-db-29f4d.appspot.com",
  messagingSenderId: "594841355297",
  appId: "1:594841355297:web:351bd7d91f9c1a59bf8f60",
  measurementId: "G-S7C86ZVQCL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;