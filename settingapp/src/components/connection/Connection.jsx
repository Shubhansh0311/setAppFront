import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Connection = () => {
  const navigate = useNavigate()
  const [aeroplaneMode, setAeroplaneMode] = useState(false)
  const [VPN, setVPN] = useState(false)
  const [DnsName, setDnsName] = useState('')
  const [DNSmode, setDNSMode] = useState('Off')
  const [mode, setMode] = useState('Off')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://setting-app-backend.vercel.app/connection/status'
        )
        const responses = await axios.get(
          'https://setting-app-backend.vercel.app/connection/getData'
        )
        if (responses.data.PrivateDns.mode == 'privateHost') {
          setMode(`can't connect`)
        } else {
          setMode(responses.data.PrivateDns.mode)
        }

        setAeroplaneMode(response.data.AeroplaneMode.btnStatus)
        setVPN(response.data.VPN.btnStatus)
      } catch (err) {
        console.log('error while fetching data from the database ', err)
      }
    }
    fetchData()
  })

  const hostChanged = e => {
    setDnsName(e.target.value)
  }
  const inputToggleChng = async (e, setStateFunc) => {
    try {
      const name = e.target.name
      const response = await axios.post(
        'https://setting-app-backend.vercel.app/connection/toggle',
        { name }
      )
      setStateFunc(response.data.btnStatus)
    } catch (err) {
      // console.log(response)
      console.log('error while sending data ', err)
    }
  }

  const inputDataChange = async e => {
    const data = {
      name: e.target.name,
      mode: e.target.value,
      DnsName: DnsName
    }
    try {
      const response = await axios.post(
        'https://setting-app-backend.vercel.app/connection/data',
        {
          data
        }
      )

      setDNSMode(response.data.mode)
    } catch (err) {
      console.log('data not send ', err)
    }
  }
  const btnChange = async () => {
    if (!(DNSmode == 'privateHost')) {
      document.getElementById('DNS').style.display = 'none'
    }
  }
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Connections & sharing</h1>
        <div id='connectionDiv' style={{ margin: '10px' }}>
          <h5 style={{ margin: '30px 0px' }} className='text_secondary'>
            INTERCONNECTIVITY
          </h5>

          <span
            className='setBtn'
            onClick={() => {
              navigate('/mishare')
            }}
          >
            <div className='btnText align'>
              <h3>MiShare</h3>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <div
            className='setBtn'
            onClick={() => {
              navigate('/cast')
            }}
          >
            <span className='btnText align'>
              <h3>Cast</h3>
            </span>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
          <div
            className='setBtn'
            onClick={() => {
              navigate('/printing')
            }}
          >
            <span className='btnText align'>
              <h3>Printing</h3>
            </span>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
          <hr />
          <p style={{ margin: '30px 0px' }} className='text_secondary'>
            MANAGE CONNECTION
          </p>

          <div className='setBtn'>
            <div className='btnText align'>
              <h3>Aeroplane mode</h3>
            </div>
            <label
              class='switch'
              style={{
                top: '0px',
                left: '2px'
              }}
            >
              <input
                type='checkbox'
                checked={aeroplaneMode}
                name='AeroplaneMode'
                onChange={e => inputToggleChng(e, setAeroplaneMode)}
              />
              <span class='slider round'></span>
            </label>
          </div>

          <div className='setBtn'>
            <span className='btnText '>
              <h3>VPN</h3>
            </span>
            <label
              class='switch'
              style={{
                top: '0px',
                left: '2px'
              }}
            >
              <input
                type='checkbox'
                name='VPN'
                onChange={e => inputToggleChng(e, setVPN)}
                checked={VPN}
              />
              <span class='slider round'></span>
            </label>
          </div>

          <div>
            <div
              className='setBtn'
              onClick={() => {
                document.getElementById('DNS').style.display = 'block'
              }}
            >
              <div className='btnText '>
                <h3>Private DNS</h3>
                <span style={{ color: 'grey' }}>{mode}</span>
              </div>

              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
            <div
              className='notifyCall connectionDNS DNSdiv'
              id='DNS'
              style={{ display: 'none' }}
            >
              <h3 style={{ textAlign: 'center', padding: '15px' }}>
                Select private DNS mode
              </h3>
              <div className='soundBtn'>
                <input
                  type='radio'
                  value='Off'
                  id='off'
                  onChange={inputDataChange}
                  checked={DNSmode == 'Off'}
                  name='PrivateDns'
                />
                <label htmlFor='off'>Off</label>
              </div>

              <div className='soundBtn'>
                <input
                  type='radio'
                  value='Auto'
                  id='Auto'
                  checked={DNSmode == 'Auto'}
                  onChange={inputDataChange}
                  name='PrivateDns'
                />
                <label htmlFor='Auto'>Auto</label>
              </div>
              <div
                className='soundBtn'
                onClick={e => {
                  document.getElementById('AddDNS').style.display = 'block'
                }}
              >
                {' '}
                <input
                  type='radio'
                  id='privateHost'
                  value='privateHost'
                  onChange={inputDataChange}
                  checked={DNSmode == 'privateHost'}
                  name='PrivateDns'
                />
                <label htmlFor='privateHost'>
                  Private DNS provider hostname
                </label>
              </div>

              <div className='addDNS' id='AddDNS' style={{ display: 'none' }}>
                <form
                  id='phone1'
                  name='PrivateDns'
                  style={{ textAlign: ' center' }}
                  onSubmit={e => {
                    e.preventDefault()
                    inputDataChange(e)
                  }}
                >
                  <input
                    type='phone'
                    class='renameText'
                    maxlength='25'
                    required
                    minlength='1'
                    value={DnsName}
                    onChange={hostChanged}
                    placeholder='Enter hostname of DNS provider'
                  />
                </form>
              </div>
              <div className='dnsBtnDivv'>
                <button class='dnsBtn' id='cancel'>
                  Cancel
                </button>
                <button
                  class='dnsBtn'
                  onClick={btnChange}
                  id='ok'
                  type='submit'
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <hr />
          <div
            className='setBtn'
            onClick={() => {
              navigate('')
            }}
          >
            <div
              className='btnText align'
              onClick={e => {
                navigate('/wirelessDisplay')
              }}
            >
              <h3>Wireless display</h3>
              <p style={{ color: 'grey' }}>Connect to a display wirelessly</p>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
          <hr />
          <h5 style={{ margin: '30px 0px' }} className='text_secondary'>
            OTHER
          </h5>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/dataUsage')
            }}
          >
            <div className='btnText align'>
              <h3>Date usage</h3>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <div
            className='setBtn'
            onClick={() => {
              navigate('/resetNet')
            }}
          >
            <div className='btnText align'>
              <h3>Reset Wi-Fi,mobile networks,and Bluetooth</h3>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
          <div
            className='setBtn'
            onClick={() => {
              navigate('/chromebook')
            }}
          >
            <div
              className='btnText align'
             
            >
              <h3>Chromebook</h3>
              <p style={{ color: 'grey' }}>
                Your phone is not linked to a Chromebook
              </p>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
          <div
            className='setBtn'
            onClick={() => {
              navigate('/nearBy')
            }}
          >
            <div className='btnText align'>
              <h3>Nearby Share</h3>
              <p style={{ color: 'grey' }}>Share files with nearby devices</p>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
          <div
            className='setBtn'
            onClick={() => {
              navigate('/connection')
            }}
          >
            <div className='btnText align'>
              <h3>Android Auto</h3>
              <p style={{ color: 'grey' }}>Use apps on your car screen</p>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connection
