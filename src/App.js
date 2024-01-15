import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ReactDOM from 'react-dom';
import UserList from './UserList';
import useUsers from './useUsers';

ReactDOM.render(
  <React.StrictMode>
     <UserList />
  </React.StrictMode>,
  document.getElementById('root')
 );

function App() {
 const [listOfUsers, setListOfUsers] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      setListOfUsers(result.data);
    };

    fetchData();
 }, []);
 const { users, isLoading, error } = useUsers();

 if (isLoading) {
    return <div>Loading...</div>;
 }

 if (error) {
    return <div>Error: {error.message}</div>;
 }
 return (
  <>
    <div className="App">
      <h1>List of Users</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
     <div className="App">
     <h1>User List</h1>
     <UserList users={users} />
   </div>
   </>
 );
}

export default App;