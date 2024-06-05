import ErrorPic from '../../assets/images/icon/404.gif'
const Error = () => {
    return (
        <div className='mx-auto my-10'>
            <h3 className='text-3xl text-center text-red-600'>Opps...!!!!</h3>
            <img className='text-center' src={ErrorPic} alt="" />
        </div>
    );
};

export default Error;