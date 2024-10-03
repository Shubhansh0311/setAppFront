import React from 'react'
import mobile from '../../images/mobile.png'
import { useNavigate } from 'react-router-dom'
const Mishare = () => {
  const navigate = useNavigate()

  
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <button
          className='btn_top'
          onClick={() => {
            navigate('/connection')
          }}
        >
          {' '}
          {'←'}
        </button>
        <h1 className='heading_primary'>Mi Share</h1>
        <div
         className='MiShare'
        >
          <img
            src={mobile}
            style={{ width: '200px', margin: '10px 0px' }}
            alt='mobile'
          />
          <h3>Turn on Mi Share on both the devices </h3>
          <h5 className='text_secondary'>
            The other person can tap the toggle in the Nofification shade
          </h5>
        </div>
        <hr />
        <div style={{ margin: '10px' }}>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Mi Share</h4>
              <h5
                style={{ fontSize: '14px', fontWeight: 'bold' }}
                className='text_secondary'
              >
                The feature will turn off automatically after 10 minutes
              </h5>
            </div>
            <label
              class='switch'
              style={{
                top: '15px',
                left: '0px'
              }}
            >
              <input type='checkbox' />
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
              {`Redmi Note 12 Pro+ 5G`}

              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </span>
          </span>
          <hr />
          <p style={{ margin: '25px 0px' }} className='text_secondary'>
            Mi share allows you to send items wirelessly to other nearby devices
            . This feature is supported by OPPO,vivo,realme,and other smartphone
            manufacturers.You can check the list of supported devices on the
            official website of any selected brand
          </p>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/bluetoothrename')
            }}
          >
            <div className='btnText'>
              <h3>Privacy Policy</h3>
            </div>
            <span
              className='setArrBtn'
              style={{ textAlign: 'right', fontSize: '14px' }}
            >
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Mishare
