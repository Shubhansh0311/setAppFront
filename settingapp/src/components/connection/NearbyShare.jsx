import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../../images/profile.png'
import phone from '../../images/phone.png'
import axios from 'axios'
const NearbyShare = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState({
    AccountName: 'shubhansh',
    email: 'shubh19@gmail.com'
  })
  const [deviceName, setDeviceName] = useState('Redmi Note 12 Pro+')

  const [visibility, setVisibility] = useState(false)
  const [notify, setNotify] = useState(false)
  const inputChng = async (names, setStateFunction) => {
    const name = names
    try {
      const response = await axios.post(
        'http://localhost:800/connection/toggle',
        { name }
      )
      setStateFunction(response.data.btnStatus)
      // ➖👉👉👉👉👉
      const responses = await axios.post('http://localhost:800/connection/data')
      console.log(responses)
    } catch (error) {
      console.log('error while fetching data ', error)
    }
  }
  const inputDataChange = async e => {
    try {
      const data = {
        name: e.target.name,
        email: e.target.value,
        accName: e.target.id
      }

      const response = await axios.post(
        'http://localhost:800/connection/data',
        { data }
      )
      document.getElementById('DNSAccountDiv').style.display = 'none'
      document.getElementById('DNSDeviceDiv').style.display = 'none'
      // setDeviceName(response.data.)
      setAccount(response.data)
    } catch (error) {
      console.log('data not send ', error)
    }
  }
  const inputDeviceChange = async e => {
    const data = { name: 'DeviceName', deviceName: deviceName }
    const response = await axios.post('http://localhost:800/connection/data', {
      data
    })

    setDeviceName(response.data.DeviceName)
    document.getElementById('DNSDeviceDiv').style.display = 'none'
  }
  useEffect(() => {
    const fetchData = async () => {
     try {
      document.getElementById('DNSAccountDiv').style.display = 'none'

      const response = await axios.get('http://localhost:800/connection/status')

      const responses = await axios.get(
        'http://localhost:800/connection/getData'
      )

      setDeviceName(responses.data.DeviceName.DeviceName)
       



let an=account.AccountName

      setNotify(response.data.DeviceNotification.btnStatus)
      setVisibility(response.data.DeviceVisibility.btnStatus)
      setAccount(prev => ({
        ...prev,
        an:responses.data.Account
      }));
     } catch (error) {
      
     }
    }

    fetchData()
  }, [])
  const deviceChng = async e => {
    setDeviceName(e.target.value)
  }
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          style={{ marginLeft: '-3px' }}
          onClick={() => {
            navigate('/connection')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary' style={{ marginLeft: '-3px' }}>
          Nearby Share
        </h1>
        <div style={{ margin: '10px' }}>
          <h5
            style={{
              color: '#ba7340'
            }}
          >
            Account and device
          </h5>{' '}
          <span
            className='printBtn'
            onClick={() => {
              document.getElementById('DNSAccountDiv').style.display = 'block'
              document.getElementById('DNSDeviceDiv').style.display = 'none'
            }}
            style={{ marginLeft: '-18px' }}
          >
            <span>
              <img src={profile} className='nearByImg' />
            </span>
            <div style={{ textAlign: 'left', marginTop: '6px' }}>
              <h4>{account.AccountName}</h4>

              <h5 style={{ margin: '5px 0px', color: 'grey' }}>
                {' '}
                {account.email}
              </h5>
            </div>
          </span>
          <div
            className='printBtn'
            style={{ marginLeft: '-18px' }}
            onClick={() => {
              document.getElementById('DNSDeviceDiv').style.display = 'block'
              document.getElementById('DNSAccountDiv').style.display = 'none'
            }}
          >
            <span>
              <img src={phone} className='nearByImg' />
            </span>
            <div style={{ textAlign: 'left', marginTop: '6px' }}>
              <h4>Device name</h4>

              <h5 style={{ margin: '5px 0px', color: 'grey' }}>{deviceName}</h5>
            </div>
          </div>
          <div id='DNSDeviceDiv' style={{ display: 'none' }}>
            <form
              onSubmit={e => {
                e.preventDefault()
                inputDeviceChange()
              }}
              className='notifyCall DNSdiv dnsdiv'
            >
              <h3 style={{ margin: '10px 0px' }}>Device name</h3>

              <input
                className='deviceName'
                type='text'
                value={deviceName}
                required
                id='deviceName'
                name='DeviceName'
                onChange={deviceChng}
              />

              <div className='deviceNameBtns'>
                <button
                  className='deviceNameBtn'
                  onClick={() => {
                    if (deviceName != '') {
                      document.getElementById('DNSDeviceDiv').style.display =
                        'none'
                    }
                  }}
                >
                  CANCEL
                </button>
                <button type='submit' className='deviceNameBtn'>
                  RENAME
                </button>
              </div>
            </form>
          </div>
          <div id='DNSAccountDiv'>
            <div
              className='notifyCall DNSdiv'
              // style={{ display: 'none' }}
            >
              <h3 style={{ textAlign: 'center', padding: '15px' }}>
                Choose an account
              </h3>
              <div className=''>
                <input
                  type='radio'
                  value='abcdefgh1234@gmail.com'
                  id='Shubhansh Agrawal'
                  name='Account'
                  onClick={e => {
                    e.preventDefault()
                    inputDataChange(e)
                  }}
                />
                <label htmlFor='Shubhansh Agrawal'>
                  <span className='printBtn'>
                    <span>
                      <img src={profile} className='nearByImg' />
                    </span>
                    <div style={{ textAlign: 'left', marginTop: '6px' }}>
                      <h3>Shubhansh Agrawal</h3>

                      <h4 style={{ margin: '5px 0px', color: 'grey' }}>
                        {' '}
                        abcdefgh1234@gmail.com
                      </h4>
                    </div>
                  </span>
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  value='oriental@gmail.com'
                  id='SHUBHANSH'
                  onClick={e => {
                    e.preventDefault()
                    inputDataChange(e)
                  }}
                  name='Account'
                />
                <label htmlFor='SHUBHANSH'>
                  {' '}
                  <span className='printBtn'>
                    <span>
                      <img src={profile} className='nearByImg' />
                    </span>
                    <div style={{ textAlign: 'left', marginTop: '6px' }}>
                      <h3>SHUBHANSH AGRAWAL</h3>

                      <h4 style={{ margin: '5px 0px', color: 'grey' }}>
                        {' '}
                        oriental@gmail.com
                      </h4>
                    </div>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <span className='setBtn' type='radio' name='radio'>
            <div className='btnText align'>
              <h4>Device visibility</h4>
              <h5 style={{ color: 'grey', fontSize: '15px' }}>
                all nearby contacts can share with you
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
                onChange={e => inputChng('DeviceVisibility', setVisibility)}
                checked={visibility}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Data</h4>
              <h5 style={{ color: 'grey', fontSize: '15px' }}>
                Data may be used for small files <br /> {`(charges may apply)`}
              </h5>
            </div>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Show notification</h4>
              <h5 style={{ color: 'grey', fontSize: '15px' }}>
                When devices are sharing nearby
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
                onChange={e => inputChng('DeviceNotification', setNotify)}
                checked={notify}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span>
            <i
              style={{ fontSize: '23px', marginLeft: '2px' }}
              className='fa-solid fa-circle-info'
            ></i>
          </span>
          <p style={{ color: 'grey', margin: '10px 4px' }}>
            Nearby Share uses Bluetooth scannig to find nearby device.
          </p>
          <p style={{ color: 'grey', margin: '10px 4px' }}>
            If 'Show notification' is turned on ,Bluetooth scannning is used to
            notify you if someone wants to share with you ,even when Nearby
            Share is turned off.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NearbyShare
