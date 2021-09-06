import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return good + neutral + bad === 0 ? (
    <p className={s.text}>There are no feedbacks yet! Yours could be first!</p>
  ) : (
    <>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral}</p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.text}>Total: {total}</p>
      <p className={s.text}>
        Positive feedback:
        {positivePercentage}%
      </p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
