import React from 'react'
import './css/footer.css';
import imagesf from './images/flogo.png';
import {IoLocationSharp} from 'react-icons/io5';
import {BsTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {FaCcVisa} from 'react-icons/fa';
import {FaCcJcb} from 'react-icons/fa';
import {FaCcApplePay} from 'react-icons/fa';
import {FaCcMastercard} from 'react-icons/fa';
import {FaCcAmex} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='upperfooter'>
                <div className='flogo'>
                    <img src={imagesf} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada neque sed pellentesque ullamcorper.</p>
            </div>
            <div className='lowerfooter'>
                <div className='lfitem1'>
                    <span>Keep Updated</span>
                    <p style={{ marginBottom: '1.5em', marginTop: '1.2em' , lineHeight:'1.4em' }}>Subscribe sit amet dignissim sem. Duis suscipit, nisi ut fermentum</p>
                    <div className='ficons'>
                        <FaCcVisa/>                        
                        <FaCcAmex/>
                        <FaCcMastercard/>
                        <FaCcJcb/>
                        <FaCcApplePay/>
   
                    </div>
                </div>
                <div className='lfitem2'>
                    <span>Other Pages</span>
                    <p style={{ marginTop: '.82em' }}>About</p>
                    <p>Services</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>
                <div className='lfitem3'>
                    <span>Quick Links</span>
                    <p style={{ marginTop: '.82em' }}>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Credit</p>
                    <p>FAQ</p>
                </div>
                <div className='lfitem4'>
                    <span> Office Location</span>
                    <p style={{ display:'flex'}}> <IoLocationSharp style={{position:'relative',top:'.01em', right:'.2em',fontSize:'2em'}}/> <p style={{ position:'relative',top:'-1.2em', lineHeight:'1.4em' }}> Jl. Raya Mas Ubud No. 86, Gianyar, Bali, Indonesia 80225 </p></p>
                    <p style={{marginTop:'-.3em'}}> <BsTelephoneFill style={{position:'relative',top:'.2em' , right:'.2em'}}/> +62 361 234 4567</p>
                    <p> <AiOutlineMail style={{position:'relative',top:'.2em' , right:'.2em'}}/> contact@domain.com</p>
                </div>
            </div>
            <div className='copyright'>
                <p>© 2020 Template By Jegtheme</p>
                <span className='midea'>
                    <p>Fb</p>
                    <p>lg</p>
                    <p>TW</p>
                    <p>Yt</p>
                </span>
            </div>
        </div>
    )
}

export default Footer
