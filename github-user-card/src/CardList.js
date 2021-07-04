import React,{Component} from 'react';
import './App.scss';
import axios from 'axios';
import Card from './Card.js';

class App extends Component{
  constructor(){
    super();
    this.state={
        followers:[]
    };
}

componentDidMount=()=>{
    // console.log("ListProps",this.props.followers);
    this.setState({
        followers:[]
      });
}

componentDidUpdate=()=>{
    // console.log("ListProps",this.props.followers);
    {this.props.followers.map(item=>{
        axios.get(`https://api.github.com/users/${item.login}`)
        .then((res)=>{
            // console.log("Data",res.data);
            this.setState({
                followers:[...this.state.followers,res.data]
              });
        })
        .catch((err) => {
            console.log(err)
        }); 
    })}
}


render(){
    return (
        <div className="cards">
            {this.props.followers.map(item=>{
                return <Card key={item.id} person={item}/>
            })}
  
        </div>
    );
  }

}

export default App;


