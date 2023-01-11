import { Link } from "react-router-dom";

export default function NavBarLogo(){
    return(
        <Link to="/">
            <img src="/img/logo.png" width="auto" height="36px" className="me-2" alt="logo" />
        </Link>
    );
}