import React from 'react';
import useUsers from './useUsers';

const UserList = () => {
 const { listOfUsers, isLoading } = useUsers();

 return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {listOfUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
 );
};

export default UserList;