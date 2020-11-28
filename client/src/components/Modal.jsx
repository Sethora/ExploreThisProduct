import React from 'react';
import styles from '../styles/modal.module.css'
import ProductPanel from './ProductPanel.jsx';
import UserPanel from './UserPanel.jsx'


const Modal = (props) => {
  if(!props.show){
    return null;
  }

  // member clicked
  const member = (props.currentMember[0] === undefined) ? {
    Name: '',
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
  )
}

export default Modal;


// const MODAL_Overlay = {
//   backgroundColor:' rgba(150,150,150,.8)',
//   height: '100%',
//   width: '100%',
//   position: 'fixed',
//   zIndex: 100
// }

// const MODAL_STYLES = {
//   position: 'absolute',
//   margin: '45px auto auto',
//   backgroundColor: '#FFF',
//   padding: '10px',
//   // height: '539px',
//   width: '1036px',
//   maxWidth: '95%',
//   zIndex: '2000',
//   // overflowX: 'auto',
//   left: '50%',
//   top: '35%',
//   transform: 'translate(-50%, -50%)',
//   borderRadius: '5px'
// }

// const MODAL_Header = {
//   width: '100%',
//   backgroundColor: '#FFF',
//   borderBottom: '2px solid whitesmoke',
//   textAlign: 'center',
//   height: '55px',
//   fontSize: '12.5px',
//   fontWeight: 700,
//   fontFamily: "helvetica neue, helvetica, arial, sans-serif",
//   display: 'inline-block'
// }

// const header_title = {
//   lineHeight: '60px',
//   fontSize: '16px',
//   fontWeight: 700,
//   margin: 0
// }

// const header_close = {
//   position: 'absolute',
//   right: '10px',
//   top: '28px',
//   backgroundColor: '#fff',
//   height: '29px',
//   width: '29px'
// }

// const MODAL_Main = {
//   position: 'relative',
//   padding: '16px 0 10px 16px',
//   maxWidth: '1036px',
//   display: 'flex',
//   alignItems: 'flex-start',
//   justifyContent: 'space-between'
// }

// const MODAL_ImageBox = {
//   position: 'relative',
//   height: '458px',
//   width: '458px',
//   minWidth: '458px',
//   margin: 0
// }

// const mainImage = {
//   maxWidth: '100%',
//   maxHeight: '100%',
//   height: 'auto',
//   width: '458px'
// }

// const MODAL_InfoPanel = {
//   minWidth: '0',
//   flexGrow: '1',
//   padding: '10px 0 0 32px'
// }