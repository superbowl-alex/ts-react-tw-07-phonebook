import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const actions = [fetchContacts, addContact, deleteContact];
const getActions = (type: 'fulfilled' | 'pending' | 'rejected') => actions.map(action => action[type]);

export type Contact = {
  id: string;
  name: string;
  phone: string;
}

export type Data = {
  name: string;
  phone: string;
}

type ContactsState = {
  items: Contact[];
  isLoading: boolean;
  error: any;
}

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const fetchContactsSuccessReducer = (state: ContactsState, action: PayloadAction<Contact[]>) => {
  state.items = action.payload;
};

const addContactsSuccessReducer = (state: ContactsState, action: PayloadAction<Contact>) => {
  state.items?.push(action.payload);
};

const deleteContactsSuccessReducer = (state: ContactsState, action: PayloadAction<Contact>) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anySuccessReducer = (state: ContactsState) => {
  state.isLoading = false;
  state.error = null;
};

const anyPendingReducer = (state: ContactsState) => {
  state.isLoading = true;
};
const anyRejectReducer = (state: ContactsState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactsSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anySuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectReducer as any),
});

export const contactsReducer = contactsSlice.reducer;
