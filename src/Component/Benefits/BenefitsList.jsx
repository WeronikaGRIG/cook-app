import PropTypes from "prop-types";

import style from './BenefitsList.module.scss';

export default function BenefitsList({ icon, title, description }) {
  return (
    <li className={style.card}>
      <img className={style.card__icon} src={icon} alt={title} />
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__descr}>{description}</p>
    </li>
  );
}

BenefitsList.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

