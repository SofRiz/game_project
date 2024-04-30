import { Outlet } from "react-router"
import Footer from "./Footer/Footer"
import NavigationBar from "./NavigationBar"
import Logo3d from "./logo3d"

const Layout = () => {
    return (
        <div>
            <NavigationBar />
            <Logo3d />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
