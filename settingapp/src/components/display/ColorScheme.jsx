import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import colorScheme from '../../images/colorScheme.jpg'
import axios from 'axios'
const ColorScheme = () => {
  const [data, setData] = useState()
  const inputDataChange = async (name, type) => {
    const data = {
      name: name,
      type: type
    }
    const response = await axios.post('http://localhost:800/display/data', {
      data
    })

    setData(response.data.mode)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const mode = await axios.get('http://localhost:800/display/getData')

        setData(mode.data.Colour.mode)
      } catch (err) {
        console.log('error while fetching data ', err)
      }
    }
    fetchData()
  })
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate(-1)
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Colour scheme</h1>
        <div>
          <img
            src={colorScheme}
            style={{
              width: '100%',
              borderRadius: '20px',
              margin: '15px 0px'
            }}
            alt=''
          />

          <h5 className='text_secondary rangeBars'>
            COLOURS
          </h5>
          <div className='preferNet'>
            <span className='vrBtn'>
              <input
                type='radio'
                id='vivid'
                onChange={e => inputDataChange('Colour', 'Vivid')}
                checked={data == 'Vivid'}
                name='Colours'
              />
              <label htmlFor='vivid'>
                <h3 style={{ fontSize: '20px' }}>Vivid(recommended)</h3>
                <p style={{ fontSize: '14.2px' }}>
                  Adjust the colour based on content displayed
                </p>
              </label>
            </span>
            <span className='vrBtn'>
              <input
                type='radio'
                id='saturated'
                onChange={e => inputDataChange('Colour', 'Saturated')}
                checked={data == 'Saturated'}
                name='Colours'
              />
              <label htmlFor='saturated'>
                <h3 style={{ fontSize: '20px' }}>Saturated</h3>
                <h5 style={{ fontSize: '15px' }}>Always enhance colours</h5>
              </label>
            </span>
            <span className='vrBtn'>
              <input
                type='radio'
                id='standard'
                onChange={e => inputDataChange('Colour', 'Standard')}
                checked={data == 'Standard'}
                name='Colours'
              />
              <label htmlFor='standard'>
                <h3 style={{ fontSize: '20px' }}>Standard</h3>
                <h5 style={{ fontSize: '15px' }}>
                  Contrast will remain constant
                </h5>
              </label>
            </span>
            <span className='vrBtn'>
              <input
                type='radio'
                id='advance'
                onChange={e => inputDataChange('Colour', 'Advance')}
                checked={data == 'Advance'}
                name='Colours'
              />
              <label htmlFor='advance'>
                <h3 style={{ fontSize: '20px' }}>Advance settings</h3>
                <h5 style={{ fontSize: '15px' }}>Colour gamut options</h5>
              </label>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorScheme
