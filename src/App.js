import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Schedule from './components/Schedule';
import Overview from './components/Overview';
import Events from './components/Events';
import News from './components/News';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Overview />
        <div className="sections">
          <Schedule />
          <Events />
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
