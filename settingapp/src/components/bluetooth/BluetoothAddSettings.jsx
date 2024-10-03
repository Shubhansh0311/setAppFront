import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BluetoothAddSettings = () => {
  const [pairCompatible, setPairCompatible] = useState(false)
  const [deviceWithoutName, setDeviceWithoutName] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:800/bluetooth/status'
        )
        setPairCompatible(response.data.pairCompatible.btnStatus)
        setDeviceWithoutName(response.data.deviceWithoutName.btnStatus)
      } catch (err) {
        console.log('data not found ', err)
      }
    }
    fetchData()
  }, [])

  const inputChange = async (names, setStateFunction) => {
    const name = { name: names }
    try {
      const response = await axios.post(
        'http://localhost:800/bluetooth/toggle',
        name
      )
      setStateFunction(response.data.btnStatus)
    } catch (error) {
      console.log('data not found : ', error)
    }
  }

  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/bluetooth')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Additional settings</h1>
        <div style={{ margin: '10px' }}>
          <span className='setBtn'>
            <div className='btnText align'>
              <h5 style={{ margin: '20px 0px' }}>CONNECTION</h5>
              <h4>Pair compatible devices</h4>
              <h5>
                Quickly connect earphones speakers ,and other compatibe devices
              </h5>
            </div>
            <label
              class='switch'
              style={{
                left: '2px',
                top: '55px'
              }}
            >
              <input
                type='checkbox'
                checked={pairCompatible}
                onChange={() =>
                  inputChange('PairCompatible', setPairCompatible)
                }
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/blocklist')
            }}
          >
            <div className='btnText align'>
              <h4>Bluetooth blocklist</h4>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <hr />
          <span className='setBtn'>
            <div className='btnText align'>
              <h5 style={{ margin: '15px 0px' }}>DISPLAYED ITEMS</h5>
              <h4>Show Bluetooth devices without names</h4>
            </div>
            <label
              class='switch'
              style={{
                left: '2px',
                // top: '55px'
              }}
            >
              <input
                type='checkbox'
                checked={deviceWithoutName}
                onChange={()=> inputChange('DeviceWithoutName', setDeviceWithoutName)
                }
              />
              <span class='slider round'></span>
            </label>
          </span>
          <hr />
          <span
            className='setBtn'
            onClick={() => {
              navigate('/turningOn')
            }}
          >
            <div className='btnText align'>
              <h4>Apps turning on Bluetooth</h4>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BluetoothAddSettings
