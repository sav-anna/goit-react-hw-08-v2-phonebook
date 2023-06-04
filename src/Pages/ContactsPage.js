import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/Contact/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import css from './Page.module.css';
export const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    isLoggedIn && (
      <section className={css.contacts_section}>
        <div className={css.contacts_container}>
          <ContactForm />
          <Filter />
        </div>

        <div className={css.contacts}>
          <h2 className={css.title_contacts}>Contacts</h2>
          {contacts?.length > 0 ? (
            <ContactList />
          ) : (
            <p className="contacts_info">
              You don’t have any contacts yet...🥺
            </p>
          )}
        </div>
      </section>
    )
  );
};
