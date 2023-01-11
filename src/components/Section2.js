import React from 'react'
import './css/section2.css'
import { BsTruck } from 'react-icons/bs'
import {MdPayments} from 'react-icons/md';
import {BiSupport} from 'react-icons/bi';
import {AiOutlineDollar} from 'react-icons/ai';

const Section2 = () => {
    return (
        <div className='section2'>
            <div className='part1s2'>
            <div className='items'>
                <div>
                    <BsTruck className='icons iconsb' />
                </div>
                <div>
                    <span>Free Shipping</span>
                    <p>Orders Over $500</p>
                </div>
            </div>
            <div className='items itemsb'>
                <div>
                    <MdPayments className='icons  iconsb' />
                </div>
                <div className='contentm'>
                    <span>Quick Payment</span>
                    <p>100% Secure</p>
                </div>
            </div>
            </div>
            <div className='part2s2'>
            <div className='items itemsb' id='bigdeal'>
                <div>
                    <AiOutlineDollar className='icons iconsb' />
                </div>
                <div className='contentm' >
                    <span >Big Deals</span>
                    <p id='cashback'>Over 40% Cashback</p>
                </div>
            </div>
            <div className='items itemsb' style={{marginLeft:'-2.9em'}}>
                <div>
                    <BiSupport className='icons iconsb' />
                </div>
                <div className='contentm'>
                    <span>24/7 Support</span>
                    <p>Ready For You</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Section2
