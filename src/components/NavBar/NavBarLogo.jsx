import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBarLogo(){
    return(
        <Link to="/">
            <img src="/img/logo.png" width="auto" height="36px" className="navbar-logo me-2" alt="logo" />
        </Link>
    );
}