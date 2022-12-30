import React from 'react'
import style from './right.module.css';
import nike from '../../assets/top/redNike.svg';

const RightSide = () => {
  return (
    <div className={style.rightside}>
        <div className={style.rect}></div>
        <img src={nike} alt="nike" />
    </div>
  )
}

export default RightSide