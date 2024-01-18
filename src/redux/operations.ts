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

export const fetchContacts = createAsyncThunk<Contact[], void, { rejectValue: string }>(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<FetchContactsResponse>('/contacts');
      return response.data.data;
    } catch (e: any) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);

export const addContact = createAsyncThunk<Contact, Data, { rejectValue: string }>(
  'contacts/addContact',
  async (values: Data, thunkAPI) => {
    try {
      const { name, number } = values;
      console.log("values", values)
      const response = await axios.post<AddContactResponse>('/contacts', {
        name: name,
        phone: number,
      });
      console.log("response", response)

      return response.data.data;
    } catch (e: any) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, string, { rejectValue: string }>(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete<DeleteContactResponse>(`/contacts/${contactId}`);
      return response.data.data;
    } catch (e: any) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);
