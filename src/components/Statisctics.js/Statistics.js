import React from "react";
import Notification from "../Notification/Notification.js";

export default class Statistics extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  // static propTypes = {};

  render() {
    if (this.props.total === 0) {
      return <Notification message="No feedback given" />;
    } else {
      return (
        <div>
          <ul>
            <li>Good: {this.props.good}</li>
            <li>Neutral: {this.props.neutral}</li>
            <li>Bad: {this.props.bad}</li>
            <li>Total: {this.props.total}</li>
            <li>Positive percentage: {this.props.positivePercentage} %</li>
          </ul>
        </div>
      );
    }
  }
}
