import React from 'react';
import styles from '../styles/productpanel.module.css'
import SingleProduct from './SingleProduct.jsx';

class ProductPanel extends React.Component {
  constructor(props) {
    super(props)
    this.myInput = React.createRef()

    this.state = {
      applied: false
    }
  }

  backClick () {
    if (this.state.applied) {
      this.setState({applied: false})
    }
  }

  forwardClick () {
    if (!this.state.applied) {
      this.setState({applied: true})
    }
  }

  render() {

    const {products = [{}]} = this.props;
    const {Brand = ''} = products[0];
    const {Description = ''} = products[0];
    const {Price = ''} = products[0];
    const {Url = ''} = products[0];

    return(
      <div className={styles.productpanel}>
        <div><span className={styles.productpanel_header}>Shop This Photo</span></div>
        <div className={styles.inner_carousel_box} >
          {/* {products.map((item)=> {
            return <SingleProduct applied={this.state.applied} product = {item} />
          })} */}
          <SingleProduct applied={this.state.applied} product={products[0]}/>
          <SingleProduct applied={this.state.applied} product={products[0]}/>
          <SingleProduct applied={this.state.applied} product={products[0]}/>
          <SingleProduct applied={this.state.applied} product={products[0]}/>
          <SingleProduct applied={this.state.applied} product={products[0]}/>
          <SingleProduct applied={this.state.applied} product={products[0]}/>
          <SingleProduct applied={this.state.applied} product={products[0]}/>
        </div>
        <div className={styles.inner_carousel_prev} onClick={this.backClick.bind(this)}>prev</div>
        <div className={styles.inner_carousel_next} onClick={this.forwardClick.bind(this)}>next</div>
      </div>

    )
  }
}

export default ProductPanel;


// const MODAL_ProductPanel = {
//   height: '320px',
//   // width: '425px',
//   display: 'grid',
//   gridTemplateRows: '15% 85%'
// }

// const ProductPanel_Header = {
//   fontFamily: 'helvetica neue,helvetica,arial,sans-serif',
//   fontSize: '16px',
//   fontWeight: '700',
//   margin: '8px 0',
//   display: 'block'
// }


// const InnerCarousel_Box = {
//   display: 'flex',
//   height: '300px',
//   overflow: 'hidden',
//   overflowX: 'scroll'
// }

// const inner_carousel_next = {
//   position: 'fixed',
//   right: '1%',
//   top: '54%',
//   height: '42px',
//   width: '42px',
//   backgroundColor: 'rgb(0, 0, 0)'
// }

// const inner_carousel_prev = {
//   position: 'fixed',
//   right: '47%',
//   top: '54%',
//   height: '42px',
//   width: '42px',
//   backgroundColor: 'rgb(0, 0, 0)'
// }