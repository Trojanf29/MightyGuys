import { Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3" light>
            <ul className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">About Us</NavLink>
            </NavItem>
            </ul>
            <ul className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Menu</NavLink>
            </NavItem>
            </ul>
            <ul className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Contact</NavLink>
            </NavItem>
            </ul>
        </Navbar>
    )
}