import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import lock from '../../images/lock.png'
import wifiHotspot from '../../images/wifiHotspot.png'
import axios from 'axios'
const Wifi = () => {
  const navigate = useNavigate()

  const [wifiBtn, setWifiBtn] = useState(false)
  const [networks, setNetworks] = useState([])

  const ToggleBtnChange = async e => {
    const name = e.target.name
 
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/wifi/toggle', {
        name
      })
      setWifiBtn(response.data.btnStatus)
      if (response.data.btnStatus) {
        document.getElementById('wifiDiv').style.display = 'block'
      } else {
        document.getElementById('wifiDiv').style.display = 'none'
      }
    } catch (err) {
      console.log('error while posting data ', err)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
     try {
      const response = await axios.get('https://setting-app-backend.vercel.app/wifi/status')
      setWifiBtn(response.data.btnStatus)
      if (response.data.btnStatus) {
        document.getElementById('wifiDiv').style.display = 'block'
      }

      const SaveNetworks = await axios.get('https://setting-app-backend.vercel.app/wifi/getData')
     
      
      setNetworks(SaveNetworks.data)
     } catch (error) {
      
     }
    }
    fetchData()
  }, [wifiBtn])

  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Wi-Fi</h1>
        <div style={{ margin: '20px 10px' }}>
          <span className='setBtn'>
            <div className='btnText' style={{ fontSize: '20px' }}>
              <h3>Wi-fi</h3>
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
                name='wifiBtn'
                checked={wifiBtn}
                onChange={ToggleBtnChange}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <hr />
          <div id='wifiDiv' style={{ display: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{ color: 'grey' }}>Available networks</h3>
              <span
                onClick={() => {
                  document.getElementById('load').classList.add('loaders')

                  setTimeout(() => {
                    document.getElementById('load').classList.remove('loaders')
                  }, 10000)
                }}
                id='load'
                className='loader'
              ></span>
            </div>
            {networks.map(e => {
              return (
                <span className='setBtn' style={{ marginLeft: '-10px' }}>
                  <div
                    className='btnText'
                    style={{ fontSize: '15px', color: 'grey' }}
                  >
                    <div style={{ display: 'flex' }}>
                      <img
                        src={wifiHotspot}
                        style={{ width: '20px', margin: '0px 15px' }}
                        alt='lock'
                      />{' '}
                      <h3 style={{ color: 'black' }}>{e.networkName}</h3>
                    </div>
                  </div>

                  <span>
                    <img
                      src={lock}
                      style={{ width: '20px', margin: '0px 15px' }}
                      alt='lock'
                    />{' '}
                    <i
                      class='fa-solid fa-greater-than'
                      style={{ position: 'relative', bottom: '2px' }}
                    ></i>
                  </span>
                </span>
              )
            })}
            <span
              className='setBtn'
              onClick={() => {
                navigate('/addNetwork')
              }}
            >
              <h3 style={{ color: '#20bafb' }}>Add network</h3>
            </span>
            <hr />
          </div>
          <h4 style={{ color: 'grey' }}>MORE SETTINGS</h4>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/wifiSetting')
            }}
          >
            <h3>Additional settings</h3>
            <span>
              <i className='fa-solid fa-greater-than'></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Wifi
