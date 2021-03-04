import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, Redirect  } from "react-router-dom";
import { SidebarData } from "../Sidebar/SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import {Button} from "react-bootstrap"
import Signin from "../../Views/signin";


function SignOut(){
    localStorage.clear();
}


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar" style={{display:"flex"}}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {/* <Button style={{background:"#000",border:"1px bold #000",backgroundColor:"#000"}}>Logout</Button> */}
          <Link to='/'> <Button variant="light" onClick={()=>{SignOut()}}>Logout</Button></Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
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
}

export default Navbar;
