import EmergencyContact from "./Rightside/EmergencyContact";
import SociaConnection from "./Rightside/SociaConnection";


const Home = () => {
    return (
        <div className="grid grid-cols-1 md: grid-cols-4 gap-6">
            <div className="md:col-span-3 border">
                <h3>Our Services</h3>
            </div>
            <div className="border">
                <SociaConnection></SociaConnection>
                <br />
                <hr />
                <EmergencyContact></EmergencyContact>
            </div>
            
            
        </div>
    );
};

export default Home;