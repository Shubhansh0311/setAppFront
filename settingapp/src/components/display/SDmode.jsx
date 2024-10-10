import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SDmode = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Sunset to sunrise');
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const navigate = useNavigate();

  const inputChange = async (e) => {
    const name = e.target.name;
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/display/toggle', { name });
      setToggle(response.data.btnStatus);
    } catch (error) {
      console.error("Error toggling dark mode:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://setting-app-backend.vercel.app/display/status');
        setToggle(response.data.SdModeBtn.btnStatus);
        setData(response.data.SdModeBtn.currentMode); // Adjust based on your API response
      } catch (error) {
        console.error("Error fetching status:", error);
      }
    };
    fetchData();
  }, []);

  const inputDataChange = async (name, type) => {
    const data = { name, type };
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/display/data', { data });
      setToggle(response.data.btnStatus);
      setData(type); // Update the current mode
    } catch (error) {
      console.error("Error changing input data:", error);
    }
  };

  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span className='btn_top' onClick={() => navigate('/display')}>
          {' '} {'←'}
        </span>
        <h1 className='heading_primary'>Schedule Dark mode</h1>
        <div style={{ margin: '10px' }}>
          <span className='setBtn'>
            <div className='btnText'>
              <h3>Schedule Dark mode</h3>
            </div>
            <label className='switch'>
              <input
                id='toggle'
                checked={toggle}
                name='SdModeBtn'
                onChange={inputChange}
                type='checkbox'
              />
              <span className='slider round'></span>
            </label>
          </span>

          {toggle && (
            <div id='scheduleDiv'>
              <div className='preferNet'>
                <span className='vrBtn' onClick={() => setIsScheduleVisible(false)}>
                  <input
                    type='radio'
                    id='sunset'
                    onChange={() => inputDataChange('SDmode', 'Sunset to sunrise')}
                    checked={data === 'Sunset to sunrise'}
                  />
                  <label htmlFor='sunset'>
                    <h3>Sunset to sunrise</h3>
                    <h5>Your device will switch to Dark mode at sunset and back to light mode at sunrise. Turn on location services for the most accurate results.</h5>
                  </label>
                </span>
                <span className='vrBtn' onClick={() => setIsScheduleVisible(true)}>
                  <input
                    type='radio'
                    id='custom'
                    onChange={() => inputDataChange('SDmode', 'Custom')}
                    checked={data === 'Custom'}
                  />
                  <label htmlFor='custom'>
                    <h3>Custom</h3>
                    <h5>Turn Dark mode on and off at scheduled times.</h5>
                    {isScheduleVisible && (
                      <div id='customTime'>
                        {/* Custom time settings here */}
                      </div>
                    )}
                  </label>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SDmode;
