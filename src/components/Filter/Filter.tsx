import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const currentFilter: string = e.currentTarget.value;
    dispatch(changeFilter(currentFilter));
  };

  return (
    <label className='flex flex-col items-start justify-center w-[450px] gap-2 p-2 pb-4 rounded-lg bg-lavender border-4 border-chestnut'>
      Find contacts by name
      <input className='w-full py-2 px-4 rounded-lg border-2 border-blue outline-none hover:outline-[3] hover:outline-blue hover:outline-offset-0 focus:outline-[3] focus:outline-blue focus:outline-offset-0'
        type="text"
        name="filter"
        value={filter.value}
        onChange={handleFilterChange}
      ></input>
    </label>
  );
};

export default Filter;
