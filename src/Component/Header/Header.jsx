import style from './Header.module.scss';

import play from '../../assets/icons/header/play_circle.svg';
import hero from '../../assets/img/hero.png';
import ButtonDark from '../../UI/ButtonDark/ButtonDark';
import ButtonLight from '../../UI/ButtonLight/ButtonLight';
import RatingCard from '../../UI/RatingCard/RatingCard';

export default function Header() {

    const handleClick = () => {
        alert('Button clicked!');
    };


    return (
        <>
            <header>
                <div className={style.container}>
                    <div className={style.content__left}>
                        <h1 className={style.content__left_title}>Master the Art of Cooking with <span className={style.span}>Experts</span> Worldwide
                        </h1>
                        <p className={style.content__left_descr}>
                            Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.
                        </p>
                        <div className={style.content__left_more}>
                            <img src={play} alt="Play Circle" className={style.icon} />
                            <p className={style.text}>Learn more in the COOK video</p>
                        </div>

                        <div className={style.btn__wrapper}>
                            <ButtonDark
                                text='Find Your Tutor'
                                onClick={handleClick} />

                            <ButtonLight
                                text='Join Our Chefs'
                                onClick={handleClick} />
                        </div>
                    </div>

                    <div className={style.content__right}>
                        <img src={hero} alt="Woman made cook" className={style.content__right_picture} />
                    </div>

                </div>

                <RatingCard />
            </header>
        </>
    );
}
