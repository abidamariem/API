import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsers = () => {
 const [listOfUsers, setListOfUsers] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      setListOfUsers(result.data);
      setIsLoading(false);
    };

    fetchData();
 }, []);

 return { listOfUsers, isLoading };
};

export default useUsers;