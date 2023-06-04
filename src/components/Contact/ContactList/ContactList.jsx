import css from './ContactList.module.css';
import ContactItem from '../ContactItems';
import { useSelector } from 'react-redux';
import {
  getContactsIsLoading,
  getVisibleContacts,
} from '../../../redux/contacts/selectors';
import SyncLoader from 'react-spinners/SyncLoader';

export const ContactList = () => {
  const isLoading = useSelector(getContactsIsLoading);
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={css.contactList}>
      {isLoading ? (
        <div>
          <SyncLoader
            color="#36d7b7"
            size={20}
            cssOverride={{
              position: 'fixed',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              width: '100vw',
              margin: 'auto',
              overflow: 'show',
              zIndex: '999',
            }}
          />
        </div>
      ) : (
        visibleContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      )}
    </ul>
  );
};
export default ContactList;
