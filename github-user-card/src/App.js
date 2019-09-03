import React,{Component} from 'react';
import './App.scss';
import axios from 'axios';
import Card from './Card.js';

class App extends Component{
  constructor(){
    super();
    this.state="";

    this.newFA=[
      {"login": "stlachman"},
      {"login": "jonathongre"},
      {"login": "DerekEtman"},
      {"login": "DanielWallen87"},
      {"login": "lucasbaze"},
      {"login": "pusheadmetal"},
      {"login": "Chrismis79"},
      {"login": "chrisbonifacio"},
      {"login": "NicholasInterest1"},
      {"login": "MSquared88"},
      {"login": "JaxAtwood"},
      {"login": "nomadkitty"},
      {"login": "allisonkydy"},
      {"login": "adriangarcia5"},
      {  "login": "AceMouty"
      },{"login": "mchrupcala"},
      {  "login": "jaredkain"
      },{"login": "otterspawdesign"},
      {  "login": "EpiceneDev"
      },{"login": "juarezfrench"},
      {"login": "TaranMNeeld"},
      {"login": "shweps13"},
      {"login": "SGonzalez44"}
    ];

    this.newMe={
      login: "H4rliquinn",
      id: 29213563,
      avatar_url: "https://avatars1.githubusercontent.com/u/29213563?v=4",
      name: "Jason Sonnichsen",
      company: "Lambda School",
      location: "Vernon, NJ",
      email: null,
      hireable: true,
      bio: "On a quest of learning new skills to re-enter the technology industry after a long absence.",
      followers: 30,
      following: 43
      };

  }


  // axios.get('https://api.github.com/users/H4rliquinn')
//   .then((res)=>{
//     console.log(res.data);
//     const deck=document.querySelector('.cards');
//     deck.appendChild(cardMaker(res.data));
//   })
//   .catch((err) => {
//     console.log(err)
//   });  

  render(){
    return (
      <div className="container">
        <div id="Username">
          Username:<input type="text" length="30" id="nameText" placeholder="H4rliquinn"/>
          <button id="friendButton">Find Friends</button>
        </div>

        <div id="pages">Pages: 
          <a href="http://cnn.com">1</a>
          <a href="http://cnn.com">2</a>
          <a href="http://cnn.com">3</a>
          <a href="http://cnn.com">4</a>
          <a href="http://cnn.com">5</a>
        </div>
        <div className="cards">
          <Card person={this.newMe}/>
        </div>
      </div>

    );
  }

}

export default App;


