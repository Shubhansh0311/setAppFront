import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import updown from '../../images/updown.png'
// import '../../JS/run'
import axios from 'axios'
const AddNetwork = () => {
  const navigate = useNavigate()
  const [displays, setDisplays] = useState({
    option1: 'none',
    option2: 'none',
    option3: 'none'
  })

  const [pass,setPass]=useState('none')
  const [network, setNetwork] = useState('')
  const [password, setPassword] = useState('')
  const [security, setSecurity] = useState('None')
  const [hidden, setHidden] = useState('Yes')
  const [isRequired, setIsRequired] = useState(false)
  const [privacy, setPrivacy] = useState('Use Randomised MAC')

  const handleSubmit = async e => {
    e.preventDefault()
    // console.log(network,password);
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/wifi/data', {
        name: e.target.name,
        networkName: network,
        password: password,
        hidden: hidden,
        security: security,
        privacy: privacy
      })

      navigate(-1)
      document.getElementById('password').style.display = 'none'
    } catch (err) {
      console.log('error while sending data ', err)
    }
  }
  const inputChange = async (e, setStateFunction) => {
    setStateFunction(e.target.id)
    // document.getElementById(e.target.name).style.display = 'none'
    setDisplays({option1:"none",option2:'none',option3:'none'})
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
              navigate('/wifi')
            }}
          >
            <i class='fa-solid fa-xmark' style={{ color: '#b8bdc7' }}></i>
          </span>

          <button form='networkForm' type='submit' className='btn_top'>
            <i class='fa-solid fa-check' style={{ color: '#b8bdc7' }}></i>
          </button>
        </div>

        <h1 className='heading_primary'>Add network</h1>
        <br />
        <form
          onSubmit={handleSubmit}
          id='networkForm'
          name='networkForm'
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
                  onClick={e => {inputChange(e, setSecurity)
                  setPass('none')
                  }
                  }
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
                  id='WEP'
                  checked={security == 'WEP'}
                  name='Security'
                  onClick={e => {
                    inputChange(e, setSecurity)
                    setIsRequired(true)
                   setPass('block')
                  }}
                />
                <label htmlFor='WEP'>WEP</label>
              </span>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='WPA2'
                  name='Security'
                  checked={security == 'WPA2'}
                  onClick={e => {
                    inputChange(e, setSecurity)
                    setIsRequired(true)

                 setPass('block')
                  }}
                />
                <label htmlFor='WPA2'>WPA/WPA2-Personal</label>
              </span>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='WPA3'
                  checked={security == 'WPA3'}
                  name='Security'
                  onClick={e => {inputChange(e, setSecurity)
                  setPass('none')
                  }}
                />
                <label
                  htmlFor='WPA3'
                  style={{ borderRadius: '0px 0px 15px 15px' }}
                >
                  WPA3-Personal
                </label>
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
          <h3>Privacy</h3>

          <div className='NotifyInDiv'>
            <p>{privacy}</p>
            <img src={updown} className='soundUpDown' alt='upDown' />
          </div>
        </div>
        <div className='wifiDivs'>
          <div
            className='notifyCall'
            id='Privacy'
            style={{ display: `${displays.option2}` }}
          >
            <form>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='Use Randomised MAC'
                  checked={privacy == 'Use Randomised MAC'}
                  name='Privacy'
                  onClick={e => inputChange(e, setPrivacy)}
                />
                <label
                  htmlFor='Use Randomised MAC'
                  style={{ borderRadius: '15px 15px 0px 0px' }}
                >
                  Use randomised MAC
                </label>
              </span>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='Use Device MAC'
                  checked={privacy == 'Use Device MAC'}
                  name='Privacy'
                  onClick={e => inputChange(e, setPrivacy)}
                />
                <label htmlFor='Use Device MAC'>Use device MAC</label>
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
          <h3>Hidden network</h3>

          <div className='NotifyInDiv'>
            <p>{hidden}</p>
            <img src={updown} className='soundUpDown' alt='upDown' />
          </div>
        </div>
        <div className='wifiDivs'>
          <div
            className='notifyCall'
            id='Hidden'
            style={{ display: `${displays.option3}` }}
          >
            <form>
              <span className='soundBtn'>
                <input
                  type='radio'
                  id='No'
                  checked={hidden == 'No'}
                  name='Hidden'
                  onClick={e => inputChange(e, setHidden)}
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
                  checked={hidden == 'Yes'}
                  name='Hidden'
                  onClick={e => inputChange(e, setHidden)}
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

export default AddNetwork
