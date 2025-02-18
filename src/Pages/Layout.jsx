import { Outlet } from "react-router-dom";
import Header from "../Components/Headers";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";

function Layout() {
    return ( <>
        <Header />
        <Outlet />
        <Newsletter />
        <Footer />         
    </> );
}

export default Layout;