import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import User from "./pages/User/User";
import Error from "./pages/Error/Error";

function App() {
    const token = useSelector((state) => state.auth.token);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route
                path="/user"
                element={token ? <User /> : <Navigate to="/signin" />}
            />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default App;
