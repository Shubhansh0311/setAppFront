import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/doc.png'
import axios from 'axios'
const Backup = () => {
  const navigate = useNavigate()

  const [restore, setRestore] = useState(false)

  useEffect(() => {
    // Fetch WiFi status from the server when the component mounts
    const fetchRestoreStatus = async () => {
      try {
        const response = await axios.get(
          'https://setting-app-backend.vercel.app/about/restoreStatus'
        )
        console.log(response)
        setRestore(response.data.btnStatus)
      } catch (error) {
        console.error(error)
      }
    }

    fetchRestoreStatus() // Call the function to fetch WiFi status
  }, []) // Empty dependency array ensures the effect runs once after the initial render

  const toggleRestore = async e => {
    try {
      const data = { name: e.target.name, toggle: !restore }
      // Toggle WiFi status in the database
      const response = await axios.post(
        'https://setting-app-backend.vercel.app/about/toggleRestore',

        { data }
      )
      // Update the WiFi status in the state based on the response from the server
      setRestore(response.data.btnStatus)
    } catch (error) {
      console.error(error)
    }
  }

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
        <h1 className='heading_primary'>Back up and restore</h1>
        <div style={{ margin: '12px' }}>
          <div className='imgCenter'>
            <img className='img' alt='img' src={logo}></img>
          </div>
          <hr />
          <h4 className='text_secondary'>LOCAL</h4>

          <div className='backUpStyle'>
            <span>
              <i
                class='fa-solid fa-mobile'
                style={{ color: '#6899ee', margin: '0px 5px' }}
              ></i>
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4 className='text_primary'>Mobile device</h4>
              <p className='text_secondary'>
                Back up and restore items on this device
              </p>
            </div>
          </div>
          <div className='backUpStyle'>
            <span>
              <i
                class='fa-solid fa-computer'
                style={{ color: '#5b92f1', margin: '0px 5px' }}
              ></i>
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4 className='text_primary'>Computer</h4>
              <p className='text_secondary'>
                Back up and restore items using a computer
              </p>
            </div>
          </div>
          <hr />
          <p className='text_secondary'>CLOUD</p>
          <h3 className='text_primary'>
            Xiaomi CLoud <br />{' '}
            <span className='text_secondary'>
              Sync the list of apps,back up system settings and data
            </span>
          </h3>

          <hr />
          <h4 className='text_secondary'>GOOGLE BACKUPS</h4>
          <div className='set'>
            <h4 className='text_primary'>
              Back up my data
              <br /> <span className='text_secondary'>On </span>
            </h4>
            <span
              className='btn'
              onClick={() => {
                navigate('/about')
              }}
            >
              {'>'}{' '}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>
              Backup acconunt
              <br /> <span className='text_secondary'>abc123@gmail.com </span>
            </h4>
            <span
              className='btn'
              onClick={() => {
                navigate('/about')
              }}
            >
              {'>'}{' '}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>
              Automatic restore
              <br />{' '}
              <span className='text_secondary'>
                When reinstalling an app restore <br /> backend-up settings and
                data{' '}
              </span>
            </h4>
            <label class='switch'>
              <input
                type='checkbox'
                name='restoreBtn'
                checked={restore}
                onChange={toggleRestore}
              />
              <span class='slider round'></span>
            </label>
          </div>
          <hr />
          <div className='set'>
            <h4 className='text_primary'>Help and feedback</h4>
            <span
              className='btn'
              onClick={() => {
                navigate('/about')
              }}
            >
              {'>'}{' '}
            </span>
          </div>
          <div className='set'>
            <h4 className='text_primary'>Google Account</h4>
            <span
              className='btn'
              onClick={() => {
                navigate('/about')
              }}
            >
              {'>'}{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backup
