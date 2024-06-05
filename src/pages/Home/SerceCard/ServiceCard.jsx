

const ServiceCard = ({service}) => {
    const {image, name, description, price, status, location, facilities}= service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <h3>Status: {status}</h3>
    <p>Location: {location}</p>
    {/* <h2>Facilities: {facilities}</h2> */}
    <p>price: ${price.id}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;