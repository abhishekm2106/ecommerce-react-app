import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpPVbDq0RQWEaDWztUlDRdxkOezFjk5zQ",
    authDomain: "crown-clothing-store-4660f.firebaseapp.com",
    projectId: "crown-clothing-store-4660f",
    storageBucket: "crown-clothing-store-4660f.appspot.com",
    messagingSenderId: "894776349011",
    appId: "1:894776349011:web:7e6b884c4e1d342814d1a6",
    measurementId: "G-82VYDNT945"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


export const createUserProfileDocument = async (userAuth,addiotinalData)=>{
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists){
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addiotinalData
      })
    }catch(error){
      console.log('error created :  ',error)
    }
  }

  return userRef
  
}


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt':'select_account'})
export const signInWithGoogle =  ()=>auth.signInWithPopup(provider)

export default firebase;