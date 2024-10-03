import React from 'react'
import { useNavigate } from 'react-router-dom'
import trash from '../../images/trash.png'
const Certification = () => {
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
        <h1 className='heading_primary'>Certification</h1>

        <div className='core_container'>
          <p className='text_secondary'>Model 1212123UA </p>
          <p className='text_primary'>BIS Standard Mark </p>
          <br />
          <p className='text_secondary' style={{ textAlign: 'center' }}>
            IS 12321(Part1)/IEC 90232-Is 23121(Part 3)
          </p>
          <span
            style={{ fontSize: '50px', border: '1px double' }}
            className='text_secondary'
          >
            <i class='fa-brands fa-centos'></i>
          </span>
          <p className='text_secondary'>R-34241234</p>
          <p className='text_secondary'>www.bis.gov.in</p>
          <p className='text_primary'>E-Waste</p>
          <img style={{ width: '30px', height: 'auto' }} src={trash} />
        </div>
      </div>
    </div>
  )
}

export default Certification
