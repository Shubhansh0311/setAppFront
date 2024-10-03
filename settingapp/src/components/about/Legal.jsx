import React from 'react'
import { useNavigate } from 'react-router-dom'

const Legal = () => {
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container '>
      <span
            className='btn_top'
            onClick={() => {
              navigate('/details')
            }}
          >
            {' '}
            {'←'}
          </span>
          <h1 className='heading_primary'>Legal information</h1>
        <div style={{ margin: '15px' }}>
        
          <div className='set'>
            <h4 className='text_primary'>Open source licences</h4>
            <span
              onClick={() => {
                navigate('/details')
              }}
              className='btn'
            >
              {'>'}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>Google legal</h4>
            <span
              onClick={() => {
                navigate('/details')
              }}
              className='btn'
            >
              {'>'}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>Google Play system update licenses</h4>
            <span
              onClick={() => {
                navigate('/details')
              }}
              className='btn'
            >
              {'>'}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>Terms of Service</h4>
            <span
              onClick={() => {
                navigate('/details')
              }}
              className='btn'
            >
              {'>'}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>Privacy Policy</h4>
            <span
              onClick={() => {
                navigate('/details')
              }}
              className='btn'
            >
              {'>'}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>RF Exposure Information</h4>
            <span
              onClick={() => {
                navigate('/details')
              }}
              className='btn'
            >
              {'>'}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>User Experience Programme</h4>
            <span
              onClick={() => {
                navigate('/details')
              }}
              className='btn'
            >
              {'>'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legal
