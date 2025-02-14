import { Outlet } from "react-router-dom";
import Header from "../Components/Headers";

function Layout() {
    return ( <>
        <Header />
        <Outlet />
    </> );
}

export default Layout;