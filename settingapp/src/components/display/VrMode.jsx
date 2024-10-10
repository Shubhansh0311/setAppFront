import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VrMode = () => {
  const navigate = useNavigate()
const [data,setData]=useState('ReduceBlur')
  useEffect(() => {
    const fetchData = async () => {
    
    try {
      const mode = await axios.get('https://setting-app-backend.vercel.app/display/getData')
      // console.log(mode.data.mode)
      setData(mode.data.VrMode.mode)
    } catch (error) {
      console.log(error);
      
    }
    }
    fetchData()
  })

  const inputDataChange = async (name, type) => {
    const data = {
      name: name,
      type: type
    }
   try{
    const response = await axios.post('https://setting-app-backend.vercel.app/display/data', {
      data
    })
    console.log(response);
    setData(response.data.mode)
   }
  catch(err){
    console.log('data not send ',err);
  }
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
        <h1 className='heading_primary'>When device is in VR mode</h1>
        <div className='preferNet' style={{ margin: '8px' }}>
          <span className='vrBtn'>
            <input
              type='radio'
              id='ReduceBlur'
              checked={data == 'ReduceBlur'}
              onChange={e=>inputDataChange('VrMode','ReduceBlur')}
              name='vrmode'
            />
            <label htmlFor='ReduceBlur'>Reduce blur (recommended)</label>
          </span>
          <span className='vrBtn'>
            <input
              type='radio'
              id='ReduceFlicker'
              checked={data== 'ReduceFlicker'}
              onChange={e=>inputDataChange('VrMode','ReduceFlicker')}
              name='vrmode'
            />
            <label htmlFor='ReduceFlicker'>Reduce flicker</label>
          </span>
        </div>
      </div>
    </div>
  )
}

export default VrMode
