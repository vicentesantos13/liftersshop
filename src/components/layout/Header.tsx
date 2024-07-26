import { Search, ShoppingBag } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark header-custom ">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Lifters Shop
                </a>
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Shop
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">
                                Stories
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="text-white ms-4 navbar-collapse">
                    <Search className="text-white"/>
                    <input type="text" className="input-custom ms-2" placeholder="Search"/>
                </div>
                <div className="d-flex">
                    <div className="text-white d-flex mt-1">
                        <ShoppingBag />
                        <div className="ms-1">3</div>
                    </div>
                    <a href="/" className="nav-link text-white ms-4 mt-1">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
