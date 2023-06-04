import { NavLink } from 'react-router-dom';
import '../index.css';

export default function Navigation() {
  return (
    <nav className="header__nav">
      <NavLink className="header__link" to="/register">
        Register
      </NavLink>
      <NavLink className="header__link" to="/login">
        Login
      </NavLink>
    </nav>
  );
}
