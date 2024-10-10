import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SoundAssistant = () => {
  const [adjustMediaSound, setAdjustMediaSound] = useState(false)
  const [multipleAudioSrcs, setMultipleAudioSrcs] = useState(false)
  const [allowSpeakerSound, setAllowSpeakerSound] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://setting-app-backend.vercel.app/sound/status')
        // console.log(response)
        setAdjustMediaSound(response.data.AdjustMediaSound.btnStatus)
        setAllowSpeakerSound(response.data.AllowSpeakerSound.btnStatus)
        setMultipleAudioSrcs(response.data.MultipleAudioSrcs.btnStatus)
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
              <h4>Adjust media sound in multiple apps</h4>
              <h5>
                Adjust sound for individual apps while multiple apps play audio
                simultaneouly
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
                checked={adjustMediaSound}
                onChange={e =>
                  inputToggleChng('AdjustMediaSound', setAdjustMediaSound)
                }
              />
              <span class='slider round'></span>
            </label>
          </span>

          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Multiple audio sources</h4>
              <h5>Don't adjust media volume during incoming notifications</h5>
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
                checked={multipleAudioSrcs}
                onChange={e =>
                  inputToggleChng('MultipleAudioSources', setMultipleAudioSrcs)
                }
              />

              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Allow speaker sound</h4>
              <h5>
                Allow sound for incoming calls notifications when accessories
                are connected
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
                checked={allowSpeakerSound}
                onChange={e =>
                  inputToggleChng('AllowSpeakerSound', setAllowSpeakerSound)
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

export default SoundAssistant
