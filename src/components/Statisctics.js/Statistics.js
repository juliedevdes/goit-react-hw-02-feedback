import React from "react";
import Notification from "../Notification/Notification.js";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default class Statistics extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  static propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    if (this.props.total === 0) {
      return <Notification message="No feedback given" />;
    } else {
      return (
        <div>
          <ul className={s.list}>
            <li className={s.item}>Good: {this.props.good}</li>
            <li className={s.item}>Neutral: {this.props.neutral}</li>
            <li className={s.item}>Bad: {this.props.bad}</li>
            <li className={s.item}>Total: {this.props.total}</li>
            <li className={s.item}>
              Positive percentage: {this.props.positivePercentage} %
            </li>
          </ul>
        </div>
      );
    }
  }
}
