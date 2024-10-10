import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import readingMode from '../../images/readingMode.jpg'
import axios from 'axios'
export const ReadingMode = () => {
  const navigate = useNavigate()

  const [readingBtn, setReadingBtn] = useState(false)
  const [readingScheduleBtn, setReadingScheduleBtn] = useState(false)
  
  const [data, setData] = useState('')
  const [scheduleData, setScheduleData] = useState('')
  const inputChange = async (name, setStateFunction) => {
    const response = await axios.post('https://setting-app-backend.vercel.app/display/toggle', {
      name
    })
    setStateFunction(response.data.btnStatus)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        
      const response = await axios.get('https://setting-app-backend.vercel.app/display/status')
      setReadingBtn(response.data.ReadingBtn.btnStatus)
      setReadingScheduleBtn(response.data.ReadingScheduleBtn.btnStatus)

      if (response.data.ReadingBtn.btnStatus) {
        document.getElementById('ReadingModeDiv').style.display = 'block'
      } else {
        document.getElementById('ReadingModeDiv').style.display = 'none'
      }
      if (response.data.ReadingScheduleBtn.btnStatus) {
        document.getElementById('ReadingScheduleDiv').style.display = 'block'
      } else {
        document.getElementById('ReadingScheduleDiv').style.display = 'none'
      }
  

      const mode = await axios.get('https://setting-app-backend.vercel.app/display/getData')
 
      setData(mode.data.ReadingMode.mode)
      setScheduleData(mode.data.ReadingSchedule.mode)
      } catch (error) {
       console.log(error);
        
      }
    }
    fetchData()
  },[])

  const inputDataChange = async (name, type) => {
    const data = {
      name: name,
      type: type
    }
    const response = await axios.post('https://setting-app-backend.vercel.app/display/data', {
      data
    })
  
    setData(response.data.mode)
  }

  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/display')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Reading mode</h1>
        <div style={{ margin: '10px' }}>
          <img
            src={readingMode}
            style={{
              width: '100%',
              borderRadius: '20px',
              margin: '15px 0px'
            }}
            alt=''
          />
          <span className='setBtn'>
            <div className='btnText'>
              <h3>Reading mode</h3>
            </div>
            <label
              class='switch'
              style={{
                top: '0px',
                left: '0px'
              }}
            >
              <input
                id='toggle1'
                checked={readingBtn}
                onChange={e => inputChange('ReadingBtn', setReadingBtn)}
                type='checkbox'
              />
              <span class='slider round'></span>
            </label>
          </span>
          <hr />

          <div id='ReadingModeDiv'>
            <div className='preferNet'>
              <span className='vrBtn'>
                <input
                  type='radio'
                  id='classic'
                  checked={data == 'Classic'}
                  onChange={e => inputDataChange('ReadingMode', 'Classic')}
                  name='ReadingMode'
                />
                <label htmlFor='classic'>
                  <h3 style={{ fontSize: '20px' }}>Classic</h3>
                  <div style={{ display: 'flex', fontSize: '15px' }}>
                    <p style={{ color: 'grey' }}>
                      Switch to warmer colours to reduce the amount of blue
                      light
                    </p>
                    <span>
                      {' '}
                      <i class='fa-solid fa-greater-than bluetoothGreater'></i>
                    </span>
                  </div>
                </label>
              </span>
              <span className='vrBtn'>
                <input
                  type='radio'
                  id='paper'
                  checked={data == 'Paper'}
                  onChange={e => inputDataChange('ReadingMode', 'Paper')}
                  name='ReadingMode'
                />
                <label htmlFor='paper'>
                  <h3 style={{ fontSize: '20px' }}>Paper</h3>

                  <div style={{ display: 'flex', fontSize: '15px' }}>
                    <p style={{ color: 'grey' }}>
                      Switch to warmer colours and add paper texture to
                      backgrounds to reduce eye strain
                    </p>
                    <span>
                      {' '}
                      <i class='fa-solid fa-greater-than bluetoothGreater'></i>
                    </span>
                  </div>
                </label>
              </span>
            </div>
            <hr />
          </div>
          <span className='setBtn'>
            <div className='btnText'>
              <h3>Schedule Dark mode</h3>
            </div>
            <label
              class='switch'
              style={{
                top: '0px',
                left: '0px'
              }}
            >
              <input
                id='toggle'
                checked={readingScheduleBtn}
                name='ReadingScheduleBtn'
                onChange={e =>
                  inputChange('ReadingScheduleBtn', setReadingScheduleBtn)
                }
                type='checkbox'
              />
              <span class='slider round'></span>
            </label>
          </span>

          <div id='ReadingScheduleDiv'>
            <div className='preferNet'>
              <span
                className='vrBtn'
                onClick={() => {
                  document.getElementById('customTime').style.display = 'none'
                }}
              >
                <input
                  type='radio'
                  id='GoodNightRead'
                  // checked={networktype == 'network5G'}
                  onChange={e => inputDataChange('ReadingSchedule', 'Night')}
                  checked={scheduleData == 'Night'}
                  name='ReadingSchedule'
                />
                <label htmlFor='GoodNightRead'>
                  <h3 style={{ fontSize: '20px' }}>Good night's read</h3>
                  <h5 style={{ fontSize: '14px' }}>
                    Switch to Reading mode after sunset automatically
                  </h5>
                </label>
              </span>
              <span
                className='vrBtn'
                onClick={() => {
                  document.getElementById('customTime').style.display = 'block'
                }}
              >
                <input
                  type='radio'
                  id='custom'
                  // checked={networktype == 'network5G'}
                  onChange={e => inputDataChange('ReadingSchedule', 'Custom')}
                  checked={scheduleData == 'Custom'}
                  name='ReadingSchedule'
                />
                <label htmlFor='custom'>
                  <h3 style={{ fontSize: '20px' }}>Custom period</h3>
                  <h5 style={{ fontSize: '14px' }}>
                    Turn on Reading mode for a custom period
                  </h5>
                  <div id='customTime' style={{ display: 'none' }}>
                    <span className='setBtn'>
                      <div className='btnText '>
                        <h3>Turn on</h3>
                      </div>

                      <span style={{ color: 'grey', fontSize: '15px' }}>
                        {' '}
                        {`7:00 PM`}
                        <i className='fa-solid fa-greater-than'></i>
                      </span>
                    </span>
                    <span className='setBtn'>
                      <div className='btnText '>
                        <h3>Turn off</h3>
                      </div>

                      <span style={{ color: 'grey', fontSize: '15px' }}>
                        {' '}
                        {`7:00 AM`}
                        <i className='fa-solid fa-greater-than'></i>
                      </span>
                    </span>
                  </div>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
