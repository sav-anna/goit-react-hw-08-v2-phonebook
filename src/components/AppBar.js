import { useSelector } from 'react-redux';
import '../index.css';
import UserNavigation from './UserNavigation';
import UserMenu from './UserMenu/UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

import '../index.css';
import Navigation from './Navigation';

export default function AppBar() {
  const isloggedIn = useSelector(getIsLoggedIn);

  return (
    <header className="header">
      <Navigation />
      {isloggedIn ? <UserMenu /> : <UserNavigation />}
    </header>
  );
}
