"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
}

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://chat-app-lovat-six.vercel.app/api/users');
        setUsers(response.data);
        console.log(response.data); // Verifica los datos aquí
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // Manejo específico de errores de Axios
          console.error('Error fetching users:', error.response ? error.response.data : error.message);
          setError('Error fetching users. Please try again later.');
        } else {
          // Manejo de otros errores
          console.error('Unexpected error:', error);
          setError('An unexpected error occurred. Please try again later.');
        }
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Users</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
