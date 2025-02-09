import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useState ,useEffect} from "react";
import { auth } from "../firebase/firebase";

const AuthContext= createContext();
 export const useAuth=()=>{
    return useContext(AuthContext)
}

const provider=new GoogleAuthProvider();

 export const AuthProvide=({children})=>{
    const [currentuser,setCurrentUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const registeruser=async(email,password)=>{
        return await createUserWithEmailAndPassword(auth,email,password);
    }
    const loginuser=async(email,password)=>{
        return await signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=async()=>{
       
        return await signInWithPopup(auth,provider);
    }
    const logout=()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { email, displayName, photoURL } = user;
            setCurrentUser({
              email,
              username: displayName,
              photo: photoURL,
            });
          } else {
            setCurrentUser(null);
          }
          setLoading(false);
        });
    
        return () => unsubscribe();
      }, []);
    
    
    
    const value={
        currentuser,
        loading,
        registeruser,
        loginuser,
        signInWithGoogle,
        logout
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}