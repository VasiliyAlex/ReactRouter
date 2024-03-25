import {useEffect} from 'react'
import styles from './Carts.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { cartsSelector, getCarts } from '../redux/carts/cartsSlice'
import CartsItem from './CartsItem'


const Carts = () => {
  
  const {cartsArrow}  = useSelector(cartsSelector)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCarts()) 
    
  }, [])
 
  console.log(cartsArrow);
  return (
    <div className={styles.carts}>
     {cartsArrow? (cartsArrow.carts.map((cartArrow) => (
                    <CartsItem
                        key={cartArrow.id}
                        cartArrow={cartArrow}
                    />
                ))) : (<p className={styles.loading}>Loading</p>)}
    </div>
  )
}

export default Carts