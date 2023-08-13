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
                    <li href='#'>Menu</li>
                    <li href='#'>Location</li>
                    <li href='#'>About</li>
                    <li href='#'>Contact</li>
                </ul>
                {/* login btn  */}
                <button>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;