import React,{useState} from 'react'
import styles from './index.module.css'

const Index = () => {
    const [togle, seTogle] = useState(false);
  return (
    <div className={styles.body}> 
        <div className={togle? `${styles.active} ${styles.searchBox} ` : styles.searchBox}>
    <div className={styles.search} onClick={()=> seTogle(true)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#BBBBBB" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      <path fill="none" d="M0 0h24v24H0V0z"/>
      </svg>    
      </div>
    <div className={styles.searchInput}>
        <input type="text" placeholder="Search" />
    </div>
    <div className={styles.close} onClick={()=> seTogle(false)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#BBBBBB">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
     </svg>    
     </div>
</div></div>
  )
}

export default Index