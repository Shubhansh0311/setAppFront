import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import chip from '../../images/chip.png'
const Details = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/about')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Detailed info and specs</h1>
        <div className='detailsDiv_1 detailDiv'>
          <img style={{ width: '7%' }} src={chip} />
          <p className='text_secondary'>RAM</p>
          <p className='text_primary'>8.0+4.0 GB</p>
          <br />
          <img style={{ width: '7%' }} src={chip} />
          <p className='text_secondary'>CPU</p>
          <p className='text_primary'>Dimensity 1080</p>
          <p className='text_primary'>Octa-core Max 2.6GHz</p>
        </div>

        <div className='detailsDiv_2 detailDiv'>
          <p className='text_primary'>Android Version</p>
          <p className='text_secondary'>13 TP1A.221231.023</p>
        </div>
        <div className='detailsDiv_3 ' style={{ border: 'none' }}>
          <div
            style={{
              border: '1px solid grey',
              borderRadius: '15px',
              width: '44%',
              padding: '5px 6px'
              //  marginLeft:"-8px"
              // margin:'0px',
            }}
          >
            <p className='text_primary'>
              Android security <br /> update
            </p>
            <br />
            <p className='text_secondary'>2020-09-21</p>{' '}
          </div>{' '}
          <div
            style={{
              border: '1px solid grey',
              borderRadius: '15px',
              width: '44%',
              // margin:'0px',
              padding: '4px 6px'
              // marginLeft:"10px"
            }}
          >
            <p className='text_primary'>MIUI version</p>
            <br />
            <p className='text_secondary'>MIUI Global</p>
            <p className='text_secondary'>14.0.4</p>
            <p className='text_secondary'>14.0.4.0(TMOINAM)</p>{' '}
          </div>
        </div>
        <div className=' detailsDiv_4 detailDiv'>
          <p className='text_primary'>Model</p>
          <p className='text_secondary'>22321213AP</p>
          <p className='text_primary'>Baseband version</p>
          <p className='text_secondary'>MOLY.NR.TC8.PS4.SP.C5.P64</p>
          <p className='text_primary'>Kernel version</p>
          <p className='text_secondary'>22.33.443.g10f0e8e345e</p>
        </div>
        <div className='detailsDiv_5 detailDiv'>
          <p className='text_primary'>Internal storage</p>
          <p className='text_secondary'>Available storage 146.4GB / 256GB</p>
        </div>
        <div className='detailsDiv_6 detailDiv'>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/information')
            }}
          >
            <div className='btnText'>
              <h4>Inportant safety information</h4>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/legal')
            }}
          >
            <div className='btnText'>
              <h4>Legal information</h4>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>

          <span
            className='setBtn'
            onClick={() => {
              navigate('/status')
            }}
          >
            <div className='btnText'>
              <h4>Status</h4>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <p className='text_secondary' style={{ marginLeft: '5px' }}>
            Phone number,signal,etc.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
