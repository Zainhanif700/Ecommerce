import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/components/Admin";

function AdminRouters() {
    return (
            <Routes>
                <Route path='/*' element={<Admin />}></Route>
            </Routes>
    )
}

export default AdminRouters;
