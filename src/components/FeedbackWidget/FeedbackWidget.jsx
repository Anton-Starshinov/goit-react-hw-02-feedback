import React from 'react';

class FeedbackWidget extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  FeedbackOptions = options => {};

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul></ul>
        <div>
          <h1>Statistics</h1>
          <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;
