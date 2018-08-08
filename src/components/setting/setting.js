import React from 'react';
import PropTypes from "prop-types";

const Setting = (props) => {
  return (
    <div className="wrapper">
      <h1 className="mb-lg">Setting</h1>
      <h4>Change the difficulty</h4>
      <div className="select">
        <select onChange={props.handleSetting}>
          <option value="">How tough are you?</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  );
}

Setting.propTypes = {
  handleSetting: PropTypes.func.isRequired
}

export default Setting;