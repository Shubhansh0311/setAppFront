import React from 'react'
import { useNavigate } from 'react-router-dom'
import contact from '../../images/contact.png'
import accounts from '../../images/account.png'
import other from '../../images/others.png'
import gallery from '../../images/gallery.png'
import app from '../../images/apps.png'
import backup from '../../images/backup.png'
import card from '../../images/card.png'
const Reset = () => {
  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container'>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/about')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Detailed info and specs</h1>
        <div className='Reset'>
          <h3 style={{color:'grey' }}>Erase the following items</h3>
          <span className='reset'>
            <img src={contact} alt='' className='imgSize' /> Contacts
          </span>
          <span className='reset'>
            <img src={gallery} alt='' className='imgSize' />
            Photos and videos
          </span>
          <span className='reset'>
            <img src={app} alt='' className='imgSize' /> Apps
          </span>
          <span className='reset'>
            <img src={accounts} alt='' className='imgSize' /> Accounts
          </span>
          <span className='reset'>
            <img src={backup} alt='' className='imgSize ' /> Backups
          </span>
          <span className='reset'>
            <img src={card} alt='' className='imgSize' /> SD card data
          </span>
          <span className='reset'>
            <img src={other} alt='' className='imgSize' /> Other items on this device
          </span>
        </div>
        <p style={{ padding: '14px', fontSize: '15px', color: 'grey' }}>
          All the items listed above will be erased permanently Back up all
          important items to your computer or Xiomi Cloud before you continue.
        </p>
        <p style={{ padding: '14px', fontSize: '15px', color: 'grey' }}>
          Note: Before restoring items,check whether the folder
          "MIUI-Backup-AllBackup" exists on your mobile device .If it doesn't
          ,create it.
        </p>
        <div className='eraseDiv'>
          <span className='eraseBtn' 
          onClick={()=>{
            navigate('/about')
          }}
          >Erase all data</span>
        </div>
      </div>
    </div>
  )
}

export default Reset
