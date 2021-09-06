
import { useState } from "react";
import s from "./Feedback.module.css";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (
    callback,
    { good, neutral, bad }
  ) => {
    return Math.round((good / callback({ good, neutral, bad })) * 100);
  };

  const onLeaveFeedback = (e) => {
    const target = e.target.name;
    switch (target) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const state = {good, neutral, bad};

  return (
    <div className={s.div}>
      <Section title="Please leave feedback!">
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback(state) === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(state)}
            positivePercentage={countPositiveFeedbackPercentage(
              countTotalFeedback,
              state
            )}
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
