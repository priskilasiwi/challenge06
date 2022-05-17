import "./Style/login.css";
import { LoginGoogle, LoginAdmin } from "../config/redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { dataLogin } = useSelector((state) => state.auth);
    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLoginGoogle = async () => {
        const data = await dispatch(LoginGoogle());
        if(data) navigate("/home");
    };

    const handleLoginEmail = () => {
        dispatch(LoginAdmin(email,password));
        setTimeout(() => {
            navigate("/dashboard");
        }, 1500);
    };

    useEffect(() => {
        if(dataLogin?.email === "admin@admin.com") navigate("/dashboard");
        if(dataLogin?.email !== null&& dataLogin !== "admin@admin.com") navigate ("/home");
    });

    return (
        <>
        <div className= "bg-login">
         <div className="rtl-form">
            <form method = "POST">
                <div className = "box-2">
                    <img alt="logo" className = "img1" src="image/Rectangle-62.svg" />
                    <h1 className="heading"> Welcome, Admin BCR</h1>
                    <div className = "mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder = "Contoh: johndee@gmail.com" className="rtl-form-input" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder = "Enter your password" className="rtl-form-input" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className = "row mt-4 ">
                    <button type="button" className="btn-login" onClick={() => handleLoginEmail()}>Sign In</button>
                    </div>
                    <div className = "row mt-4 ">
                    <button type="button" className="btn-google" onClick={() => handleLoginGoogle()}>Log In Google</button>
                    </div>
                    <div className="regist">
                        <p>Belum Mempunyai Akun?<a href={"/register"}>Register</a></p>
                    </div>
                </div>
            </form>
         </div>
         </div>
        </>

    );
}

export default Login;