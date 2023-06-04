import { useDispatch } from 'react-redux';
import css from './Page.module.css';
import { login } from 'redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    if (login.fulfilled) {
      return <Navigate to="/contacts" replace />;
      // Navigate('/contacts');
    } else {
      toast.warn('Please check your email address or password');
    }
    form.reset();
  };

  return (
    <>
      <h2 className={css.title}>Login to your account</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container}>
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <input
            className={css.input}
            id="email"
            type="email"
            name="email"
            placeholder=" "
            required
          ></input>
          <label className={css.label} htmlFor="password">
            Password
          </label>
          <input
            className={css.input}
            id="password"
            name="password"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          ></input>
        </div>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </form>
    </>
  );
};
