import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import updown from '../../images/updown.png'
const Disturb = () => {
  const navigate = useNavigate()
  const [dontDisturb, setDontDisturb] = useState(false)
  const [deviceLock, setDeviceLock] = useState(false)
  const [notifyRepeatCall, setNotifyRepeatCall] = useState(false)
  const [data, setData] = useState('None')
  const inputToggleChng = async (name, setStateFunction) => {
    try {
      const response = await axios.post('http://localhost:800/sound/toggle', {
        name
      })
      setStateFunction(response.data.btnStatus)
    } catch (error) {
      console.log('error while sending data ', error)
    }
  }
  const inputDataChange = async (name, type) => {
    const data = {
      name: name,
      type: type
    }
  
    const response = await axios.post('http://localhost:800/sound/data', {
      data
    })
document.getElementById('NotifyCall').style.display='none'
    setData(response.data.mode)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:800/sound/status')
        setDeviceLock(response.data.DeviceLock.btnStatus)
        setDontDisturb(response.data.DoNotDisturb.btnStatus)
        setNotifyRepeatCall(response.data.NotifyRepeatCall.btnStatus)

        const mode = await axios.get('http://localhost:800/sound/getData')
  
        // console.log(mode);
        setData(mode.data.NotifyCall.mode)
      } catch (error) {
        console.log("error while fetching data ",error);
      }
    }
    fetchData()
  })
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
              <h4>Do not disturb</h4>
              <h5>
                There will be no reminders for incoming calls and notification
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
                checked={dontDisturb}
                onChange={e => inputToggleChng('DoNotDisturb', setDontDisturb)}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h4>When device is locked</h4>
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
                checked={deviceLock}
                onChange={e => inputToggleChng('DeviceLock', setDeviceLock)}
              />
              <span class='slider round'></span>
            </label>
          </span>

          <div
            className='NotifyDiv'
            onClick={() => {
              document.getElementById('NotifyCall').style.display = 'block'
            }}
          >
            <h3 style={{width:"55%"}}>Notify about calls</h3>

            <div
             className='NotifyInDiv'
            >
            <p>{data}</p>
              <img src={updown} className='soundUpDown' alt='upDown' />
            </div>
          </div>
          <div
            className='notifyCall'
            id='NotifyCall'
            style={{ display: 'none' }}
          >
            <span className='soundBtn'>
              <input
                type='radio'
                id='Fromanyone'
                onChange={e => inputDataChange('NotifyCall', 'From anyone')}
                name='notify'
                checked={data == 'From anyone'}
              />
              <label
                htmlFor='Fromanyone'
                style={{ borderRadius: '15px 15px 0px 0px' }}
              >
                From anyone
              </label>
            </span>
            <span className='soundBtn'>
              <input
                type='radio'
                id='FromContactsOnly'
                checked={data == 'From contacts only'}
                onChange={e =>
                 { inputDataChange('NotifyCall', 'From contacts only')}
                }
                name='notify'
              />
              <label htmlFor='FromContactsOnly'>From contacts only</label>
            </span>
            <span className='soundBtn'>
              <input
                type='radio'
                id='FromStarredContactsOnly'
                checked={data == 'From starred contacts only'}
                onChange={e =>
                  inputDataChange('NotifyCall', 'From starred contacts only')
                }
                name='notify'
              />
              <label htmlFor='FromStarredContactsOnly'>
                From starrred contacts only
              </label>
            </span>
            <span className='soundBtn'>
              <input
                type='radio'
                id='None'
                checked={data == 'None'}
                onChange={e => inputDataChange('NotifyCall', 'None')}
                name='notify'
              />
              <label
                htmlFor='None'
                style={{ borderRadius: '0px 0px 15px 15px' }}
              >
                None
              </label>
            </span>
          </div>

          <span className='setBtn'>
            <div className='btnText align'>
              <h4>Notify about repeated calls </h4>
              <h5>
                Ring or vibrate while recieving the second call from the same
                contact within 15 minutes
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
                checked={notifyRepeatCall}
                onChange={e =>
                  inputToggleChng('NotifyRepeatCall', setNotifyRepeatCall)
                }
              />
              <span class='slider round'></span>
            </label>
          </span>

          {/* <hr /> */}
          {/* <span className='setBtn'>
            <div className='btnText align'>
              <h4>Schedule turn on time </h4>
            </div>
            <span className='setArrBtn'> {'>'}</span>
          </span> */}
        </div>
      </div>
    </div>
  )
}

export default Disturb
