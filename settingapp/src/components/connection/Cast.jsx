import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import casting from '../../images/casting.png'
import casting2 from '../../images/casting2.png'
import casting3 from '../../images/casting3.png'
import axios from 'axios'
const Cast = () => {
  const navigate = useNavigate()
  const [btn, setBtn] = useState(false)
  const inputChng = async e => {
    const name = e.target.name
    try {
      const response = await axios.post(
        'http://localhost:800/connection/toggle',
        { name }
      )
      setBtn(response.data.btnStatus)
    } catch (error) {
      console.log('error while fetching data ', error)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:800/connection/status')
      console.log("test ",response)
      setBtn(response.data.castBtn.btnStatus)
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
        <h1 className='heading_primary'>Cast</h1>
        <div style={{ margin: '10px' }}>
          <span className='setBtn'>
            <div className='btnText' style={{ textAlign: 'left' }}>
              <h3>Cast</h3>
              <h5>Cast screen content to an external monitor</h5>
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
                checked={btn}
                name='CastBtn'
                onChange={inputChng}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText'>
              <h4>Demos</h4>
              <h5>Casting documents ,games,photos,and videos</h5>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <hr />
          <h5 className='text_secondary'>SPECIAL FEATURES</h5>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              border: 'none',
              margin: '10px 0px',
              padding: '10px',

              borderRadius: '15px',
              background: '#e8f9ff;'
            }}
          >
            <img src={casting} style={{ width: '150px' }} alt='casting' />
          </div>
          <h4 className='text_primary'>Minimise window</h4>
          <h5 className='text_secondary'>
            Minimise the window that's being cast to be able to use other
            features of your phone
          </h5>
          <div className='Cast'>
            <img src={casting2} style={{ width: '150px' }} alt='casting' />
          </div>
          <h4 className='text_primary'>Cast with screee off</h4>
          <h5 className='text_secondary'>
            You can keep casting when the screen of your device is turned off
            .This feature decreases power consumption
          </h5>
          <div className='Cast'>
            <img src={casting3} style={{ width: '150px' }} alt='casting' />
          </div>
          <h4 className='text_primary'>Hide private items</h4>
          <h5 className='text_secondary'>
            Don't display floating notifications,incoming calls,and other
            private items on external monitors
          </h5>
          <hr />
          <h5 className='text_secondary'>OTHER</h5>

          <span
            className='setBtn'
            onClick={() => {
              navigate('/assistant')
            }}
          >
            <div className='btnText'>
              <h4>Help</h4>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/assistant')
            }}
          >
            <div className='btnText'>
              <h4>Privacy Policy</h4>
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

export default Cast
