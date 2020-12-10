import React from 'react';
import Header from './components/fb-header/Header';
import Sidebar from './components/fb-sidebar/Sidebar';

function App() {
    return (
        <div className='app'>
            <Header />
            <div className="app__body">
                <Sidebar />
            </div>
        </div>
    )
}

export default App;
