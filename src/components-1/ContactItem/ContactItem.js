import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ButtonClose } from './ContactItem.styled';
import { FaWindowClose } from 'react-icons/fa';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      {name}: {phone}
      <ButtonClose type="button" onClick={handleDelete}>
        <FaWindowClose size={32} />
      </ButtonClose>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
