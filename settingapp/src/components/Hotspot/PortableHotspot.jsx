import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import updown from '../../images/updown.png'
// import '../../JS/run'
import axios from 'axios'
const PortableHotspot = () => {
  const navigate = useNavigate()
  const [displays, setDisplays] = useState({
    option1: 'none',
    option2: 'none',
    option3: 'none'
  })

  const [pass, setPass] = useState('none')
  const [network, setNetwork] = useState('')
  const [password, setPassword] = useState('')
  const [security, setSecurity] = useState('None')
  const [SSID, setSSID] = useState('Yes')
  const [isRequired, setIsRequired] = useState(false)
  const [APBand, setAPBand] = useState('2.4 GHz')

  const handleSubmit = async e => {
    e.preventDefault()
    // console.log(network,password);
    try {
      const response = await axios.post('http://localhost:800/hotspot/data', {
        name: e.target.name,
        networkName: network,
        password: password,
        SSID: SSID,
        security: security,
        APBand: APBand
      })

      navigate('/hotspot')
      setPass('none')
    } catch (err) {
      console.log('error while sending data ', err)
    }
  }
  const inputChange = async (e, setStateFunction) => {
    try{setStateFunction(e.target.id)

    setDisplays({ option1: 'none', option2: 'none', option3: 'none' })}
    catch(err){
      console.log("error while sending data ");
    }
  }

  return (
    <div className='main_container'>
      <div className='sub_container'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <span
            className='btn_top'
            onClick={() => {
              navigate('/hotspot')
            }}
          >
            <i class='fa-solid fa-xmark' style={{ color: '#b8bdc7' }}></i>
          </span>

          <button form='networkForm' type='submit' className='btn_top'>
            <i class='fa-solid fa-check' style={{ color: '#b8bdc7' }}></i>
          </button>
        </div>

        <h1 className='heading_primary'>Set up Portable Hotspot</h1>
        <br />
        <form
          onSubmit={handleSubmit}
          id='networkForm'
          name='hotspotForm'
          style={{ padding: '5px' }}
        >
          <input
            type='text'
            required
            name='network'
            placeholder='Network name'
            onChange={e => {
              setNetwork(e.target.value)
            }}
            className='renameText'
          />
          <input
            style={{ display: `${pass}` }}
            type='password'
            id='password'
            name='password'
            onChange={e => {
              setPassword(e.target.value)
            }}
            required={isRequired}
            placeholder='password'
            className='renameText'
          />
        </form>
        <hr />

        <div
          className='NotifyDiv'
          style={{ margin: '0px 15px' }}
          onClick={() => {
            setDisplays({ option1: 'block', option2: 'none', option3: 'none' })
          }}
        >
          <h3>Security</h3>

          <div className='NotifyInDiv'>
            <p>{security}</p>
            <img src={updown} className='soundUpDown' alt='upDown' />
          </div>
        </div>
        <div className='wifiDivs'>
          <div
            className='notifyCall '
            id='Security'
            style={{ display: `${displays.option1}` }}
          >
            <form>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='None'
                  checked={security == 'None'}
                  name='Security'
                  onClick={e => {
                    inputChange(e, setSecurity)
                    setPass('none')
                  }}
                />
                <label
                  htmlFor='None'
                  style={{ borderRadius: '15px 15px 0px 0px' }}
                >
                  None
                </label>
              </span>

              <span className='soundBtn'>
                <input
                  type='radio'
                  id='WPA2-Personal'
                  name='Security'
                  checked={security == 'WPA2-Personal'}
                  onClick={e => {
                    inputChange(e, setSecurity)
                    setIsRequired(true)

                    setPass('block')
                  }}
                />
                <label htmlFor='WPA2-Personal'>WPA2-Personal</label>
              </span>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='WPA3-Personal'
                  name='Security'
                  checked={security == 'WPA3-Personal'}
                  onClick={e => {
                    inputChange(e, setSecurity)
                    setIsRequired(true)

                    setPass('block')
                  }}
                />
                <label htmlFor='WPA3-Personal'>WPA3-Personal</label>
              </span>
            </form>
          </div>
        </div>
        <div
          className='NotifyDiv'
          style={{ margin: '20px 15px' }}
          onClick={() => {
            setDisplays({ option1: 'none', option2: 'block', option3: 'none' })
          }}
        >
          <h3>Select AP Band</h3>

          <div className='NotifyInDiv'>
            <p>{APBand}</p>
            <img src={updown} className='soundUpDown' alt='upDown' />
          </div>
        </div>
        <div className='wifiDivs'>
          <div
            className='notifyCall'
            id='APBand'
            style={{ display: `${displays.option2}` }}
          >
            <form>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='2.4 GHz'
                  checked={APBand == '2.4 GHz'}
                  name='APBand'
                  onClick={e => inputChange(e, setAPBand)}
                />
                <label
                  htmlFor='2.4 GHz'
                  style={{ borderRadius: '15px 15px 0px 0px' }}
                >
                  2.4 GHz
                </label>
              </span>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='5 GHz'
                  checked={APBand == '5 GHz'}
                  name='APBand'
                  onClick={e => inputChange(e, setAPBand)}
                />
                <label htmlFor='5 GHz'>5 GHz</label>
              </span>
            </form>
          </div>
        </div>
        <div
          className='NotifyDiv'
          style={{ margin: '20px 15px' }}
          onClick={() => {
            setDisplays({ option1: 'none', option2: 'none', option3: 'block' })
          }}
        >
          <h3>Hide its SSID</h3>

          <div className='NotifyInDiv'>
            <p>{SSID}</p>
            <img src={updown} className='soundUpDown' alt='upDown' />
          </div>
        </div>
        <div className='wifiDivs'>
          <div
            className='notifyCall'
            id='SSID'
            style={{ display: `${displays.option3}` }}
          >
            <form>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='No'
                  checked={SSID == 'No'}
                  name='SSID'
                  onClick={e => inputChange(e, setSSID)}
                />
                <label
                  htmlFor='No'
                  style={{ borderRadius: '15px 15px 0px 0px' }}
                >
                  No
                </label>
              </span>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='Yes'
                  checked={SSID == 'Yes'}
                  name='SSID'
                  onClick={e => inputChange(e, setSSID)}
                />
                <label htmlFor='Yes'>Yes</label>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortableHotspot
