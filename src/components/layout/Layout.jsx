import { Outlet } from "react-router"
import MainContent from "./MainContent"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 w-10">
                <Navbar />
                <MainContent>
                    <Outlet />
                </MainContent>
            </div>
        </div>
    )
}

export default Layout