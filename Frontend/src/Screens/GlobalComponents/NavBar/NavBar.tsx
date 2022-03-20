import React, { useEffect, useState } from 'react';
// Import useLocation hook
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

interface I_UserLocation{
    from:{pathname: string};
    prevState: null;
    location:any;
  }
const NavBar:React.FC<I_UserLocation>=()=> {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState<string | null>(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location.pathname]);

    return (
        <nav className='Navbar__NavbarContainer'>
            <div className="Navbar__NavbarWrapper">
                <h2 className="Navbar__NavbarLogo">FramUp</h2>
                <ul className="Navbar__NavbarSubItems">
                    <Link to="/"><li className={"Navbar__NavbarSubItem" + (url === "/" ? " Navbar__NavbarSubItemActive" : "")} >Popular</li></Link>
                    <Link to="/movies"><li className={"Navbar__NavbarSubItem" + (url === "/movies" ? " Navbar__NavbarSubItemActive" : "")}>Movies</li></Link>
                    <Link to="/series"><li className={"Navbar__NavbarSubItem" + (url === "/series" ? " Navbar__NavbarSubItemActive" : "")}>Series</li></Link>
                    <Link to="/kids"><li className={"Navbar__NavbarSubItem" + (url === "/kids" ? " Navbar__NavbarSubItemActive" : "")}>Kids</li></Link>
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;
