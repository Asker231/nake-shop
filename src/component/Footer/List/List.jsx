import React from 'react'
import style from './list.module.css';

const List = ({title,item,itemtwo,itemtree,itemfor}) => {
  return (
    <div className={style.list}>
         <h3>{title}</h3>
         <span>{item}</span>
         <span>{itemtwo}</span>
         <span>{itemtree}</span>
         <span>{itemfor}</span>
    </div>
  )
}

export default List