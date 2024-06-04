import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/shared/Navbar/Navbar";
import Footer from "../../pages/Home/shared/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;