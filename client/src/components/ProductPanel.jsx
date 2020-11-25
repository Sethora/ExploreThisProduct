import React from 'react';

const MODAL_ProductPanel = {
  height: '260px',
  width: '425px',
  display: 'grid',
  gridTemplateRows: '15% 85%'
}

const ProductPanel_Header = {
  backgroundColor: '#12c1ce',
  marginLeft: '9px',
  alignSelf: 'center'
}

const InnerCarousel_Box = {
  display: 'flex',
  height: '100%'
}

const singleProduct = {
  height: '210px',
  width : '110px',
  backgroundColor: '#8e9899',
  margin: '0 4px',
  display:'flex',
  flexDirection: 'column',
  padding: '5px',
  justifyContent: 'center',
  boxShadow: '0 3px 10px 0 rgba(150,150,150,.45)',
  borderRadius: '4px'
}

const productImage = {
  width: '94px',
  height: '112px',
  alignSelf: 'center'
}

const productBrand = {
  fontSize: '11px',
  fontWeight: 600,
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

const productDescription = {
  position: 'relative',
  lineHeight: '14px',
  letterSpacing: '-.29px',
  marginBottom: '6px',
  height: '28px',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

const productPrice = {
  fontSize: '13px',
  fontWeight: 600
}

const addButton = {
  height: '22px',
  width: '55px',
  border: '2px solid rgb(0, 0, 0)',
  borderRadius: '18px',
  fontSize: '10px',
  lineHeight: '24px',
  fontWeight: 600,
  textAlign: 'center'
}

const inner_carousel_next = {
  position: 'fixed',
  right: '1%',
  top: '64%',
  height: '42x',
  width: '42px',
  backgroundColor: 'rgb(0, 0, 0)'
}

const inner_carousel_prev = {
  position: 'fixed',
  right: '47%',
  top: '64%',
  height: '42x',
  width: '42px',
  backgroundColor: 'rgb(25, 128, 25)'
}

const ProductPanel = (props) => {

  const {products = [{}]} = props;
  const {Brand = ''} = products[0];
  const {Description = ''} = products[0];
  const {Price = ''} = products[0];
  const {Url = ''} = products[0];

  return (
    <div style={MODAL_ProductPanel}>
      <div style={ProductPanel_Header}><span>Shop This Photo</span></div>
      <div style={InnerCarousel_Box}>
        <div style={singleProduct}>
          <img src={Url} style ={productImage} ></img>
          <span style={productBrand}>{Brand}</span>
          <span style={productDescription}>{Description}</span>
          <span style={productPrice}>${Price}.00</span>
          <div style={addButton}>ADD</div>
      </div>
        <div style={singleProduct}></div>
        <div style={singleProduct}></div>
        <div style={singleProduct}></div>
        <div style={singleProduct}></div>
        <div style={singleProduct}></div>
      </div>

      <div style={inner_carousel_prev}>prev</div>
      <div style={inner_carousel_next}>next</div>
    </div>
  )
}

export default ProductPanel;