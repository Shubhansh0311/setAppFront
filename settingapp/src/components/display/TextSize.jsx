import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TextSize = () => {
  const navigate = useNavigate()
  const [text, setText] = useState(18)

  const inputDataChange = async e => {
    const data = { range: e.target.value, name: e.target.name }
    try {
      const response = await axios.post('https://setting-app-backend.vercel.app/display/data', {
        data
      })

      setText(response.data.range)
    } catch (err) {
      console.log('error while sending data : ', err)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        //  text size
        const response = await axios.get('https://setting-app-backend.vercel.app/display/getData')
        const textSize = response.data.TextSize.range
        setText(textSize)
        if (textSize == 28) {
          document.getElementById('sizeDiv').style.opacity = '1'
        } else {
          document.getElementById('sizeDiv').style.opacity = '0'
        }
      } catch (err) {
        console.log('error while fetching data ', err)
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
            navigate('/display')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Text size</h1>
        <div style={{ margin: '10px', width: '90%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <h3
            className='adjustText'
              style={{
            
                fontSize: `${text}px`
              }}
            >
              How do I adjust text size?
            </h3>
          </div>

          <div
            id='div2'
          
          >
            <h3 style={{ background: 'whitesmoke', fontSize: `${text}px` }}>
              Try adjusting text size using the slider below !
            </h3>
          </div>
        </div>
        <div
          className='textStyle'
        >
          <div style={{ width: '350px' }}>
            <span
            className='Astyle'
            >
              A{' '}
              <input
                type='range'
                min='18'
                max='28'
                name='TextSize'
                value={text}
                style={{
                  width: '100%',
                  margin: '15px',
                  position: 'relative',
                  bottom: '14px'
                }}
                onChange={e => {
                  // setText(e.target.value)
                  inputDataChange(e)
                }}
              />
              A
            </span>
            <div id='sizeDiv'>
              <h3 style={{ color: 'grey', margin: '15px 0px' }}>
                Text size is not big enough ?
              </h3>
              <h3 style={{ color: 'blue', margin: '15px 0px' }}>
                {`Accessibility >Display size`}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextSize
