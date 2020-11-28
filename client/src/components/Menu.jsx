import React from 'react';
import styles from '../styles/menu.module.css'

const Menu = (props) => {

  return (
    <div className={styles.menu}>
      <div className={styles.bold}>Photos (250)</div>

      <div className={styles.menu_middle}>
        <div className={styles.space_between}>
          <img height="17px"src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/square.svg"/>
        </div>
          <span>Show photos from my</span>
        <div className={styles.beauty_box}>
          <div className={styles.space_between}>
            <img height='20px'src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/overlap.svg"/>
          </div>
          <span className={styles.beauty_matches}>Beauty Matches</span>
          <div >
            <img height="12px" styles = {{paddingLeft: '3px'}} src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/question-mark-on-a-circular-black-background.svg"/>
          </div>
        </div>
      </div>

      <div className={styles.view_by_color}>
        view by color<span className={styles.bold}>(ALL)</span>
      </div>

    </div>
  )
}


export default Menu;


// const menu =  {
//   display: 'flex',
//   fontFamily: 'helvetica neue,helvetica,arial,sans-serif'
// }

// const view_by_color = {
//   marginLeft: 'auto'
// }

// const bold = {
//   fontWeight: 700,
//   lineHeight: 1.25
// }

// const space_between = {
// padding: '0px 2px 0 9px'
// }
// const beauty_box = {
// display: 'flex'
// }
// const beauty_matches = {
//   fontWeight: 600,
//   fontSize: '13px'
// }

// const menu_middle = {
//   display: 'flex',
//   fontSize: '15px'
// }

