import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Hotspot = () => {
  const navigate = useNavigate()
  const [hotspot, setHotspot] = useState(false)
  const [hotspotAuto, setHotspotAuto] = useState(false)
  const [supSixth, setSupSixth] = useState(false)
  const [blueT, setBlueT] = useState(false)
  const [usbT, setUsbT] = useState(false)
  const [ethernet, setEthernet] = useState(false)
  const [hotspotName, setHotspotName] = useState('Redmi Note 12 Pro+ 5G')

  const handleToggleChng = async (name, setStateFunction) => {
    const data = { name: name }
    try {
      const response = await axios.post(
        'http://localhost:800/hotspot/toggle',
        data
      )
      setStateFunction(response.data.btnStatus)
      console.log('successful updation ', response)
    } catch (err) {
      console.log('errro while posting toggle buttons data ', err)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:800/hotspot/status')

        setHotspot(response.data.hotspot.btnStatus)
        setHotspotAuto(response.data.hotspotAuto.btnStatus)
        setSupSixth(response.data.supSixth.btnStatus)
        setBlueT(response.data.blueT.btnStatus)
        setUsbT(response.data.usbT.btnStatus)
        setEthernet(response.data.ethernet.btnStatus)

        const hotspotName = await axios.get(
          'http://localhost:800/hotspot/getData'
        )
        
        
        setHotspotName(hotspotName.data.hotspot.networkName)
      
      } catch (err) {
        console.log('error while fetching data')
      }
    }
    fetchData()
  }, [])
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
        <h1 className='heading_primary'>Mobile networks</h1>
        <div style={{ margin: '10px' }}>
          <span className='setBtn'>
            <div className='btnText' style={{ textAlign: 'left' }}>
              <h3>Portable hotspot</h3>
              <h3 className='text_secondary'>{hotspotName}</h3>
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
                checked={hotspot}
                onChange={() => handleToggleChng('hotspot', setHotspot)}
                name='hotspot'
              />
              <span class='slider round'></span>
            </label>
          </span>
          <div
            className='setBtn'
            onClick={() => {
              navigate('/portableHotspot')
            }}
          >
            <span className='btnText align'>
              <h4>Set up portable hotspot </h4>
            </span>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </div>
          <span
            className='setBtn'
            onClick={() => {
              navigate('/dataLimit')
            }}
          >
            <div className='btnText align'>
              <h4>One-time data limit </h4>
              <h5 className='text_secondary'>
                Data limt will be applied next time your hotspot in on
              </h5>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h3>Turn off hotspot automatically </h3>
              <h5 className='text_secondary'>
                Turn off hotspot automatically when no devices are connected
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
                checked={hotspotAuto}
                onChange={() => handleToggleChng('hotspotAuto', setHotspotAuto)}
                name='hotspotAuto'
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText' style={{ width: '70%' }}>
              <h3>Support sixth generation standard</h3>
              <h5 className='text_secondary'>
                Some devices might be incompatible with the 802.11ax
                standard.Turn this feature off if you experience problems
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
                checked={supSixth}
                onChange={() => handleToggleChng('supSixth', setSupSixth)}
                name='supSixth'
              />
              <span class='slider round'></span>
            </label>
          </span>

          <span className='setBtn' disabled>
            <div className='btnText'>
              <h3>USB tethering</h3>
              <h5 className='text_secondary'>USB isn't connected</h5>
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
                checked={usbT}
                onChange={() => handleToggleChng('usbT', setUsbT)}
                name='usbT'
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn'>
            <div className='btnText align'>
              <h3>Bluetooth tethering</h3>
              <h5 className='text_secondary'>
                Sharing this phone's internet connection via Bluetooth
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
                checked={blueT}
                onChange={() => handleToggleChng('blueT', setBlueT)}
                name='blueT'
              />
              <span class='slider round'></span>
            </label>
          </span>
          <span className='setBtn' disabled>
            <div className='btnText align'>
              <h3>Share via Ethernet</h3>
              <h5 className='text_secondary'>
                Sharing this phone's internet connection via Ethernet
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
                checked={ethernet}
                onChange={() => handleToggleChng('ethernet', setEthernet)}
                name='ethernet'
              />
              <span class='slider round'></span>
            </label>
          </span>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Hotspot
