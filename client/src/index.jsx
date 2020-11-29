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
    this.setImages= this.setImages.bind(this);
  }

  setImages(array) {
    this.setState({
      memberImages: array,
      hasData: true
    })
  }


  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * (50 - 1+ 1)) + 1;

    axios.get('/api/etp/images', {
      params: {
        id: randomNumber
      }
    })
    .then((response)=> {
      console.log(response)
      this.setImages(response.data);
    })
    .catch((error)=>{
      console.log(error)
    })

    // axios.get('/api/etp/images')
    // .then((response)=> {
    //   console.log(response)
    //   // this.setImages(response.data);
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })
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



ReactDOM.render(<App />, document.getElementById('etpApp'));