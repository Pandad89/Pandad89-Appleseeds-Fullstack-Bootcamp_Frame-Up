import './NavBar.css';
// import '../../../Style/Colors.css'

function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <h2 className='main_item'>FrameUp</h2>
                <div className='sub_items'>
                    <h3 className='item'><span>Popular</span></h3>
                    <h3 className='item'><span>Movies</span></h3>
                    <h3 className='item'><span>Series</span></h3>
                    <h3 className='item'><span>Kids</span></h3>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
