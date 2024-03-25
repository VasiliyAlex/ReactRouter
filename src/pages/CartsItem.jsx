import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Carts.module.scss'
import { ReactContext } from '../context/context'

const CartsItem = ({cartArrow}) => {
  
  const {addArrowHandler} = useContext(ReactContext)
  
  return (
    <div className={styles.cart}>
       {cartArrow.products.map((arrow) => (
          
          <div  key = {arrow.id} className={styles.item}>
            <Link to={`/carts/${arrow.id}`} onClick={() => addArrowHandler(arrow)}>
              <img src={arrow.thumbnail} alt="" className={styles.item__img} />
              <p className={styles.item__title}>{arrow.title}</p>
              <p className={styles.item__price}>{arrow.price}$</p>
              </Link> 
            </div>
            
     ))}
    </div>
  )
}

export default CartsItem