import React from 'react'
import Card from './Card/Card'
import style from './cardslider.module.css';
import {CardValue} from './Card/card.prop.js';

const CardSlider = () => {
  return (
      <div className={style.cards}>
        <h2>Trending in 2023</h2>
                <div className={style.cardSlider}>
        {
            CardValue.map((el)=>{
                return <>
                <Card
                im={el.imag}
                title={el.title}
                descr={el.description}
                />
                  
                </>
            })
        }
    </div>
      </div>
  )
}

export default CardSlider