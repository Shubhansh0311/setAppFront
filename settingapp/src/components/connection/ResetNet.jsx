import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetNet = () => {
  const navigate = useNavigate()
  const [data, setData] = useState('airtel')
  const inputDataChange = async (name, sim) => {
    try {
      const data = { name: name, simName : sim }
      const response = await axios.post(
        'https://setting-app-backend.vercel.app/connection/data',
        { data }
      )
      console.log(response)
      setData(response.data.SimName)
    } catch (error) {}
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://setting-app-backend.vercel.app/connection/getData'
        )
      
        setData(response.data.SimCardReset.SimName)
      } catch (err) {
        console.log('error while fetching data from the backend')
      }
    }
    fetchData()
  }, [])
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/connection')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>
          Reset Wifi,mobile networks,and Bluetooth
        </h1>
        <div className='netDiv'>
          <p className='netText'>
            THIS WILL RESET ALL NETWORK SETTINGS,INCLUDING
          </p>{' '}
          <h3 className='rangeBars'>Wifi</h3>
          <h3 className='rangeBars'>Mobile data</h3>
          <h3 className='rangeBars'>Bluetooth</h3>
          <hr />
          <h5 className='netText'>SELECT SIM CARD TO RESET</h5>{' '}
          <div className='preferNet resetNet' style={{ margin: '0px' }}>
            <span className='vrBtn resetBtn'>
              <input
                type='radio'
                id='airtel'
                checked={data == 'airtel'}
                onChange={e => inputDataChange('SimCardReset', 'airtel')}
                name='SimCardReset'
              />
              <label htmlFor='airtel'>airtel</label>
            </span>
            <span className='vrBtn resetBtn'>
              <input
                type='radio'
                id='Jio'
                checked={data == 'Jio'}
                onChange={e => inputDataChange('SimCardReset', 'Jio')}
                name='SimCardReset'
              />
              <label htmlFor='Jio'>Jio</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetNet
