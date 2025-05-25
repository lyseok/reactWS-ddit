import { Outlet } from 'react-router-dom'
import { useReducer } from 'react';
import { initState, PeopleContext, peopleReducer} from '../../context/peopleContext';

function People() {
  const [peopleState, peopleDispatch] = useReducer(peopleReducer, initState);

  return (
    <PeopleContext.Provider value={{ peopleState, peopleDispatch }}>
      <h1 className='text-4xl font-bold mb-[20px]'>People</h1>
      <Outlet />
    </PeopleContext.Provider>
  )
}

export default People