import React from 'react';
import styles from '../styles/userpanel.module.css'

const UserPanel = (props) => {
  const {Name, Skin_type} = props.currentMember;

  return (
    <div className={styles.userpanel}>
      <div className="image-details">
        <div className={styles.image_details_header}>
          <div className="image-title-wrapper"><b style={{paddingRight:'3px'}}>blues</b><span>in Makeup Is Life</span></div>
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
