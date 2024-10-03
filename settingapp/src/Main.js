import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import './App.css'
const Main = () => {
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <h1 className='heading_primary'>Settings</h1>
        <div className='search_container'>
          <i
            class='fa-solid fa-magnifying-glass search_icon'
            style={{ color: '#797b81' }}
          ></i>
          <input
            type='text'
            className='search_text'
            placeholder='Search settings'
          />
        </div>

        <div className='apps_container'>
          {/* <i class='fa-solid fa-mobile'></i> */}

          <span
            className='app_btn'
            onClick={() => {
              navigate('/about')
            }}
            style={{ display: 'flex' }}
          >
            <i
              class='fa-solid fa-mobile icons'
              style={{ background: 'blue', color: 'white' }}
            ></i>
            <div className='app'>
              <span>About</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </span>

          <span
            className='app_btn'
            onClick={() => {
              navigate('/sim')
            }}
            style={{ display: 'flex' }}
          >
            <i
              class='fa-solid fa-sim-card icons'
              style={{ background: 'orange', color: 'white' }}
            ></i>
            <div className='app'>
              <span>Sim cards & mobile networks</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </span>
          <span
            className='app_btn'
            onClick={() => {
              navigate('/wifi')
            }}
            style={{ display: 'flex' }}
          >
            <i
              class='fa-solid fa-wifi icons'
              style={{ background: 'blue', color: 'white' }}
            ></i>
            <div className='app'>
              <span>Wifi</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </span>
          <span
            className='app_btn'
            onClick={() => {
              navigate('/bluetooth')
            }}
            style={{ display: 'flex' }}
          >
            <i
              class='fa-brands fa-bluetooth icons'
              style={{ background: 'blue', color: 'white' }}
            ></i>
            <div className='app'>
              <span>Bluetooth</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </span>
          <span
            className='app_btn'
            onClick={() => {
              navigate('/hotspot')
            }}
            style={{ display: 'flex' }}
          >
            <i
              class='fa-solid fa-link icons'
              style={{ background: 'orange', color: 'white' }}
            ></i>
            <div className='app'>
              <span>Portable Hotspot</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </span>
          <span
            className='app_btn'
            onClick={() => {
              navigate('/connection')
            }}
            style={{ display: 'flex' }}
          >
            <i
              class='fa-brands fa-nfc-symbol icons'
              style={{ background: '#ff00008c', color: 'white' }}
            ></i>
            <div className='app'>
              <span>Connection & sharing</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </span>
          <span
            className='app_btn'
            onClick={() => {
              navigate('/display')
            }}
            style={{ display: 'flex' }}
          >
            <i
              class='fa-regular fa-sun icons'
              style={{ background: 'orange ', color: 'white' }}
            ></i>
            <div className='app'>
              <span>Display and Brightness</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </span>

          <span
            className='app_btn'
            onClick={() => {
              navigate('/sound')
            }}
            style={{ display: 'flex' }}
          >
            <i
              class='fa-solid fa-volume-low icons'
              style={{ background: '#82be82', color: 'white' }}
            ></i>
            <div className='app'>
              <span>Sound and vibration</span>
              <span>
                {' '}
                <i class='fa-solid fa-greater-than'></i>
              </span>
            </div>
          </span>

         
        </div>
      </div>
    </div>
  )
}

export default Main
