import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./features/Login";
import Dashboard from "./features/Dashboard/Dashboard";
import Home from "./features/Home/Home";
import Register from './features/Register/Register';

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteApp;