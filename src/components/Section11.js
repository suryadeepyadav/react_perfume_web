import React from 'react'
import './css/section11.css';
import images111 from './images/blogimg1.jpg';
import images112 from './images/blogimg2.jpg';
import images113 from './images/blogimg3.jpg';

import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const Section11 = () => {
    return (
        <div className='section11'>
            <div className='uppers11'>
                <div>
                    <p style={{color:'#000000',fontSize:'18px',marginBottom:'.4em'}}>Our News</p>
                    <span style={{color:'#a05f43', fontSize:'35px', fontWeight:'bold'}}>News & Article</span>
                </div>
                <button>Veiw More</button>
            </div>
            <div className='lowers11'>
                <div className='lowers11content'>
                    <div className='s11img'>
                        <img src={images111} alt="" />
                        <p>Perfume</p>
                    </div>
                    <span style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>How to make Your fragrance smells last through the day</span>
                    <p style={{color:'#7a7a7a',fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    <span style={{color:'#a05f43',fontSize:'16px'}}>Read More <HiOutlineArrowNarrowRight style={{position:'relative',top:'.2em'}}/></span>
                </div>
                <div className='lowers11content'>
                    <div className='s11img'>
                        <img src={images112} alt="" />
                        <p>business</p>
                    </div>
                    <span style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Experimental Perfume Club Opens First Flagship in London</span>
                    <p style={{color:'#7a7a7a',fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    <span style={{color:'#a05f43',fontSize:'16px'}}>Read More <HiOutlineArrowNarrowRight style={{position:'relative',top:'.2em'}}/></span>
                </div>
                <div className='lowers11content'>
                    <div className='s11img'>
                        <img src={images113} alt="" />
                        <p>News</p>
                    </div>
                    <span style={{color:'#a05f43',fontSize:'24px',fontWeight:'bold'}}>Burberry Reveals Adam Driver as Face of New Men’s Fragrance</span>
                    <p style={{color:'#7a7a7a',fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    <span style={{color:'#a05f43',fontSize:'16px'}}>Read More <HiOutlineArrowNarrowRight style={{position:'relative',top:'.2em'}}/></span>
                </div>
            </div>
        </div>
    )
}

export default Section11
