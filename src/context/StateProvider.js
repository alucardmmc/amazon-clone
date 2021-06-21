import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap the app and provide the dataLayer
export const StateProvider = (props) => {
  return (
    <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
      {props.children}
    </StateContext.Provider>
  )
};

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);