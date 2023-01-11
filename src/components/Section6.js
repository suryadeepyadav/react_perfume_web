import React from 'react';
import './css/section6.css';
import s6image1 from './images/varient3.jpg';
import s6image2 from './images/varient1.jpg';
import s6image3 from './images/varient2.jpg';
import s6image4 from './images/varient4.jpg';


const Section6 = () => {
    return (
        <div className='section6'>
            <div className='s6left'>
                <div className='s6lcontent'>
                    <p style={{marginTop:'1.6em'}}>Product Variants</p>
                    <span style={{color:'#a05f43', fontSize:'38px',fontWeight:'bold'}}>Perfume Variants</span>
                    <p style={{color:'#7a7a7a',fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button>View More</button>
                </div>
            </div>
            <div className='s6right'>
                <div className='s6images'>
                    <div className='images'>
                        <img src={s6image1} alt="" className='myimage' />
                        <span style={{marginBottom:'1em'}}>
                            <p style={{ fontSize: '1.4em', fontWeight: 'bold', marginBottom: '.5em' }}>A Lime Citrus</p>
                            <p style={{cursor:'pointer', fontSize:'1.2em'}}>Learn More</p>
                        </span>
                    </div>
                    <div className='images'>
                        <img src={s6image4} alt="" className='myimage' />
                        <span>
                            <p style={{ fontSize: '1.4em', fontWeight: 'bold', marginBottom: '.5em' }}>A Lime Citrus</p>
                            <p style={{cursor:'pointer', fontSize:'1.2em'}}>Learn More</p>
                        </span>
                    </div>
                    <div className='images'>
                        <img src={s6image3} alt="" className='myimage' />
                        <span>
                            <p style={{ fontSize: '1.4em', fontWeight: 'bold', marginBottom: '.5em' }}>A Lime Citrus</p>
                            <p style={{cursor:'pointer', fontSize:'1.2em'}}>Learn More</p>
                        </span>
                    </div>
                    <div className='images'>
                        <img src={s6image2} alt="" className='myimage' />
                        <span>
                            <p style={{ fontSize: '1.4em', fontWeight: 'bold', marginBottom: '.5em' }}>A Lime Citrus</p>
                            <p style={{cursor:'pointer', fontSize:'1.2em'}}>Learn More</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6
