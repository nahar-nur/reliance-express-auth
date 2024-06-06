import { useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"


 export const AuthContext = createContext(null);
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo={
        user,
        createUser
    }
    return (
       
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        
    );
};

export default AuthProvider;