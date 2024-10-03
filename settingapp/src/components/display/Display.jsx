import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import dark from '../../images/dark.png'
import light from '../../images/light.png'
// import functions from '../../JS/run'
import axios from 'axios'

const Display = () => {
  const navigate = useNavigate()
  const [SDMode, setSDMode] = useState('Off')
  const [readingMode, setReadingMode] = useState('Off')
  const [refreshRate, setRefreshRate] = useState('Default')
  const [colorScheme, setColorScheme] = useState('light')

  const [toggle, setToggle] = useState(false)
  const inputChange = async e => {
    const name = e.target.name
    const response = await axios.post('http://localhost:800/display/toggle', {
      name
    })
    setToggle(response.data.btnStatus)
  }
  const inputDataChange = async (name, mode) => {
    const data = {
      name: name,
      type: mode
    }
    const response = await axios.post('http://localhost:800/display/data', {
      data
    })
console.log("response 1",response);

    setColorScheme(response.data.mode)
  }

  useEffect(() => {
    const fetchData = async () => {
    
    
try{
  const response = await axios.get('http://localhost:800/display/status')
  const mode = await axios.get('http://localhost:800/display/getData')
  setToggle(response.data.autoRotate.btnStatus)
  setColorScheme(mode.data.ColorScheme.mode)
  if (response.data.SdModeBtn.btnStatus) {
    setSDMode(mode.data.mode.mode)
  }
  if (response.data.ReadingBtn.btnStatus) {
    setReadingMode('On')
  }
  const refresh = mode.data.RefreshMode.mode
  refresh == 'Default'
    ? setRefreshRate('Default')
    : setRefreshRate(mode.data.RefreshRate.Rate)
}catch(e){
  console.log(e);
  
}
    
    }
    fetchData()
  })
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Display</h1>
        <div style={{ margin: '0px 5px' }}>
          <h5 style={{ margin: '20px 0px' }} className='text_secondary'>
            COLOUR SCHEME
          </h5>
          <div style={{ display: 'flex' }}>
            <div className='displayMode'>
              <input
                checked={colorScheme == 'light'}
                onChange={e => inputDataChange('ColorScheme', 'light')}
                type='radio'
                name='displayMode'
                id='light'
              />
              <label class='radio-container' htmlFor='light'>
                <img src={light} alt='Image Option 1' />
                Light mode
              </label>
            </div>

            <div className='displayMode'>
              <input
                checked={colorScheme == 'dark'}
                onChange={e => inputDataChange('ColorScheme', 'dark')}
                type='radio'
                name='displayMode'
                id='dark'
              />
              <label class='radio-container' htmlFor='dark'>
                <img src={dark} alt='Image Option 1' />
                Dark mode
              </label>
            </div>
          </div>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/scheduleDarkMode')
            }}
          >
            <h3>Schedule Dark mode</h3>
            <span
              style={{ color: 'grey', fontSize: '15px', fontWeight: 'bold' }}
            >
              {`${SDMode} `}

              <i class='fa-solid fa-greater-than'></i>
            </span>{' '}
          </span>
          <hr />
          <h5 style={{ margin: '20px 0px', color: 'grey' }}>SCREEN</h5>

          <span
            className='setBtn'
            onClick={() => {
              navigate('/brightness')
            }}
          >
            <h3>Brightness level</h3>

            <span style={{ color: 'grey', fontSize: '15px' }}>
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/readingMode')
            }}
          >
            <div className='btnText align'>
              <h3>Reading mode</h3>
              <h5 style={{ fontWeight: 'bold' }}>
                Reading mode adjusts colours and textures of the items on your
                screen allowing your eyes to relax
              </h5>
            </div>

            <span
              style={{ color: 'grey', fontSize: '15px', fontWeight: 'bold' }}
            >
              {' '}
              {`${readingMode} `}
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/colorScheme')
            }}
          >
            <h3>Colour scheme</h3>

            <span style={{ color: 'grey', fontSize: '15px' }}>
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/refresh')
            }}
          >
            <h3>Refresh rate</h3>

            <span
              style={{ color: 'grey', fontSize: '15px', fontWeight: 'bold' }}
            >
              {' '}
              {`${refreshRate} `}
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <hr />
          <h5 style={{ margin: '20px 0px', color: 'grey' }}>FONT</h5>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/font')
            }}
          >
            <h3>Font</h3>

            <span style={{ color: 'grey', fontSize: '15px' }}>
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/textSize')
            }}
          >
            <h3>Text size</h3>

            <span style={{ color: 'grey', fontSize: '15px' }}>
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <hr />
          <h5 style={{ margin: '20px 0px', color: 'grey' }}>SYSTEM</h5>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/vrMode')
            }}
          >
            <h3>When device is in VR</h3>

            <span style={{ color: 'grey', fontSize: '15px' }}>
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>

          <span className='setBtn'>
            <h3>Auto-rotate screen</h3>

            <label
              class='switch'
              style={{
                left: '4px',
                top: '0px'
              }}
            >
              <input
                type='checkbox'
                id='brightness'
                name='autoRotate'
                checked={toggle}
                onChange={inputChange}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <div
            style={{
              background: 'whitesmoke',
              padding: '20px',
              borderRadius: '10px'
            }}
          >
            <h5 style={{ margin: '10px 0px', color: 'grey', fontSize: '15px' }}>
              Need other settings ?
            </h5>
            <p style={{ margin: '15px 0px' }}>
              <NavLink className='displayNavLinks' to='/display'>
                Control centre & status bar
              </NavLink>
            </p>

            <p>
              <NavLink className='displayNavLinks' to='/display'>
                Always-on display & lock screen
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Display
