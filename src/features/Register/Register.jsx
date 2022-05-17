import "../Style/register.css";
import { LoginGoogle, RegistUser } from "../../config/redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { dataLogin } = useSelector((state) => state.auth);
    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLoginGoogle = async () => {
        const data = await dispatch(LoginGoogle());
        if(data) navigate("/home");
    };

    const handleRegistUser = () => {
        dispatch(RegistUser(email,password))
        setTimeout(() => {
            alert("Registrasi Berhasil")
            navigate ("/");
        },1500)
    }

    useEffect(() => {
        if(dataLogin?.email === "admin@admin.com") navigate("/dashboard");
    //eslint-disable-next-line
    },[]);

    return (
        <>
        <div className= "bg-login">
         <div className="rtl-form">
            <form method = "POST">
                <div className = "box-2">
                    <img className = "img1" alt="logo" src="image/Rectangle-62.svg" />
                    <h1 className="heading">Create New Account</h1>
                    <div className = "mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder = "Contoh: johndee@gmail.com" className="rtl-form-input" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder = "Enter your password" className="rtl-form-input" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className = "row mt-4 ">
                    <p>Already Have an Account?<a href='/'>Sign Up</a></p>
                    <button type="button" className="btn-login" onClick={() => handleRegistUser()}>Register</button>
                    </div>
                    <div className = "row mt-4 ">
                    <button type="button" className="btn-google" onClick={() => handleLoginGoogle()}>Log In Google</button>
                    </div>
                </div>
            </form>
         </div>
         </div>
        </>

    );
}

export default Register;