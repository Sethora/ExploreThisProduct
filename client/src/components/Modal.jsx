import React from 'react';
import styles from '../styles/modal.module.css';
import ProductPanel from './ProductPanel.jsx';
import UserPanel from './UserPanel.jsx';


const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  // member clicked
  const member = (props.currentMember[0] === undefined) ? {
    Name: '',
    // eslint-disable-next-line camelcase
    Skin_type: ''
  } : props.currentMember[0];
  // products used
  const {products = [{}]} = props;


  return (
    <div>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <span className={styles.header_title}>See It In Real Life</span>
          <div className={styles.header_close} onClick={props.closeModal}>
            <img height='12px' src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/close.svg"/>
          </div>
        </div>
        <div className={styles.modal_main}>
          <div className={styles.modal_imagebox}>
            <img className={styles.main_image} src={props.imageUrl}></img>
          </div>
          <div className={styles.info_panel}>
            <UserPanel currentMember={member} avatar={props.imageUrl}/>
            <ProductPanel products={products}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
