import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Chromebook = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState('shubh@gmail.com')
  const inputDataChange = async e => {
    try {
      const data = { name: e.target.name, accName: e.target.value }
      const response = await axios.post(
        'https://setting-app-backend.vercel.app/connection/data',
        { data }
      )
      document.getElementById('DNSAccountDiv').style.display = 'none'
      setAccount(response.data.AccountName)
    } catch (err) {
      console.log('error while sending data', err)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      document.getElementById('DNSAccountDiv').style.display = 'none'

      try {
        const response = await axios.get(
          'https://setting-app-backend.vercel.app/connection/getData'
        )
        setAccount(response.data.ChromebookAccount.AccountName)
      } catch (error) {}
    }
    fetchData()
  }, [])
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/connection')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary' style={{ margin: '0px' }}>
          Chromebook
        </h1>
        <div>
          <span
            className='printBtn'
            onClick={() => {
              document.getElementById('DNSAccountDiv').style.display = 'block'
            }}
          >
            <div style={{ textAlign: 'left', marginTop: '6px' }}>
              <h3>Account</h3>

              <h4 style={{ margin: '5px 0px', color: 'grey' }}> {account}</h4>
            </div>
          </span>
          <p style={{ margin: '25px 0px', fontWeight: 'bolder' }}>
            Your Xiaomi 4543 isn't linked to a Chromebook{' '}
            <span className='text_secondary'>
              Link devices to send text message from your computer,use your
              phone's internet connection and unlock both devices more easily
              .Features may vary by device.
            </span>
          </p>
          <span className='text_secondary'>
            To link your devices,go to your Chromebook's setting
          </span>
        </div>
        <div id='DNSAccountDiv'>
          <div
            className='notifyCall DNSdiv'
            style={{ height: 'auto', top: '4px' }}
          >
            <div className=''>
              <input
                type='radio'
                value='abcdefgh1234@gmail.com'
                id='Shubhansh Agrawal'
                name='ChromebookAccount'
                onClick={e => {
                  e.preventDefault()
                  inputDataChange(e)
                }}
              />
              <label htmlFor='Shubhansh Agrawal'>
                <span className='printBtn'>
                  <h4 style={{ margin: '5px 0px', color: 'grey' }}>
                    {' '}
                    abcdefgh1234@gmail.com
                  </h4>
                </span>
              </label>
            </div>

            <div>
              <input
                type='radio'
                value='oriental@gmail.com'
                id='SHUBHANSH'
                onClick={e => {
                  e.preventDefault()
                  inputDataChange(e)
                  console.log(e.target.value)
                }}
                name='ChromebookAccount'
              />
              <label htmlFor='SHUBHANSH'>
                {' '}
                <span className='printBtn'>
                  <h4 style={{ margin: '5px 0px', color: 'grey' }}>
                    {' '}
                    oriental@gmail.com
                  </h4>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chromebook
