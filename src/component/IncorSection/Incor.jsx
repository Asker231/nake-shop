import React from 'react'
import Button from '../Button/Button';
import style from './incor.module.css';

const Incor = () => {
  return (
    <div className={style.incore}>
        <div className={style.leftSide}></div>
        <div className={style.rightSide}>
          <p>
            The right shoes can take any outfit from basic to stylish with just a few steps. At our shoe store, we have a wide variety of stylish shoes to help you create the perfect look. From contemporary sneakers to classic loafers, we have something to match all tastes and occasions. Our shoes are designed to be comfortable, durable, and fashionable, so you can look and feel your best no matter what you’re wearing.
          </p>
          <h1>Be your<br/>
           Own Level</h1>
          <Button fs={34}
           title="Shop Now"/>
        </div>
    </div>
  )
}

export default Incor