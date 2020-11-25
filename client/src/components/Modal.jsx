import React from 'react';
import ProductPanel from './ProductPanel.jsx';
import UserPanel from './UserPanel.jsx'

const MODAL_Overlay = {
  backgroundColor:' rgba(150,150,150,.8)',
  height: '100%',
  width: '100%',
  position: 'fixed',
  zIndex: 100
}

const MODAL_STYLES = {
  position: 'absolute',
  margin: '45px auto auto',
  backgroundColor: '#FFF',
  padding: '10px',
  zIndex: '1000',
  height: '400px',
  width: '825px',
  overflowX: 'auto',
  left: '50%',
  top: '35%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '5px'
}

const MODAL_Header = {
  height: '24px',
  backgroundColor: '#FFF',
  fontSize: '12.5px',
  fontWeight: 700,
  fontFamily: "helvetica neue, helvetica, arial, sans-serif",
  display: 'inline-block',
  width: '100%',
  textAlign: 'center',
  borderBottom: '2px solid whitesmoke'
}

const MODAL_Main = {
  backgroundColor: '#FFF',
  display: 'flex',
  padding: '16px 0 10px 16px'
}

const MODAL_ImageBox = {
  height: '335px',
  width: '440px',
  backgroundColor: '#FFF'
}

const mainImage = {
  maxWidth: '100%',
  maxHeight: '100%',
  width: 'fit-content'
}

const MODAL_InfoPanel = {
  width: '65%',
  padding: '10px 0 0 32px'
}

const Modal = (props) => {
  if(!props.show){
    return null;
  }

  // member clicked
  const {currentMember = [{}]} = props;
  const {Name = ''} = currentMember[0];
  const {Skin_type = ''} = currentMember[0]
  // products used
  const {products = [{}]} = props;


  return (
    <div>
      <div style={MODAL_Overlay}></div>
      <div style={MODAL_STYLES}>
        <div style={MODAL_Header}>
          <span>See It In Real Life</span>

          <div style={{float: "right"}} onClick={props.closeModal}>
            <img height='12px' src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/close.svg"/>
          </div>

        </div>
          <div style={MODAL_Main}>
          <div style={MODAL_ImageBox}>
            <img style={mainImage} src={props.imageUrl}></img>
          </div>
            <div style={MODAL_InfoPanel}>
              <UserPanel currentMember={props.currentMember[0]}/>
              <ProductPanel products={products}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;


