import React, { useEffect } from 'react';
import './index.css';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  

  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;