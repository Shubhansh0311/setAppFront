import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import headphone from '../../images/headphone.png'
import rare from '../../images/rare.png'
const Bluetooth = () => {
  const navigate = useNavigate()

  //

  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState('Redmi Note 12 Pro+ ')

  const devices = ['samsung', 'redmi', 'vivo', 'oppo', 'gionee']
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://setting-app-backend.vercel.app/bluetooth/status'
        )

        setToggle(response.data.bluetoothBtn.btnStatus)
        if (response.data.bluetoothBtn.btnStatus) {
          document.getElementById('Devices').style.display = 'block'
        }else{
          document.getElementById('Devices').style.display = 'none'

        }
        setName(response.data.name.name)
      } catch (err) {
        console.log('data not found ', err)
      }
    }
    fetchData()
  }, [toggle])
  const inputChange = async e => {
    const name = e.target.name
    try {
      const response = await axios.post(
        'https://setting-app-backend.vercel.app/bluetooth/toggle',
        {
          name
        }
      )
      // console.log(response)
      setToggle(response.data.btnStatus)
    } catch (err) {
      console.log('unable to send the data : ', err)
    }
  }
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
        <h1 className='heading_primary'>Bluetooth</h1>
        <div style={{ margin: '8px' }}>
          <span className='setBtn'>
            <div className='btnText'>
              <h3>Bluetooth</h3>
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
                name='BluetoothBtn'
                id='BluetoothBtn'
                checked={toggle}
                onChange={e => {
                  inputChange(e)
                }}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/rename')
            }}
          >
            <div className='btnText'>
              <h3>Device name</h3>
            </div>
            <span
              className='setArrBtn'
              style={{ textAlign: 'right', fontSize: '14px' }}
            >
              {name}

              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </span>
          </span>
          <div
            id='Devices'
            style={{ display: 'none' }}
            className='bluetooth devices'
          >
            {devices.map(e => {
              return (
                <span
                  className='app_btn bluetoothBtn'
                  style={{ display: 'flex' }}
                >
                  <img
                    src={headphone}
                    className='bluetoothIcons'
                    alt='devices'
                  />
                  <div className='app'>
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ fontWeight: 'bold' }}>{e}</p>
                      <h5 style={{ color: 'grey' }}>Saved</h5>
                    </div>
                    <span>
                      {' '}
                      <i
                        class='fa-solid fa-greater-than bluetoothGreater'
                        onClick={() => {
                          navigate('/devices')
                        }}
                      ></i>
                    </span>
                  </div>
                </span>
              )
            })}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: ' 20px 10px'
              }}
            >
              <h3 style={{ color: 'grey' }}>AVAILABLE DEVICES</h3>
              <span
                onClick={() => {
                  document.getElementById('load').classList.add("loaders")

                  setTimeout(() => {
                    document.getElementById('load').classList.remove("loaders")
                    document.getElementById('rare').style.display = 'flex'
                  }, 10000)
                }}
                id='load'
                className='loader'
              ></span>
            </div>
          </div>
          <span
            className='app_btn'
            onClick={() => {
              navigate('/availableDevices')
            }}
            id='rare'
            style={{ display: 'none', margin: '0px', width: '100' }}
          >
            <img src={rare} style={{ width: '30px' }} alt='rare' />
            <div className='app'>
              <h4>Rarely used devices</h4>
              <span>
                {' '}
                <i
                  class='fa-solid fa-greater-than'
                  style={{ marginRight: '-25px' }}
                ></i>
              </span>
            </div>
          </span>
          <hr style={{ margin: '15px 0px' }} />
          <h3
            className='text_secondary'
            style={{ fontWeight: 'normal', fontSize: '13px' }}
          >
            ADDITIONAL SETTINGS
          </h3>

          <div
            className='setBtn'
            onClick={() => {
              navigate('/bluetoothAddSetting')
            }}
          >
            <div className='btnText align'>
              <h4>Additional settings</h4>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bluetooth
