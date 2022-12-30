import React from 'react'
import style from './button.module.css';

const Button = ({title,fs}) => {
  return (
    <button style={{fontSize:`${fs}px`}} className={style.btn}>{title}</button>
  )
}

export default Button