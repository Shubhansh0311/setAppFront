import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdditionalSettings = () => {
  const [dialPadTones, setDialPadTones] = useState(false)
  const [tapSounds, setTapSounds] = useState(false)
  const [soundLocking, setSoundLocking] = useState(false)
  const [soundScreenshot, setSoundScreenshot] = useState(false)
  const [soundUninstalling, setSoundUninstalling] = useState(false)
  const [soundDeleting, setSoundDeleting] = useState(false)
  const [soundCharging, setSoundCharging] = useState(false)
  const [soundStartup, setSoundStartup] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://setting-app-backend.vercel.app/sound/status')
        // console.log(response)
        setTapSounds(response.data.TapSounds.btnStatus)
        setDialPadTones(response.data.DialPadTone.btnStatus)
        setSoundLocking(response.data.SoundLocking.btnStatus)
        setSoundScreenshot(response.data.SoundScreenshot.btnStatus)
        setSoundUninstalling(response.data.SoundUninstalling.btnStatus)
        setSoundDeleting(response.data.SoundDeleting.btnStatus)
        setSoundCharging(response.data.SoundCharging.btnStatus)
        setSoundStartup(response.data.SoundStartup.btnStatus)
      } catch (err) {
        console.log('error while fetching data ', err)
      }
    }
    fetchData()
  })
  const inputToggleChng = async (name, setStateFunction) => {
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/sound/toggle', {
        name
      })

      setStateFunction(response.data.btnStatus)
      // console.log(response)
    } catch (error) {
      console.log('error while sending data ', error)
    }
  }

  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/sound')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Sound assistant</h1>
        <div className='assistant_container'>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Dial pad tones</h4>
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
                checked={dialPadTones}
                onChange={e => inputToggleChng('DialPadTones', setDialPadTones)}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Tap sounds</h4>
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
                checked={tapSounds}
                onChange={e => inputToggleChng('TapSounds', setTapSounds)}
              />

              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Play sound when locking device</h4>
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
                checked={soundLocking}
                onChange={e =>
                  inputToggleChng('SoundLocking', setSoundLocking)
                }
              />

              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Play sound when taking screenshots</h4>
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
                checked={soundScreenshot}
                onChange={e =>
                  inputToggleChng('SoundScreenshot', setSoundScreenshot)
                }
              />

              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Play sound when uninstalling apps</h4>
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
                checked={soundUninstalling}
                onChange={e =>
                  inputToggleChng('SoundUninstalling', setSoundUninstalling)
                }
              />

              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Play sound when deleting items</h4>
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
                checked={soundDeleting}
                onChange={e =>
                  inputToggleChng('SoundDeleting', setSoundDeleting)
                }
              />

              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Play sound when changer is connected</h4>
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
                checked={soundCharging}
                onChange={e =>
                  inputToggleChng('SoundCharging', setSoundCharging)
                }
              />

              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Play audio at startup</h4>
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
                checked={soundStartup}
                onChange={e =>
                  inputToggleChng('SoundStartup', setSoundStartup)
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

export default AdditionalSettings
