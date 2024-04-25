import { Outlet } from "react-router"
import NavigationBar from "./NavigationBar"

const Layout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    )
}

export default Layout
