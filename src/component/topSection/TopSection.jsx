import React from 'react'
import RightSide from './RightSide/RightSide';
import TextLeftSide from './TextLeftSide/TextLeftSide';
import style from './topsection.module.css';

const TopSection = () => {
  return (
    <div className={style.topsection}>
        <TextLeftSide/>
        <RightSide/>
    </div>
  )
}

export default TopSection