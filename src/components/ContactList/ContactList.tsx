import { FC } from 'react';
import ContactItem from '../ContactItem';
import Notification from '../Notification';
import Loader from '../Loader';

import { useAppSelector } from '../../redux/hooks';
import { selectVisibleContacts, selectPendingStatus } from '../../redux/selectors';

const ContactList: FC = () => {
  const contacts = useAppSelector(selectVisibleContacts);
  const pending = useAppSelector(selectPendingStatus);

  return (
    <div className='w-[500px] p-4 flex flex-col justify-center items-center shadow-xl rounded-lg bg-lightBlue'>
      <h2 className='mb-4 text-5xl font-bold text-deepBlue'>Contacts</h2>
      {pending ? (
        <Loader />
      ) : contacts?.length > 0 ? (
        <ul className='w-full p-4 flex flex-col justify-center items-center gap-4'>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      ) : (
        <Notification message="There is no contact in Phonebook" />
      )}
    </div>
  );
};

export default ContactList;
