import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingFromApi } from '../redux/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greeting);

  const handleClick = () => {
    dispatch(fetchGreetingFromApi());
  };

  return (
    <>
      <h1>Greeting!</h1>
      <b>{greeting.message}</b>
      <br />
			<br />
			<br />
      <button type="button" onClick={handleClick}>Generate greeting</button>
    </>
  );
};

export default Greeting;
