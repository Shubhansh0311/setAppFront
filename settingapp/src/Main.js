import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Main = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  
  // Define the list of settings
  const settings = [
    { name: 'About', path: '/about', icon: 'fa-mobile', color: 'blue' },
    { name: 'Sim cards & mobile networks', path: '/sim', icon: 'fa-sim-card', color: 'orange' },
    { name: 'Wifi', path: '/wifi', icon: 'fa-wifi', color: 'blue' },
    { name: 'Bluetooth', path: '/bluetooth', icon: 'fa-bluetooth', color: 'blue' },
    { name: 'Portable Hotspot', path: '/hotspot', icon: 'fa-link', color: 'orange' },
    { name: 'Connection & sharing', path: '/connection', icon: 'fa-nfc-symbol', color: '#ff00008c' },
    { name: 'Display and Brightness', path: '/display', icon: 'fa-sun', color: 'orange' },
    { name: 'Sound and vibration', path: '/sound', icon: 'fa-volume-low', color: '#82be82' },
  ];

  // Filter settings based on the search query
  const filteredSettings = settings.filter(setting =>
    setting.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='main_container'>
      <div className='sub_container'>
        <h1 className='heading_primary'>Settings</h1>
        <div className='search_container'>
          <i className='fa-solid fa-magnifying-glass search_icon' style={{ color: '#797b81' }}></i>
          <input
            type='text'
            className='search_text'
            placeholder='Search settings'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className='apps_container'>
          {filteredSettings.map(setting => (
            <span
              className='app_btn'
              key={setting.name}
              onClick={() => navigate(setting.path)}
              style={{ display: 'flex' }}
            >
              <i
                className={`fa-solid ${setting.icon} icons`}
                style={{ background: setting.color, color: 'white' }}
              ></i>
              <div className='app'>
                <span>{setting.name}</span>
                <span>
                  <i className='fa-solid fa-greater-than'></i>
                </span>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
