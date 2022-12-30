import React, { useState ,useEffect} from 'react'
import style from './comers.module.css';
import { icon } from './icon.prop';

const Comers = () => {
    const [icons,setIcons] = useState([]);
    useEffect(() => {
     setIcons(icon)
    }, [])
    
  return (
    <div className={style.comers}>
        {
            icons.map((el,ind)=>{
                return <a href='#' key={ind}> <img src={el.icon}  alt="icon" /> </a>
            })
        }
    </div>
  )
}

export default Comers