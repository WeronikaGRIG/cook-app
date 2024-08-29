

import ExploreCard from './ExploreCard';

import style from './ExploreLearn.module.scss';

import figure from '../../assets/icons/exploreLearn/figure.svg';
import search from '../../assets/icons/exploreLearn/search.svg';



export default function ExploreLearn() {
  return (
    <section>
      <div className={style.container}>
        <div className={style.entry}>
          <div className={style.entry__info}>
            <img src={figure} alt='Figure' className={style.figure} />

            <h2 className={style.title}>Explore & Learn</h2>
            <p className={style.text}>Dive into a range of cooking styles and techniques tailored to your interests</p>
          </div>

          <div className={style.entry__search}>
            <img src={search} alt="Icon Search" className={style.search} />
            <p className={style.entry__search_text}>Search tutors by category </p>
          </div>
        </div>

        <ExploreCard />
      </div>
    </section>
  );
}
