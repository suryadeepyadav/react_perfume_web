import React from 'react';
import './css/section9.css';
import images91 from './images/perfum9.png';
import images92 from './images/perfum10.png';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const Section9 = () => {
    return (
        <div className='section9'>
            <div className='s9leftside'>
                <div className='s9imags'>
                    <img src={images91} alt="" />
                </div>
                <div className='s9content'>
                    <p style={{color:'#000000',fontSize:'16px'}}>New year sale</p>
                    <span style={{color:'#a05f43',fontSize:'32px',fontWeight:"bold"}}>50% Off Discount From Online Shop</span>
                    <p style={{color:'#a05f43',fontSize:'16px',cursor:'pointer'}}>Shop Now <HiOutlineArrowNarrowRight style={{position:'relative',top:'.2em'}}/></p>
                </div>
            </div>
            <div className='s9rightside'>
            <div className='s9imags'>
                    <img src={images92} alt="" />
                </div>
                <div className='s9content'>
                    <p style={{color:'#000000',fontSize:'16px'}}>Black Friday Sale</p>
                    <span style={{color:'#a05f43',fontSize:'32px',fontWeight:"bold"}}>Free Shipping Just This Month</span>
                    <p style={{color:'#a05f43',fontSize:'16px',cursor:'pointer'}}>Shop Now <HiOutlineArrowNarrowRight style={{position:'relative',top:'.2em'}}/></p>
                </div>
            </div>
        </div>
    )
}

export default Section9
