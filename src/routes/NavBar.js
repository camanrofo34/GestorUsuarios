import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return  (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><Link to='/'><a>Usuarios</a></Link></li>
            </ul>
        </nav>
    )
}