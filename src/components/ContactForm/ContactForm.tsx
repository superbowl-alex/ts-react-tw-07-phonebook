import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers  } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { Contact, Data } from '../../redux/contactsSlice';
import Notiflix from 'notiflix';

interface IFormError {
  name: string;
}

Notiflix.Notify.init({
  width: '500px',
  position: 'center-top',
  closeButton: true,
  fontFamily: 'Comic Sans MS',
  fontSize: '24px',
  warning: {
    background: 'rgb(255, 240, 245)',
    textColor: 'rgb(40, 70, 219)',
    notiflixIconColor: 'rgb(205, 92, 92)',
  },
});

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces without spaces at the beginning and end of the name'
    )
    .required('This field is required'),
    phone: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This field is required'),
});

const FormError: FC<IFormError> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <div className='absolute top-0 right-0 text-sm w-[200px] p-1 text-blue bg-lavender rounded-lg border-2 border-chestnut'>{message}</div>;
      }}
    />
  );
};

const ContactForm: FC = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);

  const handleSubmit = (values: Data, { resetForm }: FormikHelpers<Data>) => {
    const findContactByName = (array: Contact[], newName: string) => {
      return array?.find(({ name }) => name.toLowerCase() === newName);
    };

    const { name } = values;
    const normalizedName = name.toLowerCase();

    if (findContactByName(contacts, normalizedName)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className='flex flex-col items-start justify-center w-[450px] mb-8 rounded-lg border-4 border-chestnut bg-lavender'>
        <label className='w-full flex flex-col p-2 gap-2'>
          Name
          <div className='w-full relative'>
            <Field className='w-full py-2 px-4 rounded-lg border-2 border-blue text-inherit outline-none hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0' type="text" name="name" autoComplete="off" />
            <FormError name="name" />
          </div>
        </label>
        <label className='w-full flex flex-col p-2 gap-2'>
          Number
          <div className='w-full relative'>
            <Field className='w-full py-2 px-4 rounded-lg border-2 border-blue text-inherit outline-none hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0' type="text" name="phone" autoComplete="off"  />
            <FormError name="phone" />
          </div>
        </label>
        <button className='my-4 mx-auto p-2 text-white bg-chestnut border-0 rounded-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-md focus:scale-[1.05] focus:shadow-md' type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
