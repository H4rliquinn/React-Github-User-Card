import React,{Component} from 'react';
import './Card.scss';

class Card extends Component {
    
    componentDidMount(){
        // console.log("Card Props",this.props.person);
    }

    render() { 
        return ( 
            <div className="card">Returned Card
                <img src={this.props.person.avatar_url} />
                <div className="card-info">
                    <h3 className="name">{this.props.person.name}</h3>
                    <p className="username">{this.props.person.login}</p>
                    <p>Location: {this.props.person.location}</p>
                    <p>Profile:  
                    <a href={this.props.person.html_url}>{this.props.person.html_url}</a>
                    </p>
                    <p>Followers: {this.props.person.followers}</p>
                    <p>Following: {this.props.person.following}</p>
                    <p>Bio: {this.props.person.bio}</p>
                </div>
            </div>
         );
    }
}
 
export default Card;

