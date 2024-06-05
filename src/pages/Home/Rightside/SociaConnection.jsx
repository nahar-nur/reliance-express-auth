import { FaGithub, FaGoogle } from "react-icons/fa6";

const SociaConnection = () => {
    return (
        <div className="p-4 space-y-3 mb-6"> 
            <h2 className="text-3xl">Login With</h2>
            <div>
                <button className="btn btn-outline w-full">
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