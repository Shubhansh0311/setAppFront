import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bold from '../../images/bold.jpg'
import news from '../../images/new.png'
import cute from '../../images/cute.png'
import top from '../../images/top.png'
import categories from '../../images/categories.png'

import selected from '../../images/selected.png'
import axios from 'axios'
const Fonts = () => {

  const [fonts, setFonts] = useState([])
  const [data, setData] = useState('')
  useEffect(() => {
    const fetchData = async () => {
  try {
    const mode = await axios.get('https://setting-app-backend.vercel.app/display/getData')
    const fontData = mode.data.Fonts
    // console.log("test :",  mode.data.Fonts);
    
setFonts(fontData[0].Fonts);

    setData(mode.data.Font.fontName)


  } catch (error) {
    console.log(error);
    
  }
    }
    fetchData()
  },[])

  const inputDataChange = async (name, type) => {
    const data = {
      name: name,
      fontName: type
    }
    const response = await axios.post('https://setting-app-backend.vercel.app/display/data', {
      data
    })


    setData(response.data.fontName)
  }
  const navigate = useNavigate()
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
        <h1 className='heading_primary'>Fonts</h1>
        <div style={{ margin: '10px' }}>
          <img
            src={bold}
            style={{
              width: '100%',
              height: '110px',
              borderRadius: '20px',
              margin: '15px 0px'
            }}
            alt=''
          />
          <div
            className='icons'
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '100%',
              color: 'black',
              fontSize: '13px'
            }}
          >
            <span style={{ textAlign: 'center' }}>
              <img src={news} style={{ width: '50px' }} alt='cute' />
              <p style={{ selfAlign: 'center' }}>New</p>
            </span>
            <span style={{ textAlign: 'center' }}>
              <img src={categories} style={{ width: '50px' }} alt='cute' />
              <p style={{ selfAlign: 'center' }}>Categories</p>
            </span>

            <span style={{ textAlign: 'center' }}>
              <img src={cute} style={{ width: '50px' }} alt='cute' />
              <p style={{ selfAlign: 'center' }}>Cute</p>
            </span>

            <span style={{ textAlign: 'center' }}>
              <img src={top} style={{ width: '50px' }} alt='cute' />
              <p style={{ selfAlign: 'center' }}>Top</p>
            </span>
            <span style={{ textAlign: 'center' }}>
              <img src={selected} style={{ width: '50px' }} alt='cute' />
              <p style={{ selfAlign: 'center' }}>Selected</p>
            </span>
          </div>
          <div
            className='heading'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '18px 0px'
            }}
          >
            <h4>🚩🚩Dussehra Delights🚩🚩</h4>
            <span
              style={{ border: 'none', color: 'grey', background: 'none' }}
            >
              MORE <i className='fa-solid fa-greater-than'></i>
            </span>
          </div>
          {fonts.map((e, index) => {
            return (
              <div className='preferNet'>
                <span className='vrBtn'>
                  <input
                    type='radio'
                    id={e}
                    checked={data == `${e}`}
                    onChange={f => inputDataChange('Font', e)}
                    name='Font'
                  />

                  <label htmlFor={e} key={index}>
                    {e}
                  </label>
                </span>
              </div>
             
            )
          })}
        </div>
      </div>{' '}
    </div>
  )
}

export default Fonts
