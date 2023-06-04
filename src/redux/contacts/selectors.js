import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getContactsIsLoading = state => state.contacts.isLoading;
// export const getContactsError = state => state.contacts.error;
export const getFilter = state => state.filter.query;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.includes(filter)
    );
  }
);
