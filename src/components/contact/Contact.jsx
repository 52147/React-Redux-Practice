
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions/dataActions';

export const Contact = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.data.message);
  
    useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  
    let displayMessage = '';
    if (typeof message === 'object' && message !== null) {
      displayMessage = JSON.stringify(message);
    } else {
      displayMessage = message;
    }
  
    return (
      <div>
        <h1>React-Redux Frontend</h1>
        <p>Message from the backend: {displayMessage}</p>
      </div>
    );
  };
  


