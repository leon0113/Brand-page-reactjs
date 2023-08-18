import './Navbar.css'

const Navbar = () => {
    return (
        <>
            {/* nav part  */}
            <nav>
                {/* logo  */}
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="logo" />
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
        </>
    );
};

export default Navbar;