import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { filterContacts } from '../../redux/contacts/reducers';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__label}>
        Find contacts by name or phone number
        <input
          className={css.filter__input}
          type="text"
          name="filter"
          placeholder="Type name or phone"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={onChange}
        ></input>
      </label>
      <img
        className={css.img}
        src="https://cdn-icons-png.flaticon.com/512/1195/1195412.png?w=740&t=st=1685868240~exp=1685868840~hmac=b907f7cd08f7cedc5e99767328a1ef6409c751d5b42969f4a75445763b99d8c8"
        alt="book"
      />
    </div>
  );
};

export default Filter;
