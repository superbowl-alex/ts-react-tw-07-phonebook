import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Contact, Data } from '../redux/contactsSlice';


interface FetchContactsResponse {
  data: Contact[];
}

interface AddContactResponse {
  data: Contact;
}

interface DeleteContactResponse {
  data: Contact;
}

axios.defaults.baseURL = 'https://636a41b9b10125b78fd559da.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<FetchContactsResponse>('/contacts');
      return (response.data) as FetchContactsResponse;
    } catch (e: any) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (values: Data, thunkAPI) => {
    try {
      const { name, phone } = values;
      const response = await axios.post<AddContactResponse>('/contacts', {
        name: name,
        phone: phone,
      });
      return (response.data) as AddContactResponse;
    } catch (e: any) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId: string, thunkAPI) => {
    try {
      const response = await axios.delete<DeleteContactResponse>(`/contacts/${contactId}`);
      return (response.data) as DeleteContactResponse;
    } catch (e: any) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);
