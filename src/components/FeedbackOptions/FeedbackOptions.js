import React from "react";

export default class FeedbackOptions extends React.Component {
  static defaultProps = {
    options: [],
  };

  // static propTypes = {};

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
