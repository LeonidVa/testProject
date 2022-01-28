import React from 'react';
import Menu from "../menu/menu";
import './app.css';
import AppHeader from "../app-header/app-header";
import Filter from "../filter/filter";

const App = () => {
    return (
            <div className='content'>
                    <Menu/>
                    <div className='headerUserSearch'>
                    <AppHeader/>
                    <Filter/>
                    </div>
            </div>
    );
};

export default App;