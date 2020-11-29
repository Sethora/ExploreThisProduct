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

