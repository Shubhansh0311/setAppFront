import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Refresh = () => {
  const [data, setData] = useState('Custom')
  const [rate, setRate] = useState()
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
  const inputChange = async (name, rate) => {
    const data = {
      name: name,
      rate: rate
    }
    const response = await axios.post('https://setting-app-backend.vercel.app/display/data', {
      data
    })

    setRate(response.data.Rate)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const mode = await axios.get('https://setting-app-backend.vercel.app/display/getData')

        setData(mode.data.RefreshMode.mode)

        setRate(mode.data.RefreshRate.Rate)
      } catch (err) {
        console.log('error while fetching data ', err)
      }
    }
    fetchData()
  })
  const navigate = useNavigate()

  return (
    <div className='main_container'>
      <div className='sub_container'>
        <buttons
          className='btn_top'
          onClick={() => {
            navigate('/display')
          }}
        >
          {' '}
          {'←'}
        </buttons>

        <h1 className='heading_primary'>Refresh rate</h1>
        <div style={{ margin: '5px' }}>
          <div className='refresh_container'>
            <span style={{ width: '50%' }}>Standard</span>
            <span>High</span>
          </div>
          <h5 className='text_secondary' style={{ margin: '10px 5px' }}>
            Using higher refresh rates makes viewing experience smoother but
            consumes more power
          </h5>
          <hr style={{ margin: '30px 0px' }} />
          <div id='scheduleDiv'>
            <div className='preferNet'>
              <span
                className='vrBtn'
                onClick={() => {
                  document.getElementById('turnOn').style.display = 'none'
                }}
              >
                <input
                  type='radio'
                  id='default'
                  checked={data == 'Default'}
                  onChange={e => inputDataChange('RefreshMode', 'Default')}
                  name='refreshRate'
                />
                <label htmlFor='default'>
                  <h3 style={{ fontSize: '17px' }}>Default (recommended)</h3>
                  <p style={{ fontSize: '14px', color: 'grey' }}>
                    Adjust the refresh rate dyanmically based on scenarios to
                    balance performance with power consumption
                  </p>
                </label>
              </span>
              <span
                className='vrBtn'
                onClick={() => {
                  document.getElementById('turnOn').style.display = 'flex'
                }}
              >
                <input
                  type='radio'
                  id='custom'
                  checked={data == 'Custom'}
                  onChange={e => inputDataChange('RefreshMode', 'Custom')}
                  name='refreshRate'
                />
                <label htmlFor='custom'>
                  <h3 style={{ fontSize: '17px' }}>Custom</h3>
                  <p style={{ fontSize: '14px', color: 'grey' }}>
                    Prefer selected refresh rate
                  </p>
                  <span
                    className='setBtn'
                    id='turnOn'
                    style={{ display: 'none' }}
                  >
                    <div className='btnText '>
                      <h3>Turn on</h3>
                    </div>

                    <span>
                      <select
                        value={rate}
                        onChange={e => {
                          inputChange('RefreshRate', e.target.value)
                        }}
                      >
                        <option value='60Hz'>60Hz</option>
                        <option value='120Hz'>120Hz</option>
                      </select>
                    </span>
                  </span>
                </label>
              </span>
            </div>
          </div>
          <p style={{ margin: '15px 0px', color: 'grey' }}>
            1.For you to understand the difference between higher & lower
            refresh rates demos are played slower here.
            <br /> It might be harder for you to notice the difference during
            regular use
            <br />
            2. In some cases ,refresh rate might be adjusted dyanmically based
            on what items are displayed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Refresh
