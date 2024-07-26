
import style from './ButtonDark.module.scss';

export default function ButtonDark() {
    return (
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
    );
}
