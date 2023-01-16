import React, { useEffect, useState } from 'react';
import './index.css';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  //збереження дани юзерів
  const [users, setUsers] = useState([]);

  //показати skeleton до загрузки юзерів
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      }).catch((err) => {
        console.warn(err);
        alert('Помилка при отриманні користувачів');
      }).finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;