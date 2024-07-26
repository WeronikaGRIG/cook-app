import { NavLink } from 'react-router-dom';
import CustomSelect from '../../UI/Select/CustomSelect';

import style from './Nav.module.scss';

import pan from '../../assets/icons/nav/nav_pan.svg';
import chef from '../../assets/icons/nav/nav_chef.svg';
import tomate from '../../assets/icons/nav/nav_tomat.svg'
import line from '../../assets/icons/nav/nav_line.svg';
import lineVertical from '../../assets/icons/nav/nav_line_vertical.svg';
import info from '../../assets/icons/nav/nav_info.svg';

const navItems = [
    { label: 'Cooking Classes', to: '/cooking', icon: pan },
    { label: 'Become a Chef', to: '/chef', icon: chef },
    { label: 'Group Cooking', to: '/group', icon: tomate }
]

export default function Nav() {
    return (
        <>

            < nav >
                <div className={style.container}>
                    <div className={style.nav}>
                        <h3 className={style.nav__logo}>COOK</h3>

                        <img src={line} alt="line" className={style.nav__icon} />

                        <ul className={style.nav__list}>
                            {navItems.map((item, index) => (
                                <li key={index} className={style.nav__list_item}>
                                    <NavLink to={item.to} className={style.link}>
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                            className={style.link__icon}
                                        />
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={style.nav__options}>
                        <CustomSelect />
                        <img src={lineVertical} alt='Line Vertical' />
                        <img src={info} alt='Icon info' className={style.nav__icon_info} />
                        <img src={lineVertical} alt='Line Vertical' />

                        <button className={style.dark__btn}>
                            Log In
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className={style.dark__btn_login}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav >
            <div className={style.border}></div>
        </>
    );

}
