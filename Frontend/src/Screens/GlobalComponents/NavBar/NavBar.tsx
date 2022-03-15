import React, { useEffect, useState } from 'react';
// Import useLocation hook
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

interface TUserLocation{
    from:{pathname: string};
    prevState: null;
    location:any;
  }
const NavBar:React.FC<TUserLocation>=()=> {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState<string | null>(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location.pathname]);

    return (
        <nav className='navbar-container'>
            <div className="navbar-wrapper">
                <h2 className="navbar-logo">FramUp</h2>
                <ul className="navbar-sub-items">
                    <Link to="/"><li className={"navbar-sub-item" + (url === "/" ? " active" : "")} >Popular</li></Link>
                    <Link to="/movies"><li className={"navbar-sub-item" + (url === "/movies" ? " active" : "")}>Movies</li></Link>
                    <Link to="/series"><li className={"navbar-sub-item" + (url === "/series" ? " active" : "")}>Series</li></Link>
                    <Link to="/kids"><li className={"navbar-sub-item" + (url === "/kids" ? " active" : "")}>Kids</li></Link>
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;

    // <div>
    //     <div className='navbar'>
    //         <h2 className='main_item'>FrameUp</h2>
    //         <div className='sub_items'>
    //             <h3 className='item'><span>Popular</span></h3>
    //             <h3 className='item'><span>Movies</span></h3>
    //             <h3 className='item'><span>Series</span></h3>
    //             <h3 className='item'><span>Kids</span></h3>
    //         </div>
    //     </div>
    // </div >