import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Rename = () => {
  const navigate = useNavigate()
  const [name, newName] = useState('')

  const inputChange = e => {
    newName(e.target.value)
  }
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:800/about/rename', {
        name
      })
      // console.log(response)
      navigate(-1)
    } catch (error) {
      console.log('phone cannot be renamed ', error)
    }

  }
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
            // padding: '5px'
          }}
        >
          <span
            className='btn_top'
            onClick={() => {
              navigate(-1)
            }}
          >
            <i class='fa-solid fa-xmark' style={{ color: '#b8bdc7' }}></i>
          </span>
          {/* <form onSubmit={handleSubmit}> */}
          <button className='btn_top' type='submit' form='renameForm'>
            <i class='fa-solid fa-check' style={{ color: '#b8bdc7' }}></i>
          </button>
          {/* </form> */}
        </div>
        <h1 className='heading_primary'>Rename</h1>
        <br />

        <form id='renameForm' onSubmit={handleSubmit}>
          <input
            type='text'
            value={name}
            placeholder='rename phone'
            maxLength='25'
            required
            id='renamePhone'
            onChange={inputChange}
            className='renameText'
          />
        </form>
        <p
          className='text_secondary'
          style={{ fontSize: '18px', margin: '6px' }}
        >
          Other nearby device can see this name{' '}
        </p>
      </div>
    </div>
  )
}

export default Rename
