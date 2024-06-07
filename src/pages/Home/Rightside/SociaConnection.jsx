import { getAuth, signInWithPopup } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import app from "../../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const SociaConnection = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn =() =>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div className="p-4 space-y-3 mb-6"> 
            <h2 className="text-3xl">Login With</h2>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
            </div>
            <div>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>
        </div>
    );
};

export default SociaConnection;