import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MobileNetwork = () => {
  const [networkBtn, setNetworkBtn] = useState(false)
  const inputChange = async e => {
    try {
      const data = { name: e.target.name }
      const response = await axios.post(
        'http://localhost:800/sim/toggleData',
        data
      )
      setNetworkBtn(response.data.btnStatus)
      // console.log(response)
    } catch (err) {
      console.log('error found during post ', err)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
  try {
    const toggleBtnData = await axios.get(
      'http://localhost:800/sim/getToggleStatus'
    )
    setNetworkBtn(toggleBtnData.data.togglesData.networkBtn.btnStatus)  
  } catch (error) {
    
  }
    }
    fetchData()
  }, [])
  const navigate = useNavigate()
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
        <h1 className='heading_primary'>Mobile networks</h1>
        <div style={{ margin: '10px' }}>
          <span className='setBtn'>
            <div className='btnText' style={{ textAlign: 'left' }}>
              <h3>Automatically select network</h3>
              <h5 className='text_secondary'>
                Automatically choose preferred network {`(Jio True5G)`}
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
                checked={networkBtn}
                name='networkBtn'
                onChange={inputChange}
              />
              <span class='slider round'></span>
            </label>
          </span>
        </div>
      </div>
    </div>
  )
}

export default MobileNetwork
