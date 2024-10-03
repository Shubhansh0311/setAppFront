import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SimCardSettingsTwo = () => {
  const [sim2, setSim2] = useState('sim2')
  const [newSim2, setNewSim2] = useState('sim2')
  const [num2, setNum2] = useState('0000000000')
  const [newNum2, setNewNum2] = useState('000000000')

  // toggle buttons
  const [sim2TurnOn, setSim2TurnOn] = useState(false)
  const [sim2Volte, setSim2Volte] = useState(false)
  const [sim2WifiCall, setSim2WifiCall] = useState(false)

  const handleToggleChng = async (name, setStateFunction) => {
    try {
      const data = { name: name }
      const response = await axios.post(
        'http://localhost:800/sim/toggleData',
        data
      )
      setStateFunction(response.data.btnStatus)
    } catch (err) {
      console.log('unable to set toggle span on/off ', err)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const obj = { id: 'sim2', name: newSim2 }
    try {
      const response = await axios.post('http://localhost:800/sim/setSim', obj)

      setSim2(newSim2)
      closeName()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sims = await axios.get('http://localhost:800/sim/getSim')
        setSim2(sims.data.sim2.name)

        // phone
        const phones = await axios.get('http://localhost:800/sim/getPhone')
        setNum2(phones.data.phone2.phone)

        const toggleBtnsData = await axios.get(
          'http://localhost:800/sim/getToggleStatus'
        )
        setSim2WifiCall(toggleBtnsData.data.togglesData.sim2WifiCall.btnStatus)
        setSim2TurnOn(toggleBtnsData.data.togglesData.sim2TurnOn.btnStatus)
        setSim2Volte(toggleBtnsData.data.togglesData.sim2Volte.btnStatus)
      } catch (error) {
        console.log('error is found ', error)
      }
    }
    fetchData()
  }, [])

  // simnum

  const handlePhoneSubmit = async e => {
    e.preventDefault()
    const obj = { id: 'phone2', number: newNum2 }
    try {
      const response = await axios.post(
        'http://localhost:800/sim/setPhone',
        obj
      )

      setNum2(newNum2)
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
                name='sim2TurnOn'
                onChange={() => handleToggleChng('sim2TurnOn', setSim2TurnOn)}
                checked={sim2TurnOn}
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
            id='simName2'
            onClick={() => {
              document.getElementById('simInfoNumber').style.display = 'none'

              document.getElementById('simInfoName').style.display = 'block'
            }}
          >
            <h4>Edit SIM card name</h4>
            <span>
              {sim2}
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
              style={{ textAlign: 'center' }}
            >
              <input
                type='text'
                value={newSim2}
                required
                onChange={e => setNewSim2(e.target.value)}
                className='renameText'
              />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button className='dnsBtn' id='ok' onClick={closeName}>
                  Cancel
                </button>
                <button
                  className='dnsBtn'
                  id='ok'
                  style={{ padding: '10px 40px' }}
                  type='submit'
                >
                  OK
                </button>
              </div>
            </form>
          </div>
          <span
            className='setBtn'
            id='simNumber'
            onClick={() => {
              document.getElementById('simInfoName').style.display = 'none'
              document.getElementById('simInfoNumber').style.display = 'block'
            }}
          >
            <h4>Edit SIM card number</h4>
            <span>
              {num2}
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <div id='simInfoNumber' style={{ display: 'none' }}>
            <h3 style={{ textAlign: 'center', padding: '15px' }}>
              Edit SIM card number
            </h3>
            <form
              method='POST'
              id='simName'
              onSubmit={handlePhoneSubmit}
              style={{ textAlign: 'center' }}
            >
              <input
                type='text'
                required
                maxLength={10}
                value={newNum2}
                minLength={10}
                className='renameText'
                id='phone2'
                onChange={e => setNewNum2(e.target.value)}
              />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button className='dnsBtn' id='cancel' type='submit'>
                  Cancel
                </button>
                <button className='dnsBtn' id='ok' onClick={closeNumber}>
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
                name='sim2Volte'
                checked={sim2Volte}
                onChange={() => handleToggleChng('sim2Volte', setSim2Volte)}
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
                name='sim2WifiCall'
                checked={sim2WifiCall}
                onChange={() =>
                  handleToggleChng('sim2WifiCall', setSim2WifiCall)
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

export default SimCardSettingsTwo
