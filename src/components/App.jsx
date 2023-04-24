import { useState } from 'react';

import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerClick = type => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = array => {
    return array.reduce((acc, stateEl) => acc + stateEl, 0);
  };

  const countPositiveFeedbackPercentage = (sum, number) => {
    return sum ? Math.round((number * 100) / sum) : 0;
  };

  const feedbacks = { good, neutral, bad };
  const keys = Object.keys(feedbacks);
  const values = Object.values(feedbacks);
  const total = countTotalFeedback(values);

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={keys} handlerClick={handlerClick} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(values)}
            percent={countPositiveFeedbackPercentage(total, good)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};