import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ExploreThisProduct from './components/ETPModule.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberImages: [],
      hasData: false
    };
    this.setImages = this.setImages.bind(this);
  }

  setImages(array) {
    this.setState({
      memberImages: array,
      hasData: true
    });
  }

  componentDidMount() {
    const url = window.location.href.split('/');
    const candidateId = url[url.length - 1];
    const id = (isNaN(Number(candidateId)) || candidateId === '') ? 2 : Number(candidateId);
    axios.get(`/api/products/images/${id}`)
      .then((response)=> {
        this.setImages(response.data);
      })
      .catch((error)=>{
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        {this.state.hasData ?
          <ExploreThisProduct images={this.state.memberImages}/> : null
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('etpApp'));