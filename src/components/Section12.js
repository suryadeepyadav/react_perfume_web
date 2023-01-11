import React from 'react'
import './css/section12.css';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
const Section12 = () => {
    return (
        <div className='section12'>
            <div className='s12content'>
                <p style={{color:'#000000',fontSize:'18px',marginBottom:'.4em'}}>Our Newsletter</p>
                <span style={{color:'#a05f43',fontSize:'38px'}}>Join Our Newsletter</span>
            </div>
            <div className='s12right'>
                <input type="text" placeholder='Your email here' />
                <button>Submit <HiOutlineArrowNarrowRight style={{position:'relative',top:'.2em'}}/> </button>
            </div>
        </div>
    )
}

export default Section12
