import React from 'react';
import './css/section8.css';
import images8 from './images/perfum2.png';
import images81 from './images/perfum3.png';
import images82 from './images/perfum4.png';
import images83 from './images/perfum5.png';
import images84 from './images/perfum6.png';
import images85 from './images/perfum7.png';
import images86 from './images/perfum8.png';
    // import images87 from './images/perfum9.png';
    // import images88 from './images/perfum10.png';
import images89 from './images/perfum1.png';

const Section8 = () => {
  return (
    <div className='section8'>
      <div className='part1'>
        <div className='s8content'>
            <div className='s8imgs'>
            <img src={images8} alt=""  />
            </div>
            <div className='s8cont'>
            <p style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Flower Mist</p>
            <span style={{color:'#7a7a7a',fontSize:'16px',width:'95%', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <p style={{color:'#000000',fontSize:'18px',fontWeight:'bold'}}>$42.00</p>
            </div>
        </div>
        <div className='s8content'>
            <div className='s8imgs'>
            <img src={images89} alt=""  />
            </div>
            <div className='s8cont'>
            <p style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Ocean Cologne</p>
            <span style={{color:'#7a7a7a',fontSize:'16px',width:'95%', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <p style={{color:'#000000',fontSize:'18px',fontWeight:'bold'}}>$45.00</p>
            </div>
        </div>
        <div className='s8content'>
            <div className='s8imgs'>
            <img src={images81} alt=""  />
            </div>
            <div className='s8cont'>
            <p style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Rose Flower</p>
            <span style={{color:'#7a7a7a',fontSize:'16px',width:'95%', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <p style={{color:'#000000',fontSize:'18px',fontWeight:'bold'}}>$15.00</p>
            </div>
        </div>
        <div className='s8content'>
            <div className='s8imgs'>
            <img src={images82} alt=""  />
            </div>
            <div className='s8cont'>
            <p style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Capital City</p>
            <span style={{color:'#7a7a7a',fontSize:'16px',width:'95%', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <p style={{color:'#000000',fontSize:'18px',fontWeight:'bold'}}>$20.00</p>
            </div>
        </div>
      </div>
      <div className='part1' style={{margintop:'1.5em'}}>
        <div className='s8content'>
            <div className='s8imgs'>
            <img src={images83} alt=""  />
            </div>
            <div className='s8cont'>
            <p style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Metropolitan Mist</p>
            <span style={{color:'#7a7a7a',fontSize:'16px',width:'95%', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <p style={{color:'#000000',fontSize:'18px',fontWeight:'bold'}}>$42.00</p>
            </div>
        </div>
        <div className='s8content'>
            <div className='s8imgs'>
            <img src={images84} alt=""  />
            </div>
            <div className='s8cont'>
            <p style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Red Fire Mist</p>
            <span style={{color:'#7a7a7a',fontSize:'16px',width:'95%', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <p style={{color:'#000000',fontSize:'18px',fontWeight:'bold'}}>$45.00</p>
            </div>
        </div>
        <div className='s8content'>
            <div className='s8imgs'>
            <img src={images85} alt=""  />
            </div>
            <div className='s8cont'>
            <p style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Forest Mist</p>
            <span style={{color:'#7a7a7a',fontSize:'16px',width:'95%', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <p style={{color:'#000000',fontSize:'18px',fontWeight:'bold'}}>$15.00</p>
            </div>
        </div>
        <div className='s8content'>
            <div className='s8imgs'>
            <img src={images86} alt=""  />
            </div>
            <div className='s8cont'>
            <p style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Sun Bleach Mist</p>
            <span style={{color:'#7a7a7a',fontSize:'16px',width:'95%', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <p style={{color:'#000000',fontSize:'18px',fontWeight:'bold'}}>$20.00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section8
