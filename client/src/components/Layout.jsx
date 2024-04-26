import { Outlet } from "react-router"
import Footer from "./Footer/Footer"
import NavigationBar from "./NavigationBar"

const Layout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
