// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0BVwotJQCuxcK1JCHPJpM29Mz7HNifeg",
  authDomain: "netflix-clone-99932.firebaseapp.com",
  projectId: "netflix-clone-99932",
  storageBucket: "netflix-clone-99932.firebasestorage.app",
  messagingSenderId: "270332489419",
  appId: "1:270332489419:web:5ebeb9eb70b643dacf754e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try{
          const res =await createUserWithEmailAndPassword(auth,email,password);
          const user=res.user;
          await addDoc(collection(db,"user",{
            uid:user.uid,
            name,
            authProvider:"local",
            email,

          }))
    }
    catch(error){
             console.log(error);
             alert(error);
             
    }
}

const login=async(email,password)=>{
              try {
                    await  signInWithEmailAndPassword(auth,email,password);


              } catch (error) {
                  console.log(error);
                  alert(error);
                  
              }
}

const logout =()=>{
    signOut(auth);
}

export{auth,db,login,signup,logout};