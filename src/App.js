import React from "react";

import Statistics from "./components/Statisctics.js/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;

  handleGood = () => {
    this.setState((prevState) => ({ good: (prevState.good += 1) }));
  };

  handleNeu = () => {
    this.setState((prevState) => ({ neutral: (prevState.neutral += 1) }));
  };

  handleBad = () => {
    this.setState((prevState) => ({ bad: (prevState.bad += 1) }));
  };

  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={{
              Good: this.handleGood,
              Neutral: this.handleNeu,
              Bad: this.handleBad,
            }}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={
              Math.round(this.countPositiveFeedbackPercentage()) || 0
            }
          />
        </Section>
      </div>
    );
  }
}

export default App;
