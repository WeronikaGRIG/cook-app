import PropTypes from "prop-types";

import style from './ExploreList.module.scss';

import arrow from '../../assets/icons/exploreLearn/arrow_up_right.svg';


export default function ExploreList({ title, description, icon }) {
  return (
    <li className={style.card}>
      <img className={style.card__icon} src={icon} alt="Bakery" />
      <div className={style.card__row}>
        <h2 className={style.card__row_title}>{title}</h2>
        <img className={style.icon} src={arrow} alt="Arrow up right" />
        <p className={style.card__row_text}>{description}</p>
      </div>
    </li>
  );
}

ExploreList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
