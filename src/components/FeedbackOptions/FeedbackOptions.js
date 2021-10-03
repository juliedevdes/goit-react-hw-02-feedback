import React from "react";
import PropTypes from "prop-types";

export default class FeedbackOptions extends React.Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.shape({
      good: PropTypes.func,
      bad: PropTypes.func,
      neutral: PropTypes.func,
    }),
  };

  render() {
    return (
      <ul>
        {this.props.options.map((option) => (
          <li key={option}>
            <button onClick={this.props.onLeaveFeedback[option]}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
