import { FC } from 'react';

interface INotification {
  message: string;
}

const Notification: FC<INotification> = ({ message }) => {
  return <div className='w-full flex justify-start items-center mt-4 p-2 rounded-lg bg-lavender'>{message} </div>;
};

export default Notification;
