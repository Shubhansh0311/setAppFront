import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPrinting = () => {
  const navigate = useNavigate()
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

        <div className='aboutPrint' style={{ margin: '10px' }}>
          <h3>How to connect to a printer</h3>
          <h4>Step 1</h4>
          <p>
            Make sure your printer supports wireless printing or Wi-Fi Direct
            functionality (Android 9.0+). View the list of compatible printers.
          </p>
          <h4> Step 2</h4>{' '}
          <p>
            Connect your device to the same Wi-Fi network as the printer. If
            you're using Wi-Fi Direct, refer to the instruction manual that
            comes with your printer.
          </p>{' '}
          <h4> Step 3 </h4>
          <p>
            Select your printer from the list of available devices and connect
            to start printing.
          </p>
          <h3> Troubleshooting</h3>
          <p>
            {' '}
            1. Your printer and network equipment (e.g. wireless router) must be
            connected to a power outlet to work normally.
          </p>{' '}
          <p>2. Make sure Wi-Fi is turned on on your mobile device.</p>
          <p>
            3. Make sure your printer is connected to a Wi-Fi network or Wi-Fi
            Direct is on.
          </p>{' '}
          <p>
            4. Network settings of your mobile device must be consistent with
            the network settings of your wireless router.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPrinting
