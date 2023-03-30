import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import ReactDOM from 'react-dom/client';

const title = ReactDOM.createRoot(document.getElementById('title'));
const App = (props) => {
    title.render(
        <React.StrictMode>
            {props.title}
        </React.StrictMode>
    )
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <div className={'MainContent'}>
                <Navbar />
                <div className={'Content'}>
                    <Profile name='Astolfo'/>
                </div>
            </div>
        </div>
    );
}

export default App;
