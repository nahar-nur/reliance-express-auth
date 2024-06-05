import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import EmergencyContact from "./Rightside/EmergencyContact";
import SociaConnection from "./Rightside/SociaConnection";
import ServiceCard from "./SerceCard/ServiceCard"



const Home = () => {
    const services = useLoaderData()
    // console.log(services);
    return (
        
        <div >
            <Banner></Banner>
            <h3 className="text-3xl text-center mt-6">Our Services</h3>
            <div className="grid grid-cols-1 md: grid-cols-4 gap-6 mt-6">
                
            <div className="md:col-span-3 border">
                <div className="grid grid-cols-2 ">

                {
                    services.map(service=>
                    <ServiceCard key={service.id}
                    service={service}>

                    </ServiceCard>)
                }
                </div>
            </div>
            <div className="border">
                <SociaConnection></SociaConnection>
                <br />
                <hr />
                <EmergencyContact></EmergencyContact>
            </div>
            
            </div>
            
        </div>
    );
};

export default Home;