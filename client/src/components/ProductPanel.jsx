import React from 'react';
import styles from '../styles/productpanel.module.css';
import SingleProduct from './SingleProduct.jsx';

class ProductPanel extends React.Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();

    this.state = {
      applied: false
    };
  }

  backClick () {
    if (this.state.applied) {
      this.setState({applied: false});
    }
  }

  forwardClick () {
    if (!this.state.applied) {
      this.setState({applied: true});
    }
  }

  render() {

    const {products = [{}]} = this.props;
    const {Brand = ''} = products[0];
    const {Description = ''} = products[0];
    const {Price = ''} = products[0];
    const {Url = ''} = products[0];

    return (
      <div className={styles.productpanel}>
        <div><span className={styles.productpanel_header}>Shop This Photo</span></div>
        <div className={styles.inner_carousel_box} >
          {products.map((item)=> {
            return <SingleProduct applied={this.state.applied} product = {item} />;
          })}
        </div>
        <div className={styles.inner_carousel_prev} onClick={this.backClick.bind(this)}>
          <img src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/previous.svg" height="45px"></img>
        </div>
        <div className={styles.inner_carousel_next} onClick={this.forwardClick.bind(this)}>
          <img src="https://quesbucket.s3.us-east-2.amazonaws.com/ETPicons/previous.svg" height="45px" style={{transform: 'scaleX(-1)'}} ></img>
        </div>
      </div>

    );
  }
}

export default ProductPanel;

