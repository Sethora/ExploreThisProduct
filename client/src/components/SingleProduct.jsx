import React from 'react';
import styles from '../styles/singleproduct.module.css'


const SingleProduct = (props) => {

  const mainStyles = props.applied ? styles.transform : styles.single_product;
  return (
    <div className={mainStyles}>
      <img className={styles.product_image} src={props.product.Url} ></img>
      <br/>
      <span className={styles.product_brand}>{props.product.Brand}</span>
      <span className={styles.product_description}>{props.product.Description}</span>
      <span className={styles.product_price}>${props.product.Price}.00</span>
      <div className={styles.add_button}>ADD</div>
    </div>
  )
}

export default SingleProduct;

// const single_product = {
//   display: 'inline-block',
//   height: '250px',
//   width : '140px',
//   margin: '0 4px',
//   padding: '10px',
//   textAlign: 'center',
//   boxShadow: '0 3px 10px 0 rgba(150,150,150,.45)',
//   borderRadius: '4px',
//   fontFamily: 'helvetica neue,helvetica,arial,sans-serif',
//   transition: 'all .3s ease-in-out'
// }

// const transform = {
//   display: 'inline-block',
//   height: '250px',
//   width : '140px',
//   margin: '0 4px',
//   padding: '10px',
//   textAlign: 'center',
//   boxShadow: '0 3px 10px 0 rgba(150,150,150,.45)',
//   borderRadius: '4px',
//   fontFamily: 'helvetica neue,helvetica,arial,sans-serif',
//   transition: 'all .3s ease-in-out',
//   transform: 'translateX(-250%)',
//   transition: 'transform 0.45s ease 0s'
// }

// const product_image = {
//   width: '112px',
//   height: '112px'
// }

// const product_brand = {
//   display: 'block',
//   maxWidth: '118px',
//   textAlign: 'left',
//   letterSpacing: '-.27px',
//   fontSize: '12px',
//   fontWeight: 600,
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   whiteSpace: 'nowrap'
// }

// const product_description = {
//   display: 'block',
//   maxWidth: '118px',
//   textAlign: 'left',
//   fontSize: '12px',
//   whiteSpace: 'normal',
//   lineHeight: '14px',
//   letterSpacing: '-.29px',
//   marginBottom: '6px',
//   height: '40px',
//   overflow: 'hidden'
// }

// const product_price = {
//   display: 'block',
//   maxWidth: '118px',
//   textAlign: 'left',
//   fontSize: '13px',
//   fontWeight: 600,
//   marginBottom: '6px'
// }

// const add_button = {
//   height: '22px',
//   width: '55px',
//   border: '2px solid rgb(0, 0, 0)',
//   borderRadius: '18px',
//   fontSize: '10px',
//   lineHeight: '24px',
//   fontWeight: 600,
//   textAlign: 'center'
// }
