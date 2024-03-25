import {useEffect, useContext} from 'react'
import styles from './Posts.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { postsSelector, getPosts } from '../redux/posts/postsSlice'
import { Link } from 'react-router-dom'
import { ReactContext } from '../context/context'

const Posts = () => {
  
  
  
  const {postsArrow}  = useSelector(postsSelector)
  const dispatch = useDispatch()
  const {addArrowHandler} = useContext(ReactContext)
  
  useEffect(() => {
    dispatch(getPosts()) 
  }, [])
 
  console.log(postsArrow);
  
  return (
    <div className={styles.posts}>
     {postsArrow? (postsArrow.posts.map((arrow) => (
                     <div  key = {arrow.id} className={styles.item}>
                     <Link to={`/posts/${arrow.id}`} onClick={() => addArrowHandler(arrow)}>
                       <p className={styles.item__p}>{arrow.title}...</p>
                       {/* <p className={styles.item__p}>{arrow.body}</p> */}
                       </Link> 
                     </div>
                ))) : (<p className={styles.loading}>Loading</p>)}
    </div>
  )
}

export default Posts