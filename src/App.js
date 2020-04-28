import React from 'react';
import './App.css';
import Header from "./components/Header"
import PostsController from "./components/BeanBowlController"


function App() {
  return (
    <React.Fragment>
      <Header/>
      <PostsController/>
    </React.Fragment>
  );
}

export default App;
