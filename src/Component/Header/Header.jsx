import style from './Header.module.scss';

export default function Header() {
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
                            <img src="" alt="" className={style.iconPlay} />
                            <p className={style.text}>Learn more in the COOK video</p>
                        </div>
                        {/* отдельный компоненты ui */}
                        <div className={style.btnWrapper}>
                            <button>Find Your Tutor</button>
                            <button>Join Our Chefs</button>
                        </div>
                    </div>

                    <div className={style.contentRight}>
                        <img src="" alt="" />
                    </div>

                    {/* кастомный компоненты ui */}

                </div>
            </header>
        </>
    );
}
