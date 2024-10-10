import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SDmode = () => {
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState('Sunset to sunrise')
  const inputChange = async e => {
    const name = e.target.name
    const response = await axios.post('https://setting-app-backend.vercel.app/display/toggle', {
      name
    })
    // console.log(responses)
    setToggle(response.data.btnStatus)
  }

  useEffect(() => {
    const fetchData = async () => {
     try {
      const response = await axios.get('https://setting-app-backend.vercel.app/display/status')
      // setToggle(response.data.btnStatus)
      setToggle(response.data.SdModeBtn.btnStatus)

      if (response.data.SdModeBtn.btnStatus) {
        document.getElementById('scheduleDiv').style.opacity = '1'
      } else {
        document.getElementById('scheduleDiv').style.opacity = '0'
      }

      const mode = await axios.get('https://setting-app-backend.vercel.app/display/getData')
      console.log(mode.data)
      // setData(mode.data.mode.mode)
     } catch (error) {
      
     }
    }
    fetchData()
  })

  const inputDataChange = async (name, type) => {
    const data = {
      name: name,
      type: type
    }
    const response = await axios.post('https://setting-app-backend.vercel.app/display/data', {
      data
    })
    console.log(response)
    setToggle(response.data.btnStatus)
  }

  const navigate = useNavigate()
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
        <h1 className='heading_primary'>Schedule Dark mode</h1>
        <div style={{ margin: '10px' }}>
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
                checked={toggle}
                name='SdModeBtn'
                // data-on='ON'
                // data-off='OFF'
                onChange={e => {
                  inputChange(e)
                  const ans = document.getElementById('toggle')
                  // console.log(ans.checked)
                }}
                type='checkbox'
              />
              <span class='slider round'></span>
            </label>
          </span>

          <div id='scheduleDiv' style={{ opacity: '0' }}>
            <div className='preferNet'>
              <span
                className='vrBtn'
                onClick={() => {
                  document.getElementById('customTime').style.display = 'none'
                }}
              >
                <input
                  type='radio'
                  id='sunset'
                  // checked={networktype == 'network5G'}
                  onChange={e => inputDataChange('SDmode', 'Sunset to sunrise')}
                  checked={data == 'Sunset to sunrise'}
                />
                <label htmlFor='sunset'>
                  <h3 style={{ fontSize: '17px' }}>Sunset to sunrise</h3>
                  <h5 style={{ fontSize: '12px' }}>
                    Your device will switch to Dark mode at sunset and back to
                    light mode at sunrise.Turn on location services for most
                    accurate results
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
                  onChange={e => inputDataChange('SDmode', 'Custom')}
                  checked={data == 'Custom'}
                />
                <label htmlFor='custom'>
                  <h3 style={{ fontSize: '17px' }}>Custom</h3>
                  <h5 style={{ fontSize: '12px' }}>
                    Turn Dark mode on and off at scheduled time
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

export default SDmode
