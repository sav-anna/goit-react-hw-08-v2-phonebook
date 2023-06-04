import { Link } from 'react-router-dom';
import '../index.css';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isloggedIn = useSelector(getIsLoggedIn);
  return (
    <nav className="header__nav">
      {isloggedIn ? (
        <Link to="/contacts" className="header__menu">
          Contacts
        </Link>
      ) : (
        <Link to="/" className="header__menu">
          Home
        </Link>
      )}
    </nav>
  );
}
