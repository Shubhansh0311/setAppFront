import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SimCardSettings = () => {
  const [sim1, setSim1] = useState('sim1')
  const [newSim1, setNewSim1] = useState('')
  const [num1, setNum1] = useState('')
  const [newNum1, setNewNum1] = useState('')

  // toggle buttons
  const [sim1TurnOn, setSim1TurnOn] = useState(false)
  const [sim1Volte, setSim1Volte] = useState(false)
  const [sim1WifiCall, setSim1WifiCall] = useState(false)

  const handleToggleChng = async (name, setStateFunction) => {
    try {
      const data = { name: name }
      const response = await axios.post(
        'https://setting-app-backend.vercel.app/sim/toggleData',
        data
      )
      setStateFunction(response.data.btnStatus)
    } catch (err) {
      console.log('unable to set toggle span on/off ', err)
    }
  }
  const handleSubmit = async e => {
    e.preventDefault()

    const obj = { id: 'sim1', name: newSim1 }
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/sim/setSim', obj)
      setSim1(newSim1)
      closeName()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sims = await axios.get('https://setting-app-backend.vercel.app/sim/getSim')
        setSim1(sims.data.sim1.name)
        // phone
        const phones = await axios.get('https://setting-app-backend.vercel.app/sim/getPhone')
        setNum1(phones.data.phone1.phone)
        const toggleBtnsData = await axios.get(
          'https://setting-app-backend.vercel.app/sim/getToggleStatus'
        )
        
        
        setSim1WifiCall(toggleBtnsData.data.togglesData.sim1WifiCall.btnStatus)
        setSim1TurnOn(toggleBtnsData.data.togglesData.sim1TurnOn.btnStatus)
        setSim1Volte(toggleBtnsData.data.togglesData.sim1Volte.btnStatus)
      } catch (error) {
        console.log('error is found ', error)
      }
    }
    fetchData()
  }, [])

  // simnum

  const handlePhoneSubmit = async e => {
    e.preventDefault()
    const obj = { id: 'phone1', number: newNum1 }
    try {
      const response = await axios.post(
        'https://setting-app-backend.vercel.app/sim/setPhone',
        obj
      )
      setNum1(newNum1)
      closeNumber()
    } catch (err) {
      console.log(err)
    }
  }

  const navigate = useNavigate()
  const closeName = () => {
    document.getElementById('simInfoName').style.display = 'none'
  }
  const closeNumber = () => {
    document.getElementById('simInfoNumber').style.display = 'none'
  }
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/sim')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Sim Card Settings</h1>
        <div id='simDiv' style={{ margin: '10px ' }}>
          <span className='setBtn'>
            <div className='btnText align' style={{ fontSize: '20px' }}>
              <h4>Turn on</h4>
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
                checked={sim1TurnOn}
                onChange={() => handleToggleChng('sim1TurnOn', setSim1TurnOn)}
                name='sim1TurnOn'
              />
              <span class='slider round'></span>
            </label>
          </span>
          <hr />
          <p style={{ margin: '25px 0px' }} className='text_secondary'>
            EDIT SIM INFO{' '}
          </p>

          <span
            className='setBtn'
            id='simName'
            onClick={() => {
              document.getElementById('simInfoNumber').style.display = 'none'

              document.getElementById('simInfoName').style.display = 'block'
            }}
          >
            <h4>Edit SIM card name</h4>
            <span>
              {sim1}
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <div id='simInfoName' style={{ display: 'none' }}>
            <h3 style={{ textAlign: 'center', padding: '15px' }}>
              Edit SIM card name
            </h3>
            <form
              method='POST'
              onSubmit={handleSubmit}
              id='simName'
              required
              style={{ textAlign: 'center' }}
            >
              <input
                type='text'
                onChange={e => setNewSim1(e.target.value)}
                className='renameText'
                required
                value={newSim1}
              />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button class='dnsBtn' id='cancel'>
                  Cancel
                </button>
                <button
                  class='dnsBtn'
                  id='ok'
                  type='submit'
                  style={{ padding: '10px 40px' }}
                >
                  OK
                </button>
              </div>
            </form>
          </div>
          <span
            className='setBtn'
            id='simNumber'
            required
            onClick={() => {
              document.getElementById('simInfoName').style.display = 'none'
              document.getElementById('simInfoNumber').style.display = 'block'
            }}
          >
            <h4>Edit SIM card number</h4>
            <span>
              {num1}
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <div id='simInfoNumber' style={{ display: 'none' }}>
            <h3 style={{ textAlign: 'center', padding: '15px' }}>
              Edit SIM card number
            </h3>
            <form
              method='POST'
              id='phone1'
              required
              onSubmit={handlePhoneSubmit}
              style={{ textAlign: 'center' }}
            >
              <input
                type='phone'
                className='renameText'
                value={newNum1}
                maxLength={10}
                required
                minLength={10}
                placeholder='enter sim number'
                onChange={e => setNewNum1(e.target.value)}
              />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button className='dnsBtn' id='cancel' onClick={closeNumber}>
                  Cancel
                </button>
                <button
                  class='dnsBtn'
                  id='ok'
                  type='submit'
                  style={{ padding: '10px 40px' }}
                >
                  OK
                </button>
              </div>
            </form>
          </div>
          <hr />
          <p style={{ margin: '25px 0px' }} className='text_secondary'>
            MOBILE NETWORK
          </p>

          <span
            className='setBtn'
            onClick={() => {
              //   navigate('')
            }}
          >
            <h4>Access point name</h4>
            <span>
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/preferNetworkType')
            }}
          >
            <h4>Preferred network type</h4>
            <span>
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/mobileNetwork')
            }}
          >
            <h4>Mobile networks</h4>
            <span>
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span className='setBtn'>
            <div className='btnText align' style={{ textAlign: 'left' }}>
              <h4>Use VoLTE</h4>
              <h5>Use VoLTE to improve the quality of voice calls</h5>
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
                checked={sim1Volte}
                onChange={() => handleToggleChng('sim1Volte', setSim1Volte)}
                name='sim1Volte'
              />
              <span class='slider round'></span>
            </label>
          </span>
          <hr />
          <p style={{ margin: '25px 0px' }} className='text_secondary'>
            Wi-Fi CALLS
          </p>
          <span className='setBtn'>
            <div className='btnText align' style={{ textAlign: 'left' }}>
              <h4>Make calls using Wi-Fi</h4>
              <h5>Use Wi-Fi to make and recieve calls whenever possible</h5>
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
                checked={sim1WifiCall}
                name='sim1WifiCall'
                onChange={() =>
                  handleToggleChng('sim1WifiCall', setSim1WifiCall)
                }
              />
              <span class='slider round'></span>
            </label>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SimCardSettings
