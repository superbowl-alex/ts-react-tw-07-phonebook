import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const actions = [fetchContacts, addContact, deleteContact];

const getActions = type => actions.map(action => action[type]);

const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addContactsSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactsSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anySuccessReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactsSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anySuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectReducer),
});

export const contactsReducer = contactsSlice.reducer;
