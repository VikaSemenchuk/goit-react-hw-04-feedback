import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Percent: {percent}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

/*
Доброго дня)))) чи не могли б Ви підказати як можна скоротити тут запис
проптайпів?.. це ж фактично обʼєкт чисел:
 (PropTypes.objectOf(PropTypes.number.isRequired)isRequired)
 не розумію як достукатись до самого обʼєкта props...
*/
