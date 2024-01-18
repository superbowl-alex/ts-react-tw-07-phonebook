import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deleteContact } from '../../redux/operations';
import { FaWindowClose } from 'react-icons/fa';

interface IContactItem {
  id: string;
  name: string;
  number: string;
}

const ContactItem: FC<IContactItem> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className='w-full flex justify-between items-center p-2 rounded-lg bg-lavender transition-all duration-300 hover:scale-[1.01] hover:shadow-md focus:scale-[1.01] focus:shadow-md'>
      {name}: {number}
      <button className='flex items-center border-0 p-0 mr-2 transition-all duration-300 hover:scale-[1.1] focus:scale-[1.1]' type="button" onClick={handleDelete}>
        <FaWindowClose size={32} color={'rgb(205, 92, 92)'}/>
      </button>
    </li>
  );
};

export default ContactItem;
