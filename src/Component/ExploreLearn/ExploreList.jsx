import PropTypes from "prop-types";
import { useState } from "react";

import style from './ExploreList.module.scss';

import arrowUp from '../../assets/icons/exploreLearn/arrowUp.svg';
import arrowUpWhite from '../../assets/icons/exploreLearn/arrowUpWhite.svg';

export default function ExploreList({ title, description, icon }) {

  const [arrowIcon, setArrowIcon] = useState(arrowUp);

  const handleHover = () => {
    setArrowIcon(arrowUpWhite);
  };

  const handleLeave = () => {
    setArrowIcon(arrowUp);
  };

  return (
    <li className={style.card}
      onMouseMove={handleHover}
      onMouseLeave={handleLeave}>
      <img className={style.card__icon} src={icon} alt={title} />
      <div className={style.card__row}>
        <h2 className={style.card__row_title}>{title}</h2>
        <img className={style.icon} src={arrowIcon} alt="Arrow up right" />
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
