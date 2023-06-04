import { useDispatch } from 'react-redux';
import css from './Page.module.css';
// import { useState } from 'react';
import { register } from 'redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    if (register.fulfilled) {
      return <Navigate to="/contacts" replace />;
    } else {
      toast.warn('Please check your email address or password');
    }

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
            // value={name}
            placeholder=" "
            minLength="6"
            maxLength="20"
            pattern="^[A-Za-z]+\s[A-Za-z]+$"
            title="Enter first and last name, only Latin letters"
            // onChange={handleChange}
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
            // value={email}
            placeholder=" "
            // onChange={handleChange}
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
            // value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // onChange={handleChange}
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
