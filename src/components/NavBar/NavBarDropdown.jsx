import { Link } from "react-router-dom";

export default function NavBarDropdown () {
    const categories = ["Gatos", "Perros", "Peces"];

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown">Categorias</a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/category/All">Todos los productos</Link></li>
                    <hr className="mx-3"/>
                    {categories.map((element) => (<li key={element}><Link className="dropdown-item" to={`/category/${element}`}>{element}</Link></li>))}
                </ul>
            </li>
        </ul>
    );
}