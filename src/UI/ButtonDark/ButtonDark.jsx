import PropTypes from 'prop-types';
import style from './ButtonDark.module.scss';

export default function ButtonDark({ text, icon, onClick, className }) {
    return (
        <button
            className={`${style.dark__btn} ${className}`}
            onClick={onClick}>
            {text}
            {icon && <span className={style.dark__btn_login}>{icon}</span>}
        </button>
    );
}

ButtonDark.PropTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

ButtonDark.defaultProps = {
    icon: null,
    onClick: () => { },
    className: '',
};


