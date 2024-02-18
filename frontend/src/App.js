import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import User from "./pages/User/User";
import Error from "./pages/Error/Error";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default App;
