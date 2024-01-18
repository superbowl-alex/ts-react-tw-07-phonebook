import React from 'react';
import ContactItem from '../ContactItem';
import Notification from '../Notification';
import { useSelector } from 'react-redux';
import { selectVisibleContacts, selectPendingStatus } from 'redux/selectors';
import { List, WrapList, ListTitle, Item } from './ContactList.styled';
import Loader from 'components/Loader';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const pending = useSelector(selectPendingStatus);

  return (
    <WrapList>
      <ListTitle>Contacts</ListTitle>
      {pending ? (
        <Loader />
      ) : contacts.length > 0 ? (
        <List>
          {contacts.map(({ id, name, phone }) => (
            <Item key={id}>
              <ContactItem id={id} name={name} phone={phone} />
            </Item>
          ))}
        </List>
      ) : (
        <Notification message="There is no contact in Phonebook" />
      )}
    </WrapList>
  );
};

export default ContactList;
