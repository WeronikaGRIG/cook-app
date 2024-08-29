import learns from '../../Common/exploreLearn.json';
import style from './ExploreCard.module.scss';

import ExploreList from './ExploreList';

export default function ExploreCard() {
	return (

		<ul className={style.cards}>
			{learns.map((learn, i) => {
				return (
					<ExploreList key={i} {...learn} />
				)
			})
			}
		</ul>
	);
}
