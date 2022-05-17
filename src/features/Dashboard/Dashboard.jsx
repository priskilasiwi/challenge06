import '../Style/dashboard.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
    const navigate = useNavigate();
    const { dataLogin } = useSelector((state) => state.auth);

    useEffect(() => {
        if (dataLogin?.email !== 'admin@admin.com') navigate("/");
    }, []);
    return (
        <>
            <div className="container">
                <div className="sidebar" tabindex="-1">
                    <img src="image/Rectangle 63.svg" />
                    <a className='img-sidebar' style={{ marginTop: '30px' }}>
                        <img width='24px' height='24px' src="image/fi_home.svg" />
                        <h4>Dashboard</h4>
                    </a>
                    <a className='img-sidebar'>
                        <img width='24px' height='24px' src="image/fi_truck.svg" />
                        <h4>Cars</h4>
                    </a>
                </div>
                <div className='right-side'>
                    <div className="navbar">
                        <div className="navbar-left" style={{ flexGrow: "1"}}>
                            <img height= '34px' left= '24px' src="image/Rectangle-62.svg" />
                        </div>
                        <div className="hamburger" style={{ flexGrow: "1"}}>
                            <img src="image/fi_menu.svg" /> 
                        </div>
                        <div className="search" style={{ flexGrow: "8"}}>
                            <input className="input-search" placeholder="Search" />
                            <button className="btn-search"><b>Search</b></button>
                            <img width='143px' height='38px' src="image/Frame 33.png" />
                        </div>
                        
                             
                    </div>
                    <div className='content'>
                        <div className='side-left'>
                            <h4>CARS</h4>
                            <h4>List Cars</h4>
                        </div>
                        <div className='side-content'>
                            <h1>Welcome Admin</h1>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;