import { useEffect } from 'react';
import { useAppDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import GlobalStyles from 'GlobalStyles';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container, WrapForms, FormTitle } from './App.styled';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyles />
      <WrapForms>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm />
        <Filter />
      </WrapForms>
      <ContactList />
    </Container>
  );
}
