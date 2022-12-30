import React  from 'react'
import Button from '../../Button/Button';
import style from './card.module.css';


const Card = ({im,title,descr}) => {
  return (
    <div className={style.card}>

                <img src={im} alt="alt" />
                <h4>{title}</h4>
                <p>{descr}</p>
                <Button fs={18}
                 title="Purchase Now"/>
     </div>
  )
}

export default Card