import css from './Page.module.css';
export const HomePage = () => {
  return (
    <>
      <h2 className={css.title}>
        Welcome to my Contacts App. Please sign up or log in to get started 😉
      </h2>
      <img
        className={css.image}
        src="https://img.freepik.com/premium-photo/website-and-internet-contact-icons-with-an-open-book_192941-901.jpg?w=996"
        alt="contacts"
      />
    </>
  );
};
