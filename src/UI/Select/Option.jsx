import style from './Option.module.scss';


export default function Option({ id, label, name, checked, onChange }) {
    return <div>
        <input
            id={id}
            name={name}
            type="radio"
            checked={checked}
            onChange={onChange} />
        <label
            className={style.option}
            htmlFor={id}>
            {label}
        </label>
    </div>;
}
