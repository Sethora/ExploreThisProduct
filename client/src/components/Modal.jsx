import React from 'react';


const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%',
  backgroundColor: '#a12828',
  padding: '10px',
  zIndex: '1000',
  height: '554px',
  width: '1036px',
  display: 'flex',
  flexFlow: 'column'
}

const MODAL_Header = {
  height: '55px',
  backgroundColor: '#FFF'
}

const MODAL_Main = {
  backgroundColor: '#236437',
  display: 'flex',
  overflowY: 'hidden'
}

const MODAL_Image = {
  height: '458px',
  width: '458px',
  backgroundColor: '#301f5e'
}

const MODAL_InfoPanel = {
  height: '562px',
  width: '473px',
  backgroundColor: '#a59c1c'
}

const MODAL_UserPanel = {
  height: '140px',
  backgroundColor: '#1618bd'
}

const MODAL_ProductPanel = {
  height: '320px',
  backgroundColor: '#a51c9e'
}

const mainImage = {
  position: 'relative',
  minWidth: '458p',
  width: '458px',
  padding: '30px',
  maxWidth: '100%',
  maxHeight: '100%'
}

const Modal = (props) => {
  if(!props.show){
    return null;
  }
  const {currentMember = [{}]} = props;
  const {Name = ''} = currentMember[0];
  console.log('*****NAME  ****',Name)
  return (
    <div>
      <div style={MODAL_STYLES}>
        <div style={MODAL_Header}>
        <button onClick={props.closeModal}>close modal</button>
        </div>
        <div style={MODAL_Main}>
          <div style={MODAL_Image}>
          <img style={mainImage} src={props.imageUrl}></img>
          </div>
          <div style={MODAL_InfoPanel}>
            <div style={MODAL_UserPanel}>
            {Name}
            </div>
            <div style={MODAL_ProductPanel}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;






