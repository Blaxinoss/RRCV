
import React from 'react';
import { Link, useLocation } from 'react-router-dom';



// Main side bar that will be used all over the Application
export default function Sidebar() {
    const location = useLocation(); // Get the current location

    return (
        <div className="SideBar">
            <div className="logo">Ramy Rent

            </div>

            {/* based on the location we are in now add the class 
            active which will add the green backgorund to the 
            selected section */}
            <ul className="SideBarUl">
                <li className={`SideBarLi ${location.pathname === '/dashboard' ? 'active' : ''} `}>
                    <i className="fas fa-gear SideBarIcon"></i>
                    <Link style={{ color: "red" }} to='/home'>Client Side</Link>
                </li>
                <li className={`SideBarLi ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                    <i className="fas fa-clipboard-list SideBarIcon"></i>
                    <Link to='/'>Dashboard</Link>
                </li>
                <li className={`SideBarLi ${location.pathname === '/dashboard/cars' ? 'active' : ''}`}>
                    <i className="fas fa-car SideBarIcon"></i>
                    <Link to='/cars'>Cars</Link>
                </li>
                <li className={`SideBarLi ${location.pathname === '/dashboard/rents' ? 'active' : ''}`}>
                    <i className="fas fa-folder SideBarIcon"></i>
                    <Link to='/rents'>Rents</Link>
                </li>
                <li className={`SideBarLi ${location.pathname === '/dashboard/maintenance' ? 'active' : ''}`}>
                    <i className="fas fa-tools SideBarIcon"></i>
                    <Link to='/maintenance'>Maintain</Link>
                </li>
                <li className={`SideBarLi ${location.pathname === '/dashboard/orders' ? 'active' : ''}`}>
                    <i className="fas fa-box SideBarIcon"></i>
                    <Link to='/orders'>

                        Orders
                    </Link>
                </li>
            </ul>
        </div>
    );

}
