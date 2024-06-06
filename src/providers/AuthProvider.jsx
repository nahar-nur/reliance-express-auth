import { useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect } from "react";
import { signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword( auth,email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the onAuthStateChanged', currentUser);
            setUser(currentUser)
        })
        return unSubscribe()
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;