import { Star, Hourglass, Plus } from "lucide-react";
import { NavLink } from "react-router";
import "../Styles/Navigation.css";

export function Navigation() {
    return (
    <nav className='site-nav'>
        <div className='site-nav-content'>
        <NavLink to="/" className="page-main">GŁÓWNA</NavLink>
        <NavLink to="/hot" className="page-hot">HOT</NavLink>
        <div className="site-portal-name">BOOMERZY.PL</div>
        <NavLink to="/poczekalnia" className="page-waiting"><Hourglass size={20} /></NavLink>
        <NavLink to="/dodaj" className="page-add"><Plus size={20} /></NavLink>
        <NavLink to="/favourites" className="page-fav"><Star size={20} /></NavLink>   
        </div>
    </nav>
    );
}