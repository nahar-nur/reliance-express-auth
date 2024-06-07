
import { Helmet } from "react-helmet-async";
 import truckPic from '../../../assets/images/icon/truck.jpg'


const AboutUs = () => {
    return (
        <div className="mt-6 mb-6">
            <Helmet><title>Reliance Express | About Us</title></Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/jGZ827z/truck.jpg)' }} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Reliance Express</h1>
                        <p className="mb-5">Reliance Express Warehouse is a leading logistics and warehousing company that specializes in providing comprehensive storage and distribution solutions. With a strong presence across multiple regions, Reliance Express Warehouse is dedicated to optimizing supply chain efficiency for businesses of all sizes.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={truckPic} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Mission and Vission!</h1>
                        <p className="py-6">Mission: To provide innovative, reliable, and efficient warehousing and logistics solutions that empower businesses to achieve their operational goals.</p>
                        <p className="py-6">Vision: To be the preferred logistics partner globally, known for excellence, sustainability, and customer satisfaction.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
