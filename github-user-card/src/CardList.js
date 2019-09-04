import React,{Component} from 'react';
import './App.scss';
import axios from 'axios';
import Card from './Card.js';

class App extends Component{
  constructor(){
    super();
    this.state=[];
}

componentDidMount(){
    // console.log("ListProps",this.props.followers);
}

componentDidUpdate(){
    console.log("ListProps",this.props.followers);
  }


render(){
    return (
        <div className="cards">
            {this.props.followers.map(item=>{
                return  <Card person={item}/>
            })}
  
        </div>
    );
  }

}

export default App;


