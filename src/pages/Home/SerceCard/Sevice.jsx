import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const Sevice = () => {
    const services = useLoaderData();
    const {id}=useParams();
    const service = services.find(service=> service.id==id)
    // console.log(service, id);
    const {  image, name, description, price, status, location, facilities } = service
    
    return (
        <div className="">
            <Helmet>
                <title>Reliance Express | Service Details</title>
            </Helmet>
                  <div className="card w-96 bg-base-100 shadow-xl max-w-6xl mx-auto mt-6">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3>Status: {status}</h3>
                    <p>Location: {location}</p>
                    {/* <h2>Facilities: {facilities}</h2> */}
                    <p>price: ${price.idx}</p>
                    <div className="card-actions ">
                       
                            <button className="btn btn-primary w-full">Booking</button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sevice;