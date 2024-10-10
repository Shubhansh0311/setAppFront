import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import brightImg from '../../images/brightImg.png'
import axios from 'axios'
const Brightness = () => {
  const [autoBrightness, setAutoBrightness] = useState(false)
  const [brightness, setBrightness] = useState(0)
  const [sunlightMode, setSunlightMode] = useState(false)

  const inputChange = async (name, setStateFunction) => {

    try {
      if (name == 'autoBrightness' && autoBrightness) {
        setBrightness(100)
        
        document.body.style.filter = `brightness(${100}%)`
      }
      const response = await axios.post('https://setting-app-backend.vercel.app/display/toggle', {
        name
      })
      setStateFunction(response.data.btnStatus)
    } catch (err) {
      console.log('error while sending data : ', err)
    }
  }
  const inputDataChange = async e => {
    const data = { range: e.target.value, name: e.target.name }
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/display/data', {
        data
      })

      if (!autoBrightness) {
        setBrightness(response.data.range)
        document.body.style.filter = `brightness(${brightness}%)`
      }
    } catch (err) {
      console.log('error while sending data : ', err)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://setting-app-backend.vercel.app/display/status')
        setAutoBrightness(response.data.autoBrightness.btnStatus)
        setSunlightMode(response.data.sunlightMode.btnStatus)
        if (response.data.autoBrightness.btnStatus) {
          document.getElementById('sunlightModeDiv').style.opacity = '1'
          const data = { range: 100, name: 'brightnessBar' }
          try {
            const responses = await axios.post(
              'https://setting-app-backend.vercel.app/display/data',
              {
                data
              }
            )
          
            
            setBrightness(responses.data.range)

            document.body.style.filter = `brightness(${brightness}%)`
          } catch (err) {
            console.log('error while sending data : ', err)
          }
        } else {
          document.getElementById('sunlightModeDiv').style.opacity = '0'
        }
      } catch (error) {
        console.log('error while recieving data :- ', error)
      }

      // brightness range
      const response = await axios.get('https://setting-app-backend.vercel.app/display/getData')
      const brightnessValue = response.data.brightnessBar.range

      setBrightness(brightnessValue)
      document.body.style.filter = `brightness(${brightnessValue}%)`
    }
    fetchData()
  },[autoBrightness])

  const navigate = useNavigate()

  return (
    <div className='main_container' id='sub_container'>
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
        <h1 className='heading_primary'>Brightness level</h1>
        <div style={{ margin: '30px 10px' }}>
          <span style={{ fontSize: '25px', color: 'grey' }}>
            <img
              src={brightImg}
              style={{
                width: '25px',
                position: 'relative',
                top: '5px',
                marginRight: '10px'
              }}
              alt='brightImg'
            />
            Screen brightness
          </span>
          <div
            className='
     sliderBright-cont'
          >
            <div className='sliderBright'>
              <input
                type='range'
                name='brightnessBar'
                onChange={inputDataChange}
                id='brightnessBar'
                min='0'
                max='100'
              />{' '}
              <progress min='0' value={brightness} max='100'></progress>
            </div>
          </div>
          <div style={{ position: 'relative', top: '3.5rem' }}>
            <hr />
            <span className='setBtn'>
              <div className='btnText'>
                <h3>Automatic brightness</h3>
                <h5 className='text_secondary'>
                  Adjust brightness to ambient light to save battery
                </h5>
              </div>
              <label
                class='switch'
                style={{
                  top: '0px',
                  left: '0px'
                }}
              >
                <input
                  name='autoBrightness'
                  onChange={e => {
                    inputChange('autoBrightness', setAutoBrightness)
                  }}
                  checked={autoBrightness}
                  type='checkbox'
                />
                <span class='slider round'></span>
              </label>
            </span>
            <div id='sunlightModeDiv' style={{opacity:'0'}}>
              <span className='setBtn' style={{ width: '100%' }}>
                <div className='btnText' style={{ width: '70%' }}>
                  <h3>Sunlight mode</h3>
                  <h5 className='text_secondary'>
                    Adjust brightness to ambient light to prevent the screen
                    from going too dark
                  </h5>
                </div>
                <label
                  class='switch'
                  style={{
                    top: '0px',
                    left: '0px'
                  }}
                >
                  <input
                    type='checkbox'
                    name='sunlightMode'
                    checked={sunlightMode}
                    onChange={e => inputChange('sunlightMode', setSunlightMode)}
                  />
                  <span class='slider round'></span>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brightness
