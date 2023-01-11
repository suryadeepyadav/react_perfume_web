import React from 'react'
import './css/section3.css';
import image1 from './images/s3image1.jpg';
import image2 from './images/s3image2.jpg';

const Section3 = () => {
    return (
        <div className='section3'>
            <div className='s3content'>
                <div className='content1'>
                    <p>Perfume Product</p>
                    <span style={{ color: '#a05f43', fontSize: '1.7em', fontWeight: 'bold', paddingTop: '.9em' }}>Perfume for Everyone</span>
                </div>
                <div className='content1' id='desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </div>
            </div>
            <div className='s3images'>
                <div className='s3image'>
                    <img src={image1} alt='image1' />
                    <span className='imgdesc'>
                        <p className='bsize'>Woman Perfume</p>
                        <p>See More</p>
                    </span>
                </div>
                <div className='s3image'>
                    <img src={image2} alt='image2' />
                    <span className='imgdesc'>
                        <p className='bsize'>man Perfume</p>
                        <p>See More</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Section3
