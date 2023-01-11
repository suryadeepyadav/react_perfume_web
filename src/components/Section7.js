import React from 'react';
import './css/section7.css';

const Section7 = () => {
    return (
        <div className='section7'>
            <div className='s7lcontent'>
                <p style={{ marginTop: '1.6em',fontSize:'16px'}}>Product Variants</p>
                <span style={{ color: '#a05f43', fontSize: '38px', fontWeight: 'bold' }}>Our Perfume Product</span>
                <p style={{ color: '#7a7a7a', fontSize: '16px', }} className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='buttons7'>
                    <button className='learnbtns7'>Populer</button>
                    <button className='learnbtns7' id='shopbtns7'>Best Selling</button>
                    <button className='learnbtns7 uniqe' id='shopbtns7'>Top Rated</button>
                </div>
            </div>
        </div>
    )
}

export default Section7
