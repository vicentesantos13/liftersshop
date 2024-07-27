import { Search, ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useShop } from "../../context/context";

const Header: React.FC = () => {
    const {setShowCart,showCart, cartProducts} = useShop();
    const [countCart,setCountCart] = useState<number>(0)
    
    useEffect(() => {
        setCountCart(cartProducts.length)
    }, [cartProducts]);
    
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
                    <div className="text-white d-flex mt-1" onClick={()=>setShowCart(!showCart)}>
                        <ShoppingBag />
                        <div className="ms-1">{countCart !==0 && <div>{countCart}</div>}</div>
                    </div>
                    <a href="/" className="nav-link text-white ms-4 mt-1">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
