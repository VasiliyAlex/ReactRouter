import {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from './Products.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { productsSelector, getProducts } from '../redux/products/productsSlice'
import { ReactContext } from '../context/context'

const Products = () => {
  const dispatch = useDispatch()
  const {productsArrow}  = useSelector(productsSelector)
  const {addArrowHandler} = useContext(ReactContext)
  
  useEffect(() => {
    dispatch(getProducts()) 
  }, [])
  console.log(productsArrow);
  return (
    <div className={styles.products}>
    {productsArrow? (productsArrow.products.map((arrow) => (
                    <div  key = {arrow.id} className={styles.item}>
                    <Link to={`/products/${arrow.id}`} onClick={() => addArrowHandler(arrow)}>
                      <img src={arrow.thumbnail} alt="" className={styles.item__img} />
                      <p className={styles.item__title}>{arrow.title}</p>
                      <p className={styles.item__price}>{arrow.price}$</p>
                      </Link> 
                    </div>
               ))) : (<p className={styles.loading}>Loading</p>)}
   </div>
  )
}

export default Products