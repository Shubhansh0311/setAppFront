import React from 'react'
import { useNavigate } from 'react-router-dom'
import printer from '../../images/printer.png'
import plus from '../../images/plus.png'
const Printing = () => {
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
        <h1 className='heading_primary'>Printing</h1>

        <div style={{ margin: '10px' }}>
          <h5 style={{ margin: '30px 0px' }} className='text_secondary'>
            PRINT SERVICES
          </h5>
          <button className='printBtn'>
            <span>
              <img src={printer} className=' printImg' />
            </span>
            <div className='setBtn'>
              <h3>System Printing services</h3>

              <i className='fa-solid fa-greater-than'></i>
            </div>
          </button>
          <button className='printBtn'>
            <span>
              <img src={plus} className=' plusImg' />
            </span>
            <div className='setBtn'>
              <h3>Add service</h3>

              <i className='fa-solid fa-greater-than'></i>
            </div>
          </button>
          <hr />
          <h5 style={{ margin: '20px 0px' }} className='text_secondary'>
            OTHER
          </h5>
          <button
            className='setBtn'
            onClick={() => {
              navigate('/aboutPrinting')
            }}
          >
            <div className='btnText align'>
              <h3>About printing</h3>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Printing
