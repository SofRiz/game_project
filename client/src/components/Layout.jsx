import { Outlet } from "react-router"
import Footer from "./Footer/Footer"
import NavigationBar from "./NavigationBar"

const Layout = () => {
    return (
        <div>
            <NavigationBar />
            <Footer />
            <Outlet />
        </div>
    )
}

export default Layout
