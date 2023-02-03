import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './Components/PostContainer';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <div className="App">
     <Navbar />
     <PostContainer />
    </div>
  );
}

export default App;
