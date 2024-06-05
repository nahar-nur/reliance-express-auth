import { FaHeadphones } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const EmergencyContact = () => {
    return (
        <div className="p-4 space-y-3">
            <h3 className="text-3xl">Available Us</h3>
            <div className="p-4 space-y-3">
                <button className="btn btn-outline w-full">
                    <FaHeadphones />
                    Call Us Anytime 
                    <p>92 34510057</p>
                </button>
            </div>
            <div className="p-4 space-y-3 mt-4">
                <button className="btn btn-outline w-full">
                <FaRegClock />
                Opening Time 
                <p>8 am to 8 pm</p>
                </button>
            </div>
            <div className="p-4 space-y-3">
                <button className="btn btn-outline w-full ">
                <CiMail />
                Email Us 
                <p>info@relianceExpress.com</p>
                </button>
            </div>
        </div>
    );
};

export default EmergencyContact;