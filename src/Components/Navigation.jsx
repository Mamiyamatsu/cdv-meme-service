import { Star, Hourglass, Plus } from "lucide-react";
import { NavLink } from "react-router";
import "../Styles/Navigation.css";

export function Navigation() {
    return (
    <nav className='site-nav'>
        <div className='site-nav-content'>
            <NavLink to="/" className="site-nav-link">GŁÓWNA</NavLink>
            <NavLink to="/hot" className="site-nav-link">HOT</NavLink>
            <div className="site-portal-name">BOOMERZY.PL</div>
            <NavLink to="/poczekalnia" className="site-nav-link"><Hourglass size={20} /></NavLink>
            <NavLink to="/dodaj" className="site-nav-link"><Plus size={20} /></NavLink>
            <NavLink to="/favourites" className="site-nav-link"><Star size={20} /></NavLink>     
        </div>
    </nav>
    );
}