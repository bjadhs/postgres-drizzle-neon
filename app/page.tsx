'use client';

import db from '@/db/drizzle';
import { usersTable } from '@/db/schema';
import { useState, useEffect } from 'react';

type UserType = {
  id: number;
  name: string;
  age: number;
  email: string;
};

export default function Home() {
  const [user, setUser] = useState<UserType[]>([]);
  const fetchUsers = async () => {
    const allUsers = await db.select().from(usersTable);
    setUser(allUsers);
  };
  useEffect(() => {
    fetchUsers();

    const interval = setInterval(() => {
      fetchUsers();
      console.log('Fetched users');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='grid grid-cols-2 items-center justify-center'>
      {user.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </div>
  );
}
