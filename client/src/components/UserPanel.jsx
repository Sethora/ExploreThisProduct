import React from 'react';
import styles from '../styles/userpanel.module.css'

const UserPanel = (props) => {
  console.log('USERPANEL STYLES',styles)
  const {Name, Skin_type} = props.currentMember;

  return (
    <div className={styles.userpanel}>
      <div className="image-details">
        <div className={styles.image_details_header}>
          <div className="image-title-wrapper"><b>blues</b><span>in Makeup Is Life</span></div>
          <div className="image-title-right" style={{color:' #757575'}}>
            <span>Nov 20</span>
            <span className={styles.pipe}>|</span>
            <span>Report</span>
          </div>
        </div>
      </div>
      <div className={styles.user_info}>
      <div className={styles.avatar_user_box}>

            <img className={styles.avatar}src={props.avatar}></img>

          <div className="username-wrapper-left">
          <div className={styles.user_and_badges}>
            <div className={styles.username}>
              <span>{Name || ''}</span>
            </div>
            <div className={styles.badges}>
              <div>
                <img height='12px' src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/insider-badge.png"></img>
              </div>
              <div style={{paddingLeft: '3px'}}>
                <img height='12px' src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/rookie-badge.png"></img>
              </div>
            </div>
          </div>
            <div class="skin-type">Skin Type: <span>{Skin_type}</span></div>
          </div>

        </div>
      <div className="share-button-right">
          <img height='20px' src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/share.png"></img>
        </div>
      </div>
    </div>
  )
}

export default UserPanel;

// const MODAL_UserPanel = {
//   height: '63px',
//   backgroundColor: '#FFF',
//   fontFamily: 'helvetica neue, helvetica, arial, sans-serif',
//   paddingRight: '20px'
// }

// const image_details_header = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   fontSize: '14px',
//   marginBottom: '10px'
// }

// const pipe = {
//   padding: '0 5px'
// }

// const avatar = {
//   verticalAlign: 'middle',
//   width: '25px',
//   height: '25px',
//   borderRadius: '50%',
//   opacity: '.75',
//   paddingRight: '6px'
// }

// const user_info = {
//   display: 'flex',
//   height: '38px',
//   justifyContent: 'space-between',
//   color: '#757575',
//   fontSize: '12px'
// }

// const avatar_user_box = {
//   display: 'flex'
// }

// const user_and_badges = {
//   display: 'flex'
// }

// const username = {
//   fontWeight: '600'
// }

// const badges = {
//   display: 'flex',
//   paddingLeft: '5px'
// }
