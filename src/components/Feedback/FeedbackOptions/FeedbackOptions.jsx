import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions ({options, onLeaveFeedback}) {

  const createArray = (data) => {
    const array = [];
    for (const key in data) {
      array.push({ [key]: data[key] });
    }
    return array;
  }
  const array = createArray(options);
  return (
    <div className={s.feedbackDiv}>
         {array.map((el) => {
          const key = Object.keys(el);
          return (
            <button
              type="button"
              name={key}
              onClick={onLeaveFeedback}
              key={key}
              className={s[key]}
            >
              {key}
            </button>
          );
        })}
      </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;
