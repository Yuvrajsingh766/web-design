import { Route, Routes } from "react-router-dom";
import Adminrouter from "./Adminrouter";
import Adminhome from "./Adminhome";
import Adminsetting from "./Adminsetting";

function App() {
    return (
        <div>
            <>

                <Adminrouter />
                <Routes>
                    <Route path="/admin" element={<Adminhome />} />
                    <Route path="/admin/settings" element={<Adminsetting />} />
                </Routes >
            </>
        </div>
    )
}

export default App
