import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchContacts } from '../../redux/operations';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='mx-auto flex justify-center items-start gap-16 p-8 text-2xl text-blue'>
      <div className='w-[600px] flex flex-col justify-center items-center p-4 shadow-xl rounded-lg bg-lightBlue'>
        <h1 className='mb-4 text-6xl text-deepBlue tracking-[3px] font-bold'>Phonebook</h1>
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </div>
  );
}

export default App;