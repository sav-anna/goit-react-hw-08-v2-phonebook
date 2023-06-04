import { combineReducers, createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contacts = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, payload];
    },

    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const filter = createSlice({
  name: 'filter',
  initialState: { query: '' },
  reducers: {
    filterContacts: (state, { payload }) => {
      state.query = payload;
    },
  },
});

export const contactsReducer = contacts.reducer;
export const filterReducer = filter.reducer;
export const { filterContacts } = filter.actions;

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
