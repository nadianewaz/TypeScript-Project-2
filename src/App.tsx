import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDemo from './Component/UserDemo/UserDemo';

const users = [
  {
    id: 1,
    name: "nadia",
    email: "hayder@gmail.com",
    age: 23
  },
  {
    id: 2,
    name: "sadia",
    email: "hayder@gmail.com",
    age: 27
  }
];


function App() {
  return (
    <>
    <UserDemo users={users}/>
    
    </>
  );
}

export default App;
