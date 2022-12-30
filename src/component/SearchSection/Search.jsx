import React from 'react'
import Button from '../Button/Button';
import style from './search.module.css';

const Search = () => {
  return (
    <div className={style.search}>
        <div className={style.content}>
            <div className={style.left}>
                <h1>Subscribe Us to get monthly voucher or<br/>
                 25 % off</h1>
                 <input type="text"/>
                <Button title="Subscribe"/>
            </div>
            <div className={style.right}></div>
        </div>
    </div>
  )
}

export default Search