import React from 'react'
import { useNavigate } from 'react-router-dom'

const Info = () => {
  // const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className='main_container '>
      <div className='sub_container infoContainer'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/details')
          }}
        >
          ←
        </span>
        <h1 className='heading_primary'>Important safety information</h1>
        <div style={{ marginLeft: '12px', textAlign: '' }}>
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
          <h3 className='heading_primary'>Child safety</h3>
          <hr style={{ margin: '8px', width: '94%' }} />
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
          <h3 className='heading_primary'>Making emergency calls</h3>
          <hr style={{ margin: '8px', width: '94%' }} />
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
          <h3 className='heading_primary'>Security notice</h3>
          <hr style={{ margin: '8px', width: '94%' }} />
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
          <h3 className='heading_primary'>Security warning</h3>
          <hr style={{ margin: '8px', width: '94%' }} />
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, dolorafremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
          <h3 className='heading_primary'>Reading mode</h3>
          <hr style={{ margin: '8px', width: '94%' }} />
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>{' '}
          <p className='text_secondary'>
            {' '}
            • ut perspiciatis accusantium doloremque laudantium, totam rem
            aperiam, doloremque laudantium, totam rem aperiam,oluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info
