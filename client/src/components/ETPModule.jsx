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
      currentMember: [{}]
    }
    this.imageClick = this.imageClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getMember = this.getMember.bind(this);
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


  render() {
    return(
    <div className="container">
    < Modal show={this.state.show} closeModal={this.closeModal}  imageUrl={this.state.imageUrl} currentMember={this.state.currentMember}/>
      <div className="header">
        Explore This Product
      </div>
    <div classNam="main">
      < Menu />
      <div className="carousel_box">
        <button className="direction">L</button>

        <div className="carousel">
          <div className="slide" id="set1">
          {this.props.images.map((item, i)=> {
            if (i > 0 && i <= 5) {
              return <Slide image={item} imageClick={this.imageClick}  memberId={this.state.memberId} imageUrl={this.state.imageUrl} items={this.state.items} getMember={this.getMember}/>
            }})}
          </div>
          <div className="slide" id="set2">
          {this.props.images.map((item, i)=> {
            if (i >= 5 && i <= 10) {
              return <Slide image={item} imageClick={this.imageClick}  memberId={this.state.memberId} imageUrl={this.state.imageUrl} items={this.state.items} getMember={this.getMember}/>
            }})}
          </div>
        </div>

        <button className="direction">R</button>



      </div>

      <div className="carousel_nav">
        <ol class="nav_list">
          <li class="nav_item">
            <a href="#set1"
              class="nav_button">Go to slide 1</a>
          </li>
          <li class="nav_item">
            <a href="#set2"
              class="nav_button">Go to slide 2</a>
          </li>
        </ol>
      </div>
      </div>
    </div>
    )
  }
}

export default ExploreThisProduct;
