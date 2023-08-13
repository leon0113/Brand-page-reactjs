import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            {/* nav part  */}
            <nav>
                {/* logo  */}
                <div className="logo">
                    <img src="../src/assets/brand_logo.png" alt="logo" />
                </div>
                {/* list */}
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                {/* login btn  */}
                <button>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;