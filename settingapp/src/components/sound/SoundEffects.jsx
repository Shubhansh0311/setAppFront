import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import updown from '../../images/updown.png'
const SoundEffects = () => {
  const[data,setData]=useState('Dynamic')
  const [dolby,setDolby]=useState(false)
  const handleToggleChng=async(name,setStateFunction)=>{
    try {
      const response=await axios.post('http://localhost:800/sound/toggle',{name})
      setStateFunction(response.data.btnStatus)
    } catch (error) {
      console.log('error while posting data ',error);
      
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
    document.getElementById('Preset').style.display = 'none'

    setData(response.data.mode)
  }
  useEffect(()=>{
    const fetchData=async()=>{
try {
  const response=await axios.get('http://localhost:800/sound/status')
  setDolby(response.data.DolbyAtmos.btnStatus)
  
  const mode = await axios.get('http://localhost:800/sound/getData')
  
  // console.log(mode);
  setData(mode.data.Preset.mode)

} catch (error) {
  console.log('error while fetching data ',error);
}
    }
    fetchData()
  })
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <button
          className='btn_top'
          onClick={() => {
            navigate('/sound')
          }}
        >
          {' '}
          {'←'}
        </button>
        <h1 className='heading_primary'>Sound effects</h1>
        <div className='assistant_container'>
          <button className='setBtn'>
            <div className='btnText align'>
              <h5 style={{ margin: '10px 0px' }}>DOLBY EFFECTS</h5>
              <h4>Dolby atmos</h4>
              <h5>
                There will be no reminders for incoming calls and notification
              </h5>
            </div>
            <label
              class='switch'
              style={{
                top: '30px',
                left: '0px'
              }}
            >
              <input type='checkbox' checked={dolby}
              onChange={e=>handleToggleChng('DolbyAtmos',setDolby)}
               />
              <span class='slider round'></span>
            </label>
          </button>
          <div
            className='NotifyDiv'
            onClick={() => {

              document.getElementById('Preset').style.display = 'block'
            }}
          >
            <h3 style={{width:"55%"}}>Preset</h3>

            <div
             className='NotifyInDiv'
            >
            <p>{data}</p>
              <img src={updown} className='soundUpDown' alt='upDown' />
            </div>
          </div>
          <div
            className='notifyCall'
            id='Preset'
            style={{ display: 'none',width:'50%',left:'110px' }}
          >
            <span className='soundBtn'>
              <input
                type='radio'
                id='Dynamic'
                onChange={e => inputDataChange('Preset', 'Dynamic')}
                name='Preset'
                checked={data == 'Dynamic'}
              />
              <label
                htmlFor='Dynamic'
                style={{ borderRadius: '15px 15px 0px 0px' }}
              >
              Dynamic
              </label>
            </span>
            <span className='soundBtn'>
              <input
                type='radio'
                id='Video'
                checked={data == 'Video'}
                onChange={e =>
                 { inputDataChange('Preset', 'Video')}
                }
                name='Preset'
              />
              <label htmlFor='Video'>Video</label>
            </span>
            <span className='soundBtn'>
              <input
                type='radio'
                id='Music'
                checked={data == 'Music'}
                onChange={e =>
                  inputDataChange('Preset', 'Music')
                }
                name='Preset'
              />
              <label htmlFor='Music'>
               Music
              </label>
            </span>
            <span className='soundBtn'>
              <input
                type='radio'
                id='Voice'
                checked={data == 'Voice'}
                onChange={e => inputDataChange('Preset', 'Voice')}
                name='Preset'
              />
              <label
                htmlFor='Voice'
                style={{ borderRadius: '0px 0px 15px 15px' }}
              >
                Voice
              </label>
            </span>
          </div>
          <button
            className='setBtn'
            onClick={() => {
              navigate('/equaliser')
            }}
          >
            <div className='btnText'>
              <h4>Graphic equaliser</h4>
            </div>
            <span style={{ fontSize: '12px' }} className='setArrBtn'>
              {`Custom `}
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </span>
          </button>
          <hr />
          <div style={{ opacity: '.5' }}>
            <span className='setArrBtn'>MI SOUND</span>
            <button className='setBtn'>
              <div className='btnText align'>
                <h4>Hi-Fi audio</h4>
                <h5>Reduce noise and distortion and increse audio quality</h5>
              </div>
              <label
                class='switch'
                style={{
                  top: '0px',
                  left: '0px'
                }}
              >
                <input type='checkbox' disabled />
                <span class='slider round'></span>
              </label>
            </button>
            <button className='setBtn'>
              <div className='btnText align'>
                <h4>Schedule turn on time </h4>
              </div>
              <span className='setArrBtn' disabled>
                {' '}
                {'>'}
              </span>
            </button>
            <button className='setBtn'>
              <div className='btnText align'>
                <h4>Equaliser </h4>
                <h5>Adjust individual levels for different types of music</h5>
              </div>
              <span className='setArrBtn' disabled>
                {' '}
                {'>'}
              </span>
            </button>
            <button className='setBtn'>
              <div className='btnText align'>
                <h4>Volume adjustment</h4>
                <h5>Customize volume according to your auditory perception</h5>
              </div>
            </button>
            <hr />
          </div>
          <span className='setArrBtn'>EARPHONE CONTROLS </span>

          <button
            className='setBtn'
            style={{ width: '100%' }}
            onClick={() => {
              navigate('/headphoneControls')
            }}
          >
            <div className='btnText align'>
              <h4>Headphone remote buttons</h4>
            </div>
            <span className='setArrBtn' style={{ width: '100%' }}>
              {' '}
              {`Control volume level >`}
            </span>
          </button>
          <h4 style={{ fontSize: '20px' }}>Assign buttons</h4>
        </div>
      </div>
    </div>
  )
}

export default SoundEffects
