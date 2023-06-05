import { useDispatch } from 'react-redux';
import css from './Page.module.css';
import { register } from 'redux/auth/auth-operations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <>
      <h2 className={css.title}>Sign up for an account</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.container}>
          <label className={css.label} htmlFor="name">
            User name
          </label>
          <input
            className={css.input}
            id="name"
            type="text"
            name="name"
            placeholder=" "
            minLength="6"
            maxLength="20"
            pattern="^[A-Za-z]+\s[A-Za-z]+$"
            title="Enter first and last name, only Latin letters"
            required
          ></input>
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
            required
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
