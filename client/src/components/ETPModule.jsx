import React from 'react';
import axios from 'axios'
import Modal from './Modal.jsx'
import Slide from './Slide.jsx'
import Menu from './Menu.jsx'

class ExploreThisProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      memberId: 0,
      imageUrl: '',
      items: [],
      currentMember: [{}],
      products: [{}]
    }
    this.imageClick = this.imageClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getMember = this.getMember.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  showModal() {
    this.setState({show:true})
  }

  closeModal() {
    this.setState({show:false})
  }

  imageClick(id, url, itemsUsed) {
    this.showModal()
    this.setState({
      memberId: id,
      imageUrl: url,
      items: []
    })
  }

  getMember() {
    axios.get('http://127.0.0.1:2754/api/member', {
      params: {
        memberId: this.state.memberId
      }
    })
    .then((response)=> {
      console.log(response.data)
        this.setState({currentMember: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  getProducts(items) {
    axios.get('http://127.0.0.1:2754/api/products', {
      params: {
        products: items
      }
    })
    .then((response)=> {
      console.log(response.data)
      this.setState({products: response.data})
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  render() {
    return(
    <div className="container">
    < Modal show={this.state.show} closeModal={this.closeModal}  imageUrl={this.state.imageUrl} currentMember={this.state.currentMember} products={this.state.products}/>
      <div className="header">
        Explore This Product
      </div>
    <div classNam="main">
      < Menu />
      <div className="carousel_box">

        <button className="direction">
          <svg viewBox="0 0 16 32"><path d="M2.2 16.052l13.5-14.33c.1-.098.3-.397.3-.695 0-.498-.4-.995-.9-.995-.3 0-.5.2-.6.298L.4 15.256c-.2.298-.4.497-.4.796 0 .298.1.398.2.497l.1.1L14.5 31.67c.1.1.3.3.6.3.5 0 .9-.5.9-.996 0-.3-.2-.498-.3-.697L2.2 16.05z"></path></svg>
        </button>

        <div className="carousel">
          <div className="slide" id="set1">
          {this.props.images.map((item, i)=> {
            if (i > 0 && i <= 5) {
              return <Slide image={item} imageClick={this.imageClick}  memberId={this.state.memberId} imageUrl={this.state.imageUrl} items={this.state.items} getMember={this.getMember} getProducts={this.getProducts}/>
            }})}
          </div>
          <div className="slide" id="set2">
          {this.props.images.map((item, i)=> {
            if (i >= 5 && i <= 10) {
              return <Slide image={item} imageClick={this.imageClick}  memberId={this.state.memberId} imageUrl={this.state.imageUrl} items={this.state.items} getMember={this.getMember} getProducts={this.getProducts}/>
            }})}
          </div>
        </div>

        <button className="direction">
          <svg viewBox="0 0 16 32"><path d="M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z"></path></svg>
        </button>



      </div>

      <div className="carousel_nav">
        <div class="nav_item">
          <a href="#set1" class="nav_button">Go to slide 1</a>
        </div>
        <div class="nav_item">
          <a href="#set2"class="nav_button">Go to slide 2</a>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default ExploreThisProduct;
