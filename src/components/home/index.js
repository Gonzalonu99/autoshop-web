import React from 'react';
import './home.css';
import Video from './atardecer.mp4';

const Home = () => {
  return (
    <div className='home-container' id='home'>
    <video src={Video} autoPlay loop muted/>
    <div className='home-text-container'><p className='home-text'>Expendedor<br/><b>Automatizado</b><br/>de productos</p></div>
    </div>
  )
}

export default Home