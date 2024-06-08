// CurrentUserContext.js
import React, { createContext, useState } from 'react';

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const login = (username) => {
    setUsername(username);
  };

  const logout = () => {
    setUsername(null);
  };

  return (
    <CurrentUserContext.Provider value={{ username, login, logout }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
