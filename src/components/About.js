import React from 'react';
import './css/about.css';
import aimage1 from './images/bg1.jpg';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div className='about'>
      <div className='aimages'>
        <img src={aimage1} alt="" />
      </div>
      <div className='acontent'>
        <p style={{ color: '#000000' }}>About Us</p>
        <span style={{ color: '#a05f43', fontSize: '2em', fontWeight: '600' }}>Using The Organic & Natural Essence That Makes You Comfortable</span>
        <p style={{ marginTop: '.9em', color: '#7a7a7a' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div className='list-items'>
          <span>
            <p> <FaCheck style={{ position: 'relative', top: '.2em', right: '.4em', color: '#a05f43' }} />Organic Ingredients</p>
            <p> <FaCheck style={{ position: 'relative', top: '.2em', right: '.4em', color: '#a05f43' }} />Online Shopping</p>
            <p> <FaCheck style={{ position: 'relative', top: '.2em', right: '.4em', color: '#a05f43' }} />Perfume Variants</p>
          </span>
          <span>
            <p> <FaCheck style={{ position: 'relative', top: '.2em', right: '.4em', color: '#a05f43' }} />For All Gender</p>
            <p> <FaCheck style={{ position: 'relative', top: '.2em', right: '.4em', color: '#a05f43' }} />Natural Fragrants</p>
            <p> <FaCheck style={{ position: 'relative', top: '.2em', right: '.4em', color: '#a05f43' }} />High Quality Product</p>
          </span>
        </div>
        <div className='button1'>
          <button className='learnbtn'>Learn MOre</button>
          <button className='learnbtn' id='shopbtn'>Shop Online</button>
        </div>
      </div>
    </div>
  )
}

export default About
