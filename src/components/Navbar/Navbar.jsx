import { useState} from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import basket from '../.././assets/basket.svg'


const Navbar = () => {
  
  const navs = [
    {id: 1, title: 'Home', url: '/'},
    {id: 2, title: 'Carts', url: '/Carts'},
    {id: 3, title: 'Products', url: '/Products'},
    {id: 4, title: 'Posts', url: '/Posts'},
   ]
  
  return (
    <div className={styles.nav}>
        <div className={styles.box}>
           <ul className={styles.list}>
          {navs.map(nav => (
            <li key ={nav.id} className={styles.li}>
              <NavLink to={nav.url} className={styles.link}>{nav.title}</NavLink>
              </li>
          ))}
        </ul>
        <div className={styles.basket}><img src={basket} alt="" /></div>
        
        
        </div>
      </div>
  )
}

export default Navbar