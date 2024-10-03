import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WirelessDisplay = () => {
  const navigate = useNavigate()
  const [WirelessMode, setWirelessMode] = useState(false)
  const inputToggleChng = async e => {
    try {
      const name = e.target.name
      const response = await axios.post(
        'http://localhost:800/connection/toggle',
        { name }
      )

      setWirelessMode(response.data.btnStatus)
    } catch (error) {
      console.log('error while fetching data from the backend '.error)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:800/connection/status'
        )
        setWirelessMode(response.data.WirelessDisplay.btnStatus)
      } catch (error) {
        console.log('error while fetching data from the backend ', error)
      }
    }
    fetchData()
  },[])
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate(-1)
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Wireless Display</h1>
        <div className='setBtn' style={{ margin: '10px', width: 'auto' }}>
          <div className='btnText align'>
            <h3>Wireless display</h3>
          </div>
          <label
            class='switch'
            style={{
              top: '0px',
              left: '2px'
            }}
          >
            <input
              type='checkbox'
              checked={WirelessMode}
              name='WirelessDisplay'
              onChange={inputToggleChng}
            />
            <span class='slider round'></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default WirelessDisplay
