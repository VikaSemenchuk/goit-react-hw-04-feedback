import { Component } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = el => {
    this.setState(prevState => ({
      [el]: prevState[el] + 1,
    }));
  };

  countTotalFeedback(array) {
    return array.reduce((acc, stateEl) => acc + stateEl, 0);
  }

  countPositiveFeedbackPercentage(total, good) {
    return Math.round((good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(Object.values(this.state));
    const percent = this.countPositiveFeedbackPercentage(total, good);

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handlerClick={this.handlerClick}
          />
        </Section>

        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </>
    );
  }
}
