import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../Style/home.css";

const Home = () => {
    const data = useSelector((globalStore) => globalStore);
    const navigate = useNavigate();
    console.log(data);

    const CheckLogin = () => {
        if (data.auth.dataLogin === null || 
            data.auth.dataLogin?.email === "admin@admin.com")
            navigate("/");
    };

    useEffect(() => {
        CheckLogin();
    //eslint-disable-next-line
    },[]);
    return(
        <>
        <div className="navbar">
            <div className="navbar-left">
                <img alt="logo" width='100px' height='34px' src='image/logo.svg' />
            </div>
            <div className="navbar-right">
                <p>Our Services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
                <button className="btn-register">Register</button>
            </div>
        </div>
        <div className="box">
            <div className="box-left">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <button className="btn-mulai">Mulai Sewa Mobil</button>
            </div>
            <div className="box-right">
             <img alt="car" className= "img-1" src="./image/img_car.png" />
            </div>
        </div>
        <div className="footer">
            <div className='footer-left'>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className='footer-left'>
                <p>Our Services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className='footer-left'>
                <p>Connect With Us</p>
                <img alt="facebook" src='image/icon_facebook.svg' />
                <img alt="instagram"src='image/icon_instagram.svg' />
                <img alt="twitter" src='image/icon_twitter.svg' />
                <img alt="mail" src='image/icon_mail.svg' />
                <img alt="twitch" src='image/icon_twitch.svg' />
            </div>
            <div className='footer-left'>
                <p>Copyright Binar 2022</p>
                <img alt="logo" src='image/logo.svg' />
            </div>
        </div>

        </>
    )
   

}

export default Home;
