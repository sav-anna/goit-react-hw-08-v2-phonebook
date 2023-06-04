import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { getUserName } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.user}>
      <p className={css.textUser}>{`You are logged in as: ${userName}`}</p>
      <button
        className={css.btnUser}
        type="button"
        title={`You are logged in as: ${userName}`}
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
}
