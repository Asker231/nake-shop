import React, { useEffect, useState } from 'react'
import Button from '../../Button/Button';
import style from './textleftside.module.css';
import { textside } from './textside.prop';

const TextLeftSide = () => {
    const[leftSide,setLeftSide] = useState([]);

    useEffect(()=>{
        setLeftSide(textside)
    },[])
  return (
    <div className={style.textleftside}>
        {
            leftSide.map((el,ind)=>{
                return (
                <>
                <h1 className={style.title}>{el.title}</h1>
                <span className={style.years}>{el.years}</span>
                <p className={style.description}>{el.descript}</p>
                <Button fs={34} title={el.buttonTitle}/>
                </>
                )
            })
        }
        </div>
  )
}

export default TextLeftSide