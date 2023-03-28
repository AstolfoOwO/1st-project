import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/Profile/ProfileHeader";

const App = () => {
    return (
          <div className={'app-wrapper'}>
              <Header className={'header'}/>
              <Navbar className={'nav'}/>
              <ProfileHeader className={'content'}/>
          </div>
  );
}

export default App;
