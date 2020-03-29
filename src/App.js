import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state ={
    isLoding: true,
    movies: []
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoding: false});
    }, 6000);
  }
  render(){
    const {isLoding} = this.state;
    return (
      <div>
       {isLoding ? "Loading": "We are Ready"}
      </div>
    );
  }
}

export default App;