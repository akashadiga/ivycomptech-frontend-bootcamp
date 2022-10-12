const { Link } = require("react-router-dom");
const Navbar = () => {
 return (
 <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/about">About</Link>
 </nav>
 );
};
export default Navbar;