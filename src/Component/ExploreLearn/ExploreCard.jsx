import learns from '../../Common/exploreLearn.json';
import ExploreList from './ExploreList';
import style from './ExploreCard.module.scss';

import arrowCircleDown from '../../assets/icons/exploreLearn/arrowCircleDown.svg';

export default function ExploreCard() {
	return (
		<>
			<ul className={style.cards}>
				{learns.map((learn, i) => {
					return (
						<ExploreList key={i} {...learn} />
					)
				})
				}
			</ul>

			<div className={style.more}>
				<p className={style.more__text}>Show more</p>
				<img className={style.more__icon} src={arrowCircleDown} alt="Arrow down with circle " />
			</div>
		</>
	);
}
