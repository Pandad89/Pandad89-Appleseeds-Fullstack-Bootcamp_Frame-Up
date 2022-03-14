import './NavBar.css';
// import '../../../Style/Colors.css'

function Navbar() {
    return (
        <nav className='navbar-container'>
            <div className="navbar-wrapper">
                <h2 className="navbar-logo">FramUp</h2>
                <ul className="navbar-sub-items">
                    <li className="navbar-sub-item">Popular</li>
                    <li className="navbar-sub-item">Movies</li>
                    <li className="navbar-sub-item">Series</li>
                    <li className="navbar-sub-item">Kids</li>
                </ul>
            </div>

        </nav>
        );
    };
    
    export default Navbar;
    
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