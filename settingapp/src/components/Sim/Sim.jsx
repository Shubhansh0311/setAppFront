import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sim1 from '../../images/sims/sim1.png'
import sim2 from '../../images/sims/sim2.png'

import nulls from '../../images/sims/null.png'
import axios from 'axios'
const Sim = () => {
  const navigate = useNavigate()
  const [simm1, setSim1] = useState()
  const [simm2, setSim2] = useState()
  const [phone1, setPhone1] = useState()
  const [phone2, setPhone2] = useState()

  const [callingSim, setCallingSim] = useState('')
  const [dataSim, setDataSim] = useState('')

  // sim active
  const handleCallingSimChng =async e => {
    const data = { simCalling: e.target.id }
    try {
      const response = await axios.post('http://localhost:800/sim/callingSim', data)
   
      setCallingSim(data.simCalling)
    } catch (err) {
      console.log('sim cannot be set ', err)
    }
  }

  // active sim active
  const handleDataSimChng = async e => {
    const data = { simData: e.target.id }
    try {
      const response = await axios.post('http://localhost:800/sim/dataSim', data)
     
      setDataSim(data.simData)
    } catch (err) {
      console.log('data sim not selected ', err)
    }
  }

  const [dataBtn, setDataBtn] = useState(false)
  const inputChange = async () => {
    try {
      const data = { name: 'dataBtn' }
      const response = await axios.post(
        'http://localhost:800/sim/toggleData',
        data
      )
      setDataBtn(response.data.btnStatus)
      
    } catch (err) {
      console.log('error found during post ', err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sims = await axios.get('http://localhost:800/sim/getSim')
        setSim1(sims.data.sim1.name)

        setSim2(sims.data.sim2.name)

        const phones = await axios.get('http://localhost:800/sim/getPhone')
        setPhone1(phones.data.phone1.phone)
        setPhone2(phones.data.phone2.phone)

        // togglebtns

        const toggleBtnData = await axios.get(
          'http://localhost:800/sim/getToggleStatus'
        )
        setDataBtn(toggleBtnData.data.togglesData.dataBtn.btnStatus)

        // current active sim for calling
        const callingSim = await axios.get(
          'http://localhost:800/sim/getCallingSim'
        )
        // console.log(callingSim.data.simCalling)
        setCallingSim(callingSim.data.simCalling)

        // current active sim for data
        const dataSim = await axios.get('http://localhost:800/sim/getDataSim')
        // console.log(dataSim.data.simData)
        setDataSim(dataSim.data.simData)
      } catch (error) {
        console.log('error is found ', error)
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
        <h1 className='heading_primary'>Sim cards & mobile networks</h1>
        <div style={{ margin: '10px' }}>
          <div className='sims1'>
            <div
              className='sim'
              onClick={() => {
                navigate('/simCardSetting')
              }}
            >
              <img className='sim1' src={sim1} alt='sim1' />
              <p style={{ margin: '7px 0px' }}>{simm1}</p>
              <p>
                +91{phone1} <i className='fa-solid fa-greater-than'></i>
              </p>
            </div>
            <div
              className='sim'
              onClick={() => {
                navigate('/simCardSettingTwo')
              }}
            >
              <img className='sim2' src={sim2} alt='sim2' />
              <p style={{ margin: '7px 0px' }}>{simm2}</p>
              <p>
                +91{phone2} <i className='fa-solid fa-greater-than'></i>
              </p>
            </div>
          </div>
          <h3 style={{ margin: '12px 0px' }}>Default for calls</h3>
          <div className='sims2'>
            <span>
              <input
                type='radio'
                id='sim1'
                name='CallingSim'
                checked={callingSim == 'sim1'}
                onClick={handleCallingSimChng}
              />
              <label htmlFor='sim1'>
                <img src={sim1} alt='CallingSim1' />
              </label>
            </span>

            <span>
              <input
                type='radio'
                id='sim2'
                name='CallingSim'
                checked={callingSim == 'sim2'}
                onClick={handleCallingSimChng}
              />
              <label htmlFor='sim2'>
                <img src={sim2} alt='CalingSim2' />
              </label>
            </span>
            <span>
              <input
                type='radio'
                id='null'
                name='CallingSim'
                checked={callingSim == 'null'}
                onClick={handleCallingSimChng}
              />
              <label htmlFor='null'>
                <img src={nulls} alt='null' />
              </label>
            </span>
          </div>
          <h3 style={{ margin: '12px 0px' }}>Data SIM</h3>
          <div className='sims3'>
            <span>
              <input
                type='radio'
                id='dataSim1'
                name='DataSim'
                checked={dataSim == 'dataSim1'}
                onClick={handleDataSimChng}
              />
              <label htmlFor='dataSim1'>
                <img src={sim1} alt='DataSim1' />
              </label>
            </span>

            <span>
              <input
                type='radio'
                id='dataSim2'
                name='dataSim'
                checked={dataSim == 'dataSim2'}
                onClick={handleDataSimChng}
              />
              <label htmlFor='dataSim2'>
                <img src={sim2} alt='DataSim2' />
              </label>
            </span>
          </div>
          <span className='setBtn'>
            <div className='btnText align'>
              <h5 style={{ margin: '20px 0px' }}>SETTINGS</h5>
              <h4>Mobile data</h4>
              <h5>Allow this device to use mobile data</h5>
            </div>
            <label
              class='switch'
              style={{
                left: '2px',
                top: '55px'
              }}
            >
              <input
                type='checkbox'
                name='dataBtn'
                checked={dataBtn}
                onClick={inputChange}
              />
              <span class='slider round'></span>
            </label>
          </span>
          <hr />

          <span
            className='setBtn'
            onClick={() => {
              // navigate('')
            }}
          >
            <div className='btnText align'>
              <h4>Advance settings</h4>
            </div>

            <span>
              {' '}
              <i class='fa-solid fa-greater-than'></i>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sim
