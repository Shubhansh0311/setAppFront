import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
const DataLimit = () => {
  const navigate = useNavigate()
  const [dataLimitBtn, setDataLimitBtn] = useState(false)
  const [size, setSize] = useState('100MB')
  const [exceed, setExceed] = useState('')
  const sizes = [50, 100, 150, 200]
  const [isdisable, setIsDisable] = useState(true)
  const [customSize, setCustomSize] = useState('1')
  const [custom, setCustom] = useState('custom')
  const [displays, setDisplays] = useState({
    option1: 'none',
    option2: 'none',
    option3: 'none'
  })

  const customLimitChng = e => {
    setCustomSize(e.target.value)
    console.log(customSize)

    if (customSize) {
      setIsDisable(false)
    }
  }
  const inputChange = async (name, value, setStateFunc) => {
    try {
      const response = await axios.post('http://localhost:800/hotspot/data', {
        name: 'data limit',
        [name]: value
      })

      setStateFunc(response.data.data)

      setDisplays({ option1: 'none', option2: 'none' })
    } catch (error) {}
  }

  const toggleChange = async () => {
    try {
      const response = await axios.post('http://localhost:800/hotspot/toggle', {
        name: 'data Limit Btn'
      })
      console.log(response.data.btnStatus)
      setDataLimitBtn(response.data.btnStatus)
    } catch {
      console.log('unable to send data ')
    }
  }
  useEffect(() => {
    const fetchData = async () => {
 try {
  const response = await axios.get('http://localhost:800/hotspot/status')
  setDataLimitBtn(response.data.dataLimitBtn.btnStatus)
  const datas = await axios.get('http://localhost:800/hotspot/getData')

  var size = datas.data.dataLimit.size
  console.log(datas.data.dataLimit)
  sizes.map(e => {
    if (size == `${e}MB`) {
      setCustom('')
      setSize(size)
    } else {
      setSize(size)

      setCustom('custom')
    }
  })
  setExceed(datas.data.dataLimit.exceed)
 } catch (error) {
  
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
            navigate('/hotspot')
          }}
        >
          {' '}
          {'←'}
        </span>

        <h1 className='heading_primary'>One-time data limit</h1>

        <div style={{ padding: '5px' }}>
          {/* 😃😃😃 */}
          <span className='setBtn'>
            <div className='btnText' style={{ textAlign: 'left' }}>
              <h3>One-time data limit</h3>
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
                checked={dataLimitBtn}
                onChange={toggleChange}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <div
            className='NotifyDiv'
            onClick={() => {
              setDisplays({
                option1: 'block',
                option2: 'none',
                option3: 'none'
              })
            }}
          >
            <h3>Size</h3>

            <div className='NotifyInDiv'>
              <span style={{ margin: '0px 10px' }}>{size}</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </div>
          <div className='wifiDivs'>
            <div
              className='notifyCall '
              id='size'
              style={{ display: `${displays.option1}` }}
            >
              <form>
                <h3 style={{ textAlign: 'center', padding: '15px' }}>
                  Mobile data limit
                </h3>

                {sizes.map(e => {
                  return (
                    <span className='soundBtn'>
                      <input
                        type='radio'
                        id={e}
                        name='size'
                        checked={size == `${e}MB`}
                        onClick={en => {
                          inputChange('size', `${en.target.id}MB`, setSize)
                        }}
                      />
                      <label htmlFor={e}>{e}MB</label>
                    </span>
                  )
                })}
                <span className='soundBtn'>
                  <input
                    type='radio'
                    id='custom'
                    name='size'
                    checked={custom == 'custom'}
                    onClick={en => {
                      setDisplays({
                        option3: 'block',
                        option2: 'none',
                        option1: 'none'
                      })
                    }}
                  />
                  <label htmlFor='custom'>custom</label>
                </span>
              </form>
              <button
                className='dataLimitBtn'
                id='cancel'
                onClick={() => {
                  setDisplays({
                    option1: 'none',
                    option2: 'none',
                    option3: 'none'
                  })
                }}
              >
                Cancel
              </button>
            </div>
            <div
              id='mainCustomDataLimit'
              style={{ display: `${displays.option3}` }}
            >
              <div id='customDataLimit'>
                <h3>Mobile data limit</h3>
                <input
                  type='Number'
                  min='0'
                  id='customData'
                  onChange={customLimitChng}
                />
                <div
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <button
                    className='dnsBtn'
                    id='cancel'
                    onClick={() => {
                      setDisplays({
                        option1: 'none',
                        option2: 'none',
                        option3: 'none'
                      })
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    class='dnsBtn'
                    id='ok'
                    type='submit'
                    disabled={isdisable}
                    onClick={() => {
                      inputChange('size', `${customSize}GB`, setSize)

                      setDisplays({
                        option1: 'none',
                        option2: 'none',
                        option3: 'none'
                      })
                    }}
                    style={{ padding: '10px 40px' }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className='NotifyDiv'
            style={{ margin: '20px 0px' }}
            onClick={() => {
              setDisplays({
                option1: 'none',
                option3: 'none',

                option2: 'block'
              })
            }}
          >
            <h3>When Exceeded</h3>

            <div className='NotifyInDiv'>
              <span style={{ margin: '0px 10px' }}>{exceed}</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </div>
          <div className='wifiDivs'>
            <div
              className='notifyCall'
              id='Exceed'
              style={{ display: `${displays.option2}` }}
            >
              <form>
                <h3 style={{ textAlign: 'center', padding: '15px' }}>
                  When exceeded
                </h3>
                <span className='soundBtn'>
                  <input
                    type='radio'
                    id='Turn off and notify'
                    checked={exceed == 'Turn off and notify'}
                    name='Exceed'
                    onClick={e => inputChange('exceed', e.target.id, setExceed)}
                  />
                  <label
                    htmlFor='Turn off and notify'
                    style={{ borderRadius: '15px 15px 0px 0px' }}
                  >
                    Turn off and notify
                  </label>
                </span>
                <span className='soundBtn'>
                  <input
                    type='radio'
                    id='Only notify'
                    checked={exceed == 'Only notify'}
                    name='Exceed'
                    onClick={e => inputChange('exceed', e.target.id, setExceed)}
                  />
                  <label htmlFor='Only notify'>Only notify</label>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataLimit
