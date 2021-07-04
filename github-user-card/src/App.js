import React,{Component} from 'react';
import './App.scss';
import axios from 'axios';
import CardList from './CardList.js';

class App extends Component{
  constructor(){
    super();
    this.state={
      data:[]
    }; 
  }

  componentDidMount=()=>{
    axios.get(`https://api.github.com/users/H4rliquinn/followers`)
    .then((res)=>{
      // console.log("Data",res.data);
      this.setState({
        data:[...res.data]
      });
    })
    .catch((err) => {
      console.log(err)
    }); 
    // console.log("State",this.state);
  }

  componentDidUpdate=()=>{
    // console.log("State",this.state);
  }

  render(){
    return (
      <div className="container">
        {/* <div id="Username">
          Username:<input type="text" length="30" id="nameText" placeholder="H4rliquinn"/>
          <button id="friendButton">Find Friends</button>
        </div>

        <div id="pages">Pages: 
          <a href="http://cnn.com">1</a>
          <a href="http://cnn.com">2</a>
          <a href="http://cnn.com">3</a>
          <a href="http://cnn.com">4</a>
          <a href="http://cnn.com">5</a>
        </div> */}
        <div className="cards">
          <CardList followers={this.state.data}/>
        </div>
      </div>

    );
  }

}

export default App;


