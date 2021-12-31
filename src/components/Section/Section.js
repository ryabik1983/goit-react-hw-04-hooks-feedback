import React from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';
import FeedbackOptions from '../Feedback';
import Notification from '../Notification';

const Section = ({
  title,
  state,
  total,
  positivePercentage,
  handleIncrement,
}) => {
  const { good, neutral, bad } = state;
  const btnNames = Object.keys(state);
  function renderStatistic() {
    return (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    );
  }

  return (
    <div>
      <h2>{title}</h2>
      <FeedbackOptions onLeaveFeedback={handleIncrement} options={btnNames} />
      {total > 0 ? (
        renderStatistic()
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Section;
