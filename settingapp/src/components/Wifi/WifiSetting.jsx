import React from 'react'
import { useNavigate } from 'react-router-dom'

const WifiSetting = () => {
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/wifi')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Additional settings</h1>
        <div style={{ margin: '10px' }}>
          <h3
            className='text_secondary'
            style={{ fontWeight: 'normal', fontSize: '13px' }}
          >
            MANAGE Wi-Fi CONNECTION
          </h3>

          <span
            className='setBtn'
            onClick={() => {
              navigate('/manageNetwork')
            }}
          >
            <div className='btnText'>
              <h3>Manage saved networks</h3>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>{' '}
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/wifi')
            }}
          >
            <div className='btnText'>
              <h3>Install certificates</h3>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>{' '}
          </span>
          <hr />
          <h3
            className='text_secondary'
            style={{ fontWeight: 'normal', fontSize: '13px' }}
          >
            OTHER CONNECTION METHODS
          </h3>

          <span
            className='setBtn'
            onClick={() => {
              navigate('/wifi')
            }}
          >
            <div className='btnText'>
              <h3>Wi-Fi Direct</h3>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>{' '}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WifiSetting
