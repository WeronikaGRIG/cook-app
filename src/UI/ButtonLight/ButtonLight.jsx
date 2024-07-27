import PropTypes from 'prop-types';
import style from './ButtonLight.module.scss';


export default function ButtonLight({ text, icon, onClick, className }) {
    return (
        <button
            className={`${style.light__btn} ${className}`}
            onClick={onClick}>
            {text}
            {icon && <span className={style.light__btn_login}>{icon}</span>}
        </button>
    );
}

ButtonLight.PropTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

ButtonLight.defaultProps = {
    icon: null,
    onClick: () => { },
    className: '',
};
