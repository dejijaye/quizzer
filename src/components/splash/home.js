import React from 'react';
import PropTypes from "prop-types";
import './home.css'

const Home = (props) => {
  return (
    <div className="wrapper">
      <h1 className="mb-lg">Welcome To The Trivia Challenge</h1>
      <h1 className="mb-lg">You will presented with 10 True or False questions.</h1>
      <h1 className="mb-lg">Can you score 100%</h1>
      <button className="btn" onClick={props.start}>Begin</button>
    </div>
  );
}

Home.propTypes = {
  start: PropTypes.func.isRequired
}

export default Home;