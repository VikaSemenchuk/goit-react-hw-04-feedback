import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handlerClick }) => {
  return (
    <div className="d-md-flex justify-content-md-start">
      {options.map(option => (
        <button
          key={option}
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={() => handlerClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handlerClick: PropTypes.func.isRequired,
};
