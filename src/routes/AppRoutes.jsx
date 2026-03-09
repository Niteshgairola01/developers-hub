import { Route, Routes } from "react-router"
import Login from "../pages/auth/Login"
import Developers from "../pages/developer/Developers"
import Layout from "../components/layout/Layout"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<Layout />}>
                <Route path="/developers"
                    element={<Developers />}
                />
            </Route>
        </Routes>
    )
}

export default AppRoutes