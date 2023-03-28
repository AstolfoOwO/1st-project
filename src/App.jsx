import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileHeader from "./components/Profile/ProfileHeader";

const App = () => {
    return (
          <div className={'app-wrapper'}>
              <Header />
              <Navbar />
              <div className={'content'}>
                  <ProfileHeader/>
              </div>

          </div>
  );
}

export default App;
