import React, { useState } from "react";
import * as Ant from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Navbar.css'
import { IconContext } from "react-icons";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <Ant.AiOutlineMenu onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="nav-toggle">
                        <Link to="#" className="menu-bars">
                            <Ant.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item) => {
                        return (
                            <li key={item.id} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
