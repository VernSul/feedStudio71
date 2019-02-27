import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import BigPost from './BigPost';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {feed: [], hidden : false, likes: []}

    this.toggleMessage = this.toggleMessage.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  async componentWillMount(){
     let response = await axios("https://cors-anywhere.herokuapp.com/http://assets.studio71.io/test/news_feed.json");
     this.setState({ feed: response.data.items })
     this.setState( { likes: this.state.feed.map(() => { return 0;}) })
     console.log(response);
  }
  toggleMessage(i) {
    let hidden = this.state.hidden;
    hidden = hidden ? false : i;
    this.setState({ hidden });
  }

  addLike(i){
    let likesCopy = [...this.state.likes];
    likesCopy[i] += 1;
    this.setState({ likes: likesCopy })
  }

  render() {

    let iBP = this.state.hidden-1

    let posts = this.state.feed.map((x, i) => {
      return <Post key={i} data={x} index={i} likes={this.state.likes[i]} addLike={this.addLike} toggle={this.toggleMessage}/>
    })

    let bigPost = <BigPost data={this.state.feed[iBP]} toggle={this.toggleMessage} index={iBP} likes={this.state.likes[iBP]} addLike={this.addLike}/>;
    return (
      <div className="App">
        <Header/>
        <div className="PostsWall">
          {this.state.hidden ? bigPost : posts}
        </div>
      </div>
    );
  }
}

export default App;
