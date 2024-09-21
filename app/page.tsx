import React from 'react';
import UsersList from './components/UsersList';
import Burbles from './components/Burbles';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <Burbles />
      <NavBar/>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Bienvenido a Snaply</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default App;
