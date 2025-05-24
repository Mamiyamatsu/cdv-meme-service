import { NavLink } from "react-router";

export function Navigation() {
    return (
    <nav className='navigation'>
        <ul>
            <li><NavLink to="/">Główna</NavLink></li>
            <li><NavLink to="/hot">Hot</NavLink></li>
            <li><NavLink to="/poczekalnia">Poczekalnia</NavLink></li>
        </ul>
    </nav>
    );
}