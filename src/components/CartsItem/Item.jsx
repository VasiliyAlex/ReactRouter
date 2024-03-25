import { useContext, useEffect, useState } from "react";
import styles from "./Item.module.scss";
import { ReactContext } from "../../context/context";

const Item = () => {
  const { arrow } = useContext(ReactContext);
  
  
const [arrow1, setArrow1] = useState(null)
  useEffect(() => {
    setArrow1(arrow)
    console.log(arrow1);
  }, [])
  
  
  return (
    <div className={styles.container}>
      {arrow1 ? (
        <div className={styles.item}>
          {arrow1.thumbnail &&   <div className={styles.item__left}>
            <img src={arrow.thumbnail} alt="" className={styles.item__left_img} />
          </div> }
         
          <div className={styles.item__right}>
            <p className={styles.item__}>{arrow.title}</p>
            {arrow.category &&  <p className={styles.item__P}>category:{arrow.category}</p>}  
            {arrow.brand &&  <p className={styles.item__P}>brand:{arrow.brand}</p>}  
            {arrow.description &&  <p className={styles.item__P}>description:{arrow.description}</p>}  
            {arrow.price &&  <p className={styles.item__}>Price:{arrow.price}$</p>}  
            {arrow.discountedPrice &&  <p className={styles.item__}>DiscountedPrice:{arrow.discountedPrice}</p>}  
            {arrow.discountPercentage &&  <p className={styles.item__}>DiscountPercentage:{arrow.discountPercentage}</p>}  
            {arrow.total &&  <p className={styles.item__P}>total:{arrow.total}</p>} 
            {arrow.body &&  <p className={styles.item__p}>{arrow.body}</p>} 
            
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item;
