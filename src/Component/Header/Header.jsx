import style from './Header.module.scss';

import play from '../../assets/icons/header/play_circle.svg';
import hero from '../../assets/img/hero.png';
import ButtonDark from '../../UI/ButtonDark/ButtonDark';
import ButtonLight from '../../UI/ButtonLight/ButtonLight';

export default function Header() {

    const handleClick = () => {
        alert('Button clicked!');
    };


    return (
        <>
            <header>
                <div className={style.container}>
                    <div className={style.contentLeft}>
                        <h1 className={style.title}>Master the Art of Cooking with <span>Experts</span>
                            Worldwide
                        </h1>
                        <p className={style.descr}>
                            Experience the joy of cooking in a whole new way with our engaging online cooking classes. Learn from the chefs, share your unique culinary knowledge, and join our growing foodie community. With COOK, learning, and teaching becomes a shared passion.
                        </p>
                        <div className={style.descrMore}>
                            <img src={play} alt="Play Circle" className={style.iconPlay} />
                            <p className={style.text}>Learn more in the COOK video</p>
                        </div>

                        <div className={style.btnWrapper}>
                            <ButtonDark
                                text='Find Your Tutor'
                                onClick={handleClick} />

                            <ButtonLight
                                text='Join Our Chefs'
                                onClick={handleClick} />
                        </div>
                    </div>

                    <div className={style.contentRight}>
                        <img src={hero} alt="Woman made cook" />
                    </div>

                    {/* кастомный компоненты ui */}

                </div>
            </header>
        </>
    );
}
