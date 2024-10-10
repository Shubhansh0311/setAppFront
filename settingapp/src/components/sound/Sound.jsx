import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import media from '../../images/sound/media.png'
import ringtone from '../../images/sound/ringtone.png'
import alarm from '../../images/sound/alarm.png'
import notify from '../../images/sound/notify.png'
import clock from '../../images/sound/clock.png'
import bell from '../../images/sound/bell.png'
import phone from '../../images/sound/phone.png'
import axios from 'axios'
const Sound = () => {
  const navigate = useNavigate()

  const [dontDisturb, setDontDisturb] = useState('Off')
  const [controlNotificationSound, setControlNotificationSound] =
    useState(false)
  const [silentMode, setSilentMode] = useState(false)
  const [silentMedia, setSilentMedia] = useState(false)
  const [vibrateCall, setVibrateCall] = useState(false)
  const [vibrateSM, setVibrateSM] = useState(false)
  const [hepticFeedback, setHepticFeedback] = useState(false)
  const [mediaBar, setMediaBar] = useState(0)
  const [ringtoneBar, setRingtoneBar] = useState(0)
  const [alarmBar, setAlarmBar] = useState(0)
  const [notificationBar, setNotificationBar] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://setting-app-backend.vercel.app/sound/status')


        setSilentMedia(response.data.SilentMedia.btnStatus)

        setControlNotificationSound(
          response.data.ControlNotificationSound.btnStatus
        )
        setSilentMode(response.data.SilentMode.btnStatus)
        setHepticFeedback(response.data.HepticFeedback.btnStatus)
        setVibrateCall(response.data.VibrateForCalls.btnStatus)
        setVibrateSM(response.data.VibrateInSilentMode.btnStatus)
if(response.data.DoNotDisturb.btnStatus){
  setDontDisturb('On')
}
        // rangebars
        const Response = await axios.get('https://setting-app-backend.vercel.app/sound/getdata')

console.log("test ",Response);

        setMediaBar(Response.data.MediaBar.range)
        setRingtoneBar(Response.data.RingtoneBar.range)
        setAlarmBar(Response.data.AlarmBar.range)
        setNotificationBar(Response.data.NotificationBar.range)
      } catch (err) {
        console.log('error while fetching data ', err)
      }
    }
    fetchData()
  },[])

  const inputToggleChng = async (name, setStateFunction) => {
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/sound/toggle', {
        name
      })

      setStateFunction(response.data.btnStatus)
    } catch (error) {
      console.log('error while sending data ', error)
    }
  }
  const inputDataChange = async (e, setStateFunction) => {
    const data = {
      name: e.target.name,
      range: e.target.value
    }

    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/sound/data', {
        data
      })
      setStateFunction(response.data.range)
    } catch (error) {
      console.log('error while sending data ', error)
    }
  }

  return (
    <div className='main_container'>
      <div className='sub_container'>
        <button
          className='btn_top'
          onClick={() => {
            navigate('/')
          }}
        >
          {' '}
          {'←'}
        </button>
        <h1 className='heading_primary'>Sound and Vibration</h1>
        <div className='soundMain'>
          <div className='soundSub1'>
            <img src={bell} className='soundImg1' alt='notifications' />

            <h3>Notications</h3>
            <h4 className='text_secondary'>Droplets</h4>
          </div>

          <div className='soundSub2'>
            <div className='soundSub2_1'>
              <img src={phone} className='soundImg2' alt='ringtone' />

              <div className='soundSub2_1_1'>
                <h3>Ringtone</h3>
                <h4 className='text_secondary'>Anbe En Anbe</h4>
              </div>
            </div>
            <div className='soundSub2_2'>
              <img src={clock} className='soundImg2' alt='alarm' />
              <div className='soundSub2_1_1'>
                <h3>Alarm</h3>
                <h4 className='text_secondary'>Izmir Marsi</h4>
              </div>
            </div>
          </div>
        </div>{' '}
        <div className='soundMain2'>
          <h4 className='text_secondary h_3'>ADJUST VOLUME</h4>
          <div
           className='sound_bars'
          >
            <span style={{ display: 'flex' }}>
              <img className='soundIcons' alt='media' src={media} />
              <h3>Media</h3>
            </span>
            <div
               className='
     sliderBright-cont
       rangeBars'
            >
              <div className='sliderBright'>
                <input
                  type='range'
                  min='0'
                  max='100'
                  name='MediaBar'
                  onChange={e => inputDataChange(e, setMediaBar)}
                />{' '}
                <progress min='0' value={mediaBar} max='100'></progress>
              </div>
            </div>
          </div>
          <div
           className='sound_bars'
          >
            <span style={{ display: 'flex' }}>
              <img className='soundIcons' src={ringtone} alt='ringtone' />
              <h3>Ringtone</h3>
            </span>
            <div
               className='
     sliderBright-cont
       rangeBars'
            >
              <div className='sliderBright'>
                <input
                  type='range'
                  min='0'
                  max='100'
                  name='RingtoneBar'
                  onChange={e => inputDataChange(e, setRingtoneBar)}
                />{' '}
                <progress min='0' value={ringtoneBar} max='100'></progress>
              </div>
            </div>
          </div>
          <div
           className='sound_bars'
          >
            <span style={{ display: 'flex' }}>
              <img className='soundIcons' src={alarm} alt='alarm' />
              <h3>Alarm</h3>
            </span>
            <div
               className='
     sliderBright-cont
       rangeBars'
            >
              <div className='sliderBright'>
                <input
                  type='range'
                  min='0'
                  max='100'
                  name='AlarmBar'
                  onChange={e => inputDataChange(e, setAlarmBar)}
                />{' '}
                <progress min='0' value={alarmBar} max='100'></progress>
              </div>
            </div>
          </div>
          <div
           className='sound_bars'
          >
            <span style={{ display: 'flex' }}>
              <img className='soundIcons' src={notify} alt='notify' />
              <h3>Notifications</h3>
            </span>
            <div
               className='
     sliderBright-cont
       rangeBars'
            >
              <div className='sliderBright'>
                <input
                  type='range'
                  min='0'
                  max='100'
                  name='NotificationBar'
                  onChange={e => inputDataChange(e, setNotificationBar)}
                />{' '}
                <progress min='0' value={notificationBar} max='100'></progress>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: '12px 5px' }}>
          <button
            className='setBtn'
            onClick={() => {
              navigate('/assistant')
            }}
          >
            <div className='btnText'>
              <h4>Sound assistant</h4>
              <h5>Customize your sound settings</h5>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </button>
          <button className='setBtn'>
            <div className='btnText'>
              <h4>Control notification sounds</h4>
              <h5>
                Adjust the volume of notification <br />
                sounds separately
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
                checked={controlNotificationSound}
                onChange={e =>
                  inputToggleChng(
                    'ControlNotificationSound',
                    setControlNotificationSound
                  )
                }
              />
              <span class='slider round'></span>
            </label>
          </button>
          <hr />
          <p
            className='text_secondary'
            style={{ margin: '10px 0px', fontWeight: 'bolder' }}
          >
            SOUND OPTIONS
          </p>
          <button className='setBtn'>
            <div className='btnText'>
              <h4>Silent mode</h4>
              <h5>Silence incoming calls and notifications</h5>
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
                checked={silentMode}
                onChange={e => inputToggleChng('SilentMode', setSilentMode)}
              />
              <span class='slider round'></span>
            </label>
          </button>
          <button className='setBtn'>
            <div className='btnText'>
              <h4>Silent media in Silent mode</h4>
              <h5>Games,music,videos,and other apps</h5>
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
                checked={silentMedia}
                onChange={e => inputToggleChng('SilentMedia', setSilentMedia)}
              />
              <span class='slider round'></span>
            </label>
          </button>
          <button
            className='setBtn'
            onClick={() => {
              navigate('/doNotDisturb')
            }}
          >
            <div className='btnText'>
              <h4>Do not disturb</h4>
              <h5>
                There'll be no reminders for incoming
                <br /> calls and notification
              </h5>
            </div>
            <span className='setArrBtn'> {`${dontDisturb} >`}</span>
          </button>
          <button
            className='setBtn'
            onClick={() => {
              navigate('/additionalSettings')
            }}
          >
            <div className='btnText'>
              <h4>Additional settings</h4>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </button>
          <hr />
          <p className='text_secondary rangeBars'>
            VIBRATE
          </p>
          <div className='setBtn'>
            <h3>Vibrate for calls</h3>

            <label
              class='switch'
              style={{
                top: '0px',
                left: '0px'
              }}
            >
              <input
                type='checkbox'
                checked={vibrateCall}
                onChange={e =>
                  inputToggleChng('Vibrate for calls', setVibrateCall)
                }
              />
              <span class='slider round'></span>
            </label>
          </div>
          <div className='setBtn' style={{ marginTop: '10px' }}>
            <h3>Vibrate in Silent Mode</h3>

            <label
              class='switch'
              style={{
                top: '0px',
                left: '0px'
              }}
            >
              <input
                type='checkbox'
                checked={vibrateSM}
                onChange={e =>
                  inputToggleChng('Vibrate in Silent Mode', setVibrateSM)
                }
              />
              <span class='slider round'></span>
            </label>
          </div>
          <hr />

          <button className='setBtn'>
            <div className='btnText'>
              <h4>Haptic feedback</h4>
              <h5>
                Receive tactile response to gestures <br />
                and system controls
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
                checked={hepticFeedback}
                onChange={e =>
                  inputToggleChng('Haptic feedback', setHepticFeedback)
                }
              />
              <span class='slider round'></span>
            </label>
          </button>
          <hr />

          <button
            className='setBtn'
            onClick={() => {
              navigate('/soundEffects')
            }}
          >
            <div className='btnText'>
              <h4>Sound effects</h4>
            </div>
            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sound
