import CartWidget from "./CartWidget";
import NavBarDropdown from "./NavBarDropdown";
import NavBarLogo from "./NavBarLogo";
import NavBarSearch from "./NavBarSearch";

export default function NavBar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary p-3 mb-1 sticky-top shadow-sm">
            <div className="container">
                <NavBarLogo/>

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbar">
                    <NavBarDropdown/>
                    <NavBarSearch/>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}