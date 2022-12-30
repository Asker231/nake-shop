import React from 'react'
import style from './footer.module.css';
import List from './List/List';

const Footer = () => {
    let arr = [1,2,3]
  return (
    <div className={style.footer}>
        <div className={style.logo}>Rapture<br/>
         Athletics</div>
       <List 
       title="Links"
       item="Home"
       itemtwo="About"
       itemtree="Cart Page"
       itemfor="Contact Us"
       />
        <List 
       title="Contact"
       item="Email"
       itemtwo="LinkedIn"
       itemtree="Instagram"
       itemfor="Twitter"
       />
        <List 
       title="Collection"
       item="Men"
       itemtwo="Woman"
       itemtree="hildren"
       />
    </div>
  )
}

export default Footer