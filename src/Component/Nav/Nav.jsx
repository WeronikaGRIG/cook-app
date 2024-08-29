import { NavLink } from 'react-router-dom';
import navItems from '../../Common/navs.json';
import CustomSelect from '../../UI/Select/CustomSelect';
import ButtonDark from '../../UI/ButtonDark/ButtonDark';
import LoginIcon from '../../UI/LoginIcon/LoginIcon';

import style from './Nav.module.scss';

import line from '../../assets/icons/nav/nav_line.svg';
import lineVertical from '../../assets/icons/nav/nav_line_vertical.svg';
import info from '../../assets/icons/nav/nav_info.svg';

export default function Nav() {

  const handleClick = () => {
    alert('Button clicked!');
  };

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
                      src={item.src}
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
            <ButtonDark
              text='Log In'
              icon={<LoginIcon />}
              onClick={handleClick} />
          </div>
        </div>
      </nav >
      <div className={style.border}></div>
    </>
  );

}
