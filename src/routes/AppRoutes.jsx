import { Route, Routes } from "react-router"
import Login from "../pages/auth/Login"
import Developers from "../pages/developer/Developers"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/developers" element={<Developers />} />
        </Routes>
    )
}

export default AppRoutes