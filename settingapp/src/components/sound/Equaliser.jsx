import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import custom from '../../images/Custom.png'
import blues from '../../images/blues.jpg'
import classical from '../../images/classical.jpg'
import electronic from '../../images/electronic.jpg'
import hiphop from '../../images/hiphop.jpg'
import jazz from '../../images/jazz.jpg'
import metal from '../../images/metal.jpg'
import pops from '../../images/pops.jpg'
import rock from '../../images/rock.jpg'
import axios from 'axios'

const Equaliser = () => {
  let [equalizers, setEqualizers] = useState({
    equa1: 50,
    equa2: 50,
    equa3: 50,
    equa4: 50,
    equa5: 50,
    equa6: 50,
    equa7: 50,
    equa8: 50,
    equa9: 50
  })

  const [data, setData] = useState('Custom')
  const [equa1, setEqua1] = useState(equalizers.equa1)
  const [equa2, setEqua2] = useState(equalizers.equa2)
  const [equa3, setEqua3] = useState(equalizers.equa3)
  const [equa4, setEqua4] = useState(equalizers.equa4)
  const [equa5, setEqua5] = useState(equalizers.equa5)
  const [equa6, setEqua6] = useState(equalizers.equa6)
  const [equa7, setEqua7] = useState(equalizers.equa7)
  const [equa8, setEqua8] = useState(equalizers.equa8)
  const [equa9, setEqua9] = useState(equalizers.equa9)

  const DataChange = async (e, setStateFunction) => {
    const name = e.target.name

    let updateEqua = { ...equalizers, [e.target.name]: e.target.value }
    const datas = {
      name: 'Equalizers',
      mode: data,
      updateEqua: updateEqua
    }
    try {
      const response = await axios.post(
        'http://localhost:800/sound/equalizers',
        datas
      )
      const updatedEqualizers = response.data.Equalizers

      setStateFunction(updatedEqualizers[name])
    
      setEqualizers({...equalizers,updatedEqualizers});
    } catch (err) {
      console.log('data not send ', err)
    }
  }
  const inputDataChange = async (name, mode) => {
    const data = {
      name: name,
      type: mode
    }

    const response = await axios.post('http://localhost:800/sound/data', {
      data
    })

    setData(response.data.mode)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mode = await axios.get('http://localhost:800/sound/getData')

        setData(mode.data.GraphicEqualizer.mode)

        const response = await axios.get(
          `http://localhost:800/sound/equalizer/${mode.data.GraphicEqualizer.mode}`
        )

       
     
      const data =response.data.Equalizers
      setEqua1(data.equa1)
      setEqua2(data.equa2)
      setEqua3(data.equa3)
      setEqua4(data.equa4)
      setEqua5(data.equa5)
      setEqua6(data.equa6)
      setEqua7(data.equa7)
      setEqua8(data.equa8)
      setEqua9(data.equa9)

      setEqualizers(data)
     
      } catch (error) {
        console.log('error while fetching data ', error)
      }
    }
    fetchData()
  },[data])

  const navigate = useNavigate()
  return (
    <div className='main_container'>
      <div className='sub_container' style={{ height: '790px' }}>
        <span
          className='btn_top'
          onClick={() => {
            navigate('/soundEffects')
          }}
        >
          {' '}
          {'←'}
        </span>
        <h1 className='heading_primary'>Graphic equaliser</h1>
        <div className='main_equalizer'>
          <h3 className='text_secondary' style={{ margin: '10px' }}>
            PRESETS
          </h3>
          <div className='sub_equalizer'>
            <span className='soundMode '>
              <input
                checked={data == 'Custom'}
                onChange={e => inputDataChange('GraphicEqualizer', 'Custom')}
                type='radio'
                name='PresetMode'
                id='custom'
              />
              <label class='radio-container' htmlFor='custom'>
                <img src={custom} alt='Image Option 1' />
              </label>
              <h3> Custom</h3>
            </span>
            <span className='soundMode '>
              <input
                checked={data == 'Rock'}
                onChange={e => inputDataChange('GraphicEqualizer', 'Rock')}
                type='radio'
                name='PresetMode'
                id='rock'
              />
              <label class='radio-container' htmlFor='rock'>
                <img src={rock} alt='Image Option 1' />
              </label>
              <h3> Rock</h3>
            </span>

            <span className='soundMode '>
              <input
                checked={data == 'Jazz'}
                onChange={e => inputDataChange('GraphicEqualizer', 'Jazz')}
                type='radio'
                name='PresetMode'
                id='jazz'
              />
              <label class='radio-container' htmlFor='jazz'>
                <img src={jazz} alt='Image Option 1' />
              </label>
              <h3> Jazz</h3>
            </span>

            <span className='soundMode '>
              <input
                checked={data == 'Pop'}
                onChange={e => inputDataChange('GraphicEqualizer', 'Pop')}
                type='radio'
                name='PresetMode'
                id='Pop'
              />
              <label class='radio-container' htmlFor='Pop'>
                <img src={pops} alt='Image Option 1' />
              </label>
              <h3> Pop</h3>
            </span>
            <span className='soundMode '>
              <input
                checked={data == 'Classical'}
                onChange={e => inputDataChange('GraphicEqualizer', 'Classical')}
                type='radio'
                name='PresetMode'
                id='classical'
              />
              <label class='radio-container' htmlFor='classical'>
                <img src={classical} alt='Image Option 1' />
              </label>
              <h3> Classical</h3>
            </span>
            <span className='soundMode '>
              <input
                checked={data == 'HipHop'}
                onChange={e => inputDataChange('GraphicEqualizer', 'HipHop')}
                type='radio'
                name='PresetMode'
                id='hipHop'
              />
              <label class='radio-container' htmlFor='hipHop'>
                <img src={hiphop} alt='Image Option 1' />
              </label>
              <h3> Hip Hop</h3>
            </span>
            <span className='soundMode '>
              <input
                checked={data == 'Blues'}
                onChange={e => inputDataChange('GraphicEqualizer', 'Blues')}
                type='radio'
                name='PresetMode'
                id='blues'
              />
              <label class='radio-container' htmlFor='blues'>
                <img src={blues} alt='Image Option 1' />
              </label>
              <h3> Blues</h3>
            </span>
            <span className='soundMode '>
              <input
                checked={data == 'Electronic'}
                onChange={e =>
                  inputDataChange('GraphicEqualizer', 'Electronic')
                }
                type='radio'
                name='PresetMode'
                id='electronic'
              />
              <label class='radio-container' htmlFor='electronic'>
                <img src={electronic} alt='Image Option 1' />
              </label>
              <h3> Electronic</h3>
            </span>
            <span className='soundMode '>
              <input
                checked={data == 'Metal'}
                onChange={e => inputDataChange('GraphicEqualizer', 'Metal')}
                type='radio'
                name='PresetMode'
                id='metal'
              />
              <label class='radio-container' htmlFor='metal'>
                <img src={metal} alt='Image Option 1' />
              </label>
              <h3> Metal</h3>
            </span>
          </div>

          <hr />
          <h3 className='text_secondary' style={{ margin: '2rem 10px' }}>
            EQUALISER
          </h3>
          <div style={{ display: 'flex', width: '100%' }}>
            <div
              style={{
                color: 'grey',
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                textAlign: 'right',
                margin: '-18px -1px'
              }}
            >
              <p className='equalizerBar' s>
                100
              </p>
              <p className='equalizerBar'>50</p>
              <p className='equalizerBar'>0</p>
              <p className='equalizerBar'>-50</p>
              <p className='equalizerBar'>-100</p>
            </div>
            <input
              type='range'
              name='equa1'
              onChange={e => DataChange(e, setEqua1)}
              value={equa1}
              className='equalizer'
            />
            <input
              type='range'
              onChange={e => DataChange(e, setEqua2)}
              value={equa2}
              name='equa2'
              className='equalizer'
            />
            <input
              type='range'
              onChange={e => DataChange(e, setEqua3)}
              value={equa3}
              name='equa3'
              className='equalizer'
            />
            <input
              type='range'
              onChange={e => DataChange(e, setEqua4)}
              value={equa4}
              name='equa4'
              className='equalizer'
            />
            <input
              type='range'
              onChange={e => DataChange(e, setEqua5)}
              value={equa5}
              name='equa5'
              className='equalizer'
            />
            <input
              type='range'
              onChange={e => DataChange(e, setEqua6)}
              value={equa6}
              name='equa6'
              className='equalizer'
            />
            <input
              type='range'
              onChange={e => DataChange(e, setEqua7)}
              value={equa7}
              name='equa7'
              className='equalizer'
            />
            <input
              type='range'
              onChange={e => DataChange(e, setEqua8)}
              name='equa8'
              value={equa8}
              className='equalizer'
            />
            <input
              type='range'
              onChange={e => DataChange(e, setEqua9)}
              value={equa9}
              name='equa9'
              className='equalizer'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Equaliser
