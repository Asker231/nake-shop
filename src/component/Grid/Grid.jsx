import React from 'react'
import style from './grid.module.css';
import imageOne from '../assets/gridSectio/Rectangle2.png';
import imageTwo from '../assets/gridSectio/Rectangle3.png';

const Grid = () => {
  return (
     <div className={style.grid}>
         <div className={style.top}>
            <h2>Our Shoes Reviews</h2>
            <p>Check the comments and ratings given by users</p>
         </div>
         <div className={style.gridLayout}>
            <div className={style.leftSide}></div>
            <div className={style.rightSide}>
                <img src={imageOne} alt="image" />
                <img src={imageTwo} alt="image" />
            </div>
         </div>
    </div>
  )
}

export default Grid