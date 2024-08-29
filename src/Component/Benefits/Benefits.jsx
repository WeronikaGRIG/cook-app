import benefits from '../../Common/benefits.json';
import style from './Benefits.module.scss';
import BenefitsList from './BenefitsList';

export default function Benefits() {
  return (
    <section>
      <div className={style.wrapper}>
        <h2 className={style.title}>Our Unique Benefits</h2>
        <p className={style.text}>Experience the perks of learning and teaching cooking on our platform</p>

        <ul className={style.cards}>
          {benefits.map((benefit, i) => {
            return (
              <BenefitsList key={i} {...benefit} />
            )
          })}
        </ul>
      </div>
    </section>
  );
}
