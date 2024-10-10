import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ManageNetwork = () => {
  const [network, savedNetworks] = useState([])
useEffect(()=>{
  const fetchData=async()=>{
try {
  const networks=await axios.get('https://setting-app-backend.vercel.app/wifi/getData')
  savedNetworks(networks.data);

} catch (error) {
  console.log('data not recieved ',error );
}
  }
  fetchData()
},[])

const deleteNetwork=async(e)=>{

  const response=await axios.delete(`https://setting-app-backend.vercel.app/wifi/delete/${e}`)
  
  const networks=await axios.get('https://setting-app-backend.vercel.app/wifi/getData')
  savedNetworks(networks.data);
}
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/wifiSetting')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Manage saved networks</h1>

        <div style={{ margin: '30px 10px' }}>
          {network.map((e, index) => {
            
            return (
              <div className='wifiNetworks'>
                <h3 key={index}>{e.networkName}</h3>
                <span 
                  className='wifiBtn'
        
                 
                  onClick={()=>deleteNetwork(e._id)}
                  
                >
                  delete
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ManageNetwork
