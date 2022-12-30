import React from 'react'
import style from './slidesection.module.css';
import imageSlider from '../assets/top/Rectangle5.png'

const SlideSection = () => {
  return (
    <div className={style.slidesection}>
        <img className={style.imageOne} src={imageSlider} alt="image" />
        <div className={style.before}>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
        </div>
        <a href='#'>Explore More -&gt;</a>
    </div>
  )
}

export default SlideSection