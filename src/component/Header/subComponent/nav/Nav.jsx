import React, { useEffect, useState } from 'react'
import { listNavigation } from './nav.prop'
import style from './nav.module.css';

const Nav = () => {
    const[list,setList] = useState([])
    useEffect(()=>{
         setList(listNavigation)
    },[])
  return (
    <div className={style.nav}>
        {
            list.map((el,ind)=>{
                return <a href='#' key={ind}>{el.descript}</a>
            }) 
        }   
    </div>
  )
}

export default Nav