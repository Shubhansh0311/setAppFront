import React from 'react'
import { useNavigate } from 'react-router-dom'

import snapchat from '../../images/apps/snapchat.png'
import telegram from '../../images/apps/telegram.png'
import authenticate from '../../images/apps/authenticate.png'
import instagram from '../../images/apps/instagram.png'
import calculator from '../../images/apps/calculator.png'
import amazon from '../../images/apps/amazon.png'
import compass from '../../images/apps/compass.png'
import drive from '../../images/apps/drive.png'
import fb from '../../images/apps/fb.png'
import hotspot from '../../images/apps/hotspot.png'
import images from '../../images/apps/images.png'
import linkedin from '../../images/apps/linkedin.png'
import notes from '../../images/apps/notes.png'
import twitter from '../../images/apps/twitter.png'
import weather from '../../images/apps/weather.png'
import whatsapp from '../../images/apps/whatsapp.png'
import youtube from '../../images/apps/youtube.png'
const DataUsage = () => {
  const arr = [
    { name: 'Snapchat', img: snapchat },
    { name: 'Instagram', img: instagram },
    { name: 'Telegram', img: telegram },
    { name: 'Amazon', img: amazon },
    { name: 'Authenticate', img: authenticate },
    { name: 'Calculator', img: calculator },
    { name: 'Compass', img: compass },
    { name: 'Drive', img: drive },
    { name: 'Facebook', img: fb },
    { name: 'Hotspot', img: hotspot },
    { name: 'Images', img: images },
    { name: 'Linkedin', img: linkedin },
    { name: 'Notes', img: notes },
    { name: 'Twitter', img: twitter },
    { name: 'Weather', img: weather },
    { name: 'Whatsapp', img: whatsapp },
    { name: 'Youtube', img: youtube }
  ]
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <button
          className='btn_top'
          onClick={() => {
            navigate('/connection')
          }}
        >
          {' '}
          {'←'}
        </button>
        <h1 className='heading_primary'>Data usage</h1>
        <h5 className='text_secondary' style={{ margin: '10px' }}>
          Today: Mobile data usage 1.54GB
        </h5>

        <div style={{ margin: '10px' }}>
          {arr.map(e => {
            return (
              <button className='printBtn'>
                <span>
                  <img src={e.img} alt='img' className=' dataImg' />
                </span>
                <div className='dataDiv'>
                  <h3>{e.name}</h3>

                  <h4 className='text_secondary'>
                    {' '}
                    <i
                      class='fa-solid fa-circle'
                      style={{ marginRight: '3px', color: '#abeeee' }}
                    ></i>
                    93.5MB
                  </h4>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DataUsage
