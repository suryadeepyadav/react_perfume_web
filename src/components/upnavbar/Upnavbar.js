import React from 'react'
import './upnavbar.css';
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa';
import {AiFillClockCircle} from 'react-icons/ai';

const Upnavbar = () => {
    return (
        <div className='upnavbar'>
            <div>
              <AiFillClockCircle style={{position:'relative',top:'.2em', color:'#a05f43'}}/>  Opening : Mon-Fri 08:00 - 17:00
            </div>
            <div className='upnavbarright'>
                
                    <div className='upicon '> <FaFacebookF style={{paddingLeft:'.4em' , fontSize:'1em' ,position:'relative',top:'.7em' , left:'.2em'}} /></div>
                    <div className='upicon ' id='vl'> <FaTwitter  style={{paddingLeft:'.4em' , fontSize:'1.7em' ,position:'relative',top:'-.3em' , left:'.5em'}}/></div>
                    <div className='upicon ' id='vl'> <FaInstagram  style={{paddingLeft:'.4em' , fontSize:'1.7em' ,position:'relative',top:'-.3em' , left:'.5em'}}/></div>
                    <div className='upicon ' id='vl'> <FaYoutube style={{paddingLeft:'.4em' , fontSize:'1.7em' ,position:'relative',top:'-.3em' , left:'.5em'}} /></div>
                
            </div>
        </div>
    )
}

export default Upnavbar
