import "../css/navbar.css"
const NavBar = () => {
    return ( <div className="navbar">
        <ul className="navlinks">
            <li className="navlink">Home</li>
            <li className="navlink">About</li>
            <li className="navlink">Services</li>
            <li className="navlink">Cases</li>
            <li className="navlink">Contact us</li>
            <li className="navlink"><button>Sign in</button></li>
        </ul>
    </div> );
}
 
export default NavBar;