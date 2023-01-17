import React, { useEffect, useState } from 'react';
import './index.css';
import { Success } from './components/Success';
import { Users } from './components/Users/Users';

function App() {
  // Збереження дани юзерів
  const [users, setUsers] = useState([]);

  // Показати skeleton до загрузки юзерів
  const [isLoading, setLoading] = useState(true);

  // Пошуковий input
  const [searchValue, setSearchValue] = useState('');

  // Відправлення запрошення

  const [invites, setInvites] = useState([]);



  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('Помилка при отриманні користувачів');
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickIvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id)); //якщо id ' - виключити.
    } else {
      setInvites(prev => [...prev, id]); // якщо id нема - додати в масив.
    }
  };

  return (
    <div className="App">
      <Users
        items={users}
        isLoading={isLoading}
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        invites={invites}
        onClickIvite={onClickIvite}
      />
      {/* <Success /> */}
    </div>
  );
}

export default App;