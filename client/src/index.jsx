import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ExploreThisProduct from './components/ETPmodule.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      memberImages: [],
      hasData: false
    }
    this.componentDidMount =  this.componentDidMount.bind(this);
    this.setImages= this.setImages.bind(this);
  }

  setImages(array) {
    this.setState({
      memberImages: array,
      hasData: true
    })
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:2754/api/images')
    .then((response)=> {
      console.log(response)
      this.setImages(response.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  getMember () {


  }

  render() {
    return (
      <div>
        {this.state.hasData ?
          <ExploreThisProduct images={this.state.memberImages}/> : null
        }
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));