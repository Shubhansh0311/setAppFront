import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const HeadphoneControls = () => {
  const navigate = useNavigate()
const [data,setData]=useState('Control Volume')
  useEffect(() => {
    const fetchData = async () => {
 try {
     
  const mode = await axios.get('https://setting-app-backend.vercel.app/sound/getData')
  // console.log(mode.data.mode)
  setData(mode.data.HeadphoneRemote.mode)
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
    const response = await axios.post('https://setting-app-backend.vercel.app/sound/data', {
      data
    })
    console.log(response);
    setData(response.data.mode)
  
  }
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
        <h1 className='heading_primary'>Headphone remote buttons</h1>
        <div className='preferNet' style={{ margin: '8px' }}>
        <span className='vrBtn'>
            <input
              type='radio'
              id='ControlVolume'
              checked={data== 'Control Volume'}
              onChange={e=>inputDataChange('HeadphoneRemote','Control Volume')}
              name='HeadphoneRemote'
            />
            <label htmlFor='ControlVolume'>Control Volume level</label>
          </span> 
          <span className='vrBtn'>
            <input
              type='radio'
              id='ControlMusic'
              checked={data == 'Control Music'}
              onChange={e=>inputDataChange('HeadphoneRemote','Control Music')}
              name='HeadphoneRemote'
            />
            <label htmlFor='ControlMusic'>Control Music playback</label>
          </span>
          
        </div>
      </div>
    </div>
  )
}

export default HeadphoneControls
