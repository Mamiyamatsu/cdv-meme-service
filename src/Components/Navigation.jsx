import { Star, Hourglass, Plus } from "lucide-react";
import { NavLink } from "react-router";
import "../Styles/Navigation.css";

export function Navigation() {
    return (
    <nav className='site-nav'>
        <div className='site-nav-content'>
            <NavLink to="/" className={({isActive}) => isActive ? 'site-active page-main-active' : 'site-nav-link'}>GŁÓWNA</NavLink>
            <NavLink to="/hot" className={({isActive}) => isActive ? 'site-active page-hot-active' : 'site-nav-link'}>HOT</NavLink>
            <div className="site-portal-name">BOOMERZY.PL</div>
            <NavLink to="/poczekalnia" className={({isActive}) => isActive ? 'site-active page-waiting-active' : 'site-nav-link'}><Hourglass size={20} /></NavLink>
            <NavLink to="/dodaj" className={({isActive}) => isActive ? 'site-active page-add-active' : 'site-nav-link'}><Plus size={20} /></NavLink>
            <NavLink to="/favourites" className={({isActive}) => isActive ? 'site-active page-fav-active' : 'site-nav-link'}><Star size={20} /></NavLink>
        
        </div>
    </nav>
    );
}