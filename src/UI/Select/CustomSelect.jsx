import { useEffect, useState, useMemo, useRef } from 'react';

import Option from './Option';

import style from './CustomSelect.module.scss';
import expand from '../../assets/icons/nav/expand.svg';


export default function CustomSelect() {

    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [selectedLangLabel, setSelectedLangLabel] = useState('');
    const [selectedCurrentLabel, setSelectedCurrentLabel] = useState('');
    const [languageOpen, setLanguageOpen] = useState(false);
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const languageRef = useRef(null);
    const currencyRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (event) => {
        const selectedLang = languages.find(language => language.id === event.target.id)
        setSelectedLanguage(selectedLang.id);
        setSelectedLangLabel(selectedLang.label);
        setLanguageOpen(false);
    };

    const handleCurrencyChange = (event) => {
        const selectedCurrent = currencies.find(currency => currency.id === event.target.id)
        setSelectedCurrency(selectedCurrent.id);
        setSelectedCurrentLabel(!selectedCurrent.label);
        setCurrencyOpen(false);
    };

    const toggleLanguageOptions = () => {
        setLanguageOpen(!languageOpen);
        setCurrencyOpen(false);
    };

    const toggleCurrencyOptions = () => {
        setCurrencyOpen(!currencyOpen);
        setLanguageOpen(false);
    };

    const handleClickOutside = (event) => {
        if (languageRef.current && !languageRef.current.contains(event.target)) {
            setLanguageOpen(false);
        }

        if (currencyRef.current && !currencyRef.current.contains(event.target)) {
            setCurrencyOpen(false);
        }
    };

    const languages = useMemo(() => [
        { id: 'EN', label: 'English' },
        { id: 'DE', label: 'German' },
        { id: 'CN', label: 'Chinese' },
        { id: 'IT', label: 'Italian' },
        { id: 'IL', label: 'Hebrew' }
    ], []);

    const currencies = useMemo(() => [
        { id: 'USD', label: 'USD' },
        { id: 'EUR', label: 'EUR' },
        { id: 'UAH', label: 'UAH' },
        { id: 'GBR', label: 'GBR' },
        { id: 'CHF', label: 'CHF' }
    ], []);

    return (
        <div className={style.selectContainer}>
            <div className={style.select}
                ref={languageRef}
                onClick={toggleLanguageOptions}>
                <div className={style.selected}>
                    {selectedLangLabel}
                    <img src={expand} alt='Expand' className={style.arrow} />
                </div>

                {languageOpen && (
                    <div className={style.options}>
                        <p className={style.options__text}>Select a language</p>
                        {languages.map((language) => (
                            <Option
                                key={language.id}
                                id={language.id}
                                label={language.label}
                                name='language'
                                checked={selectedLanguage === language.id}
                                onChange={handleLanguageChange}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className={style.select}
                ref={currencyRef}
                onClick={toggleCurrencyOptions}>
                <div className={style.selected}>
                    {selectedCurrentLabel}
                    <img src={expand} alt='Expand' className={style.arrow} />
                </div>

                {currencyOpen && (
                    <div className={style.options}>
                        <p className={style.options__text}>Select a currency</p>
                        {currencies.map((currency) => (
                            <Option
                                key={currency.id}
                                id={currency.id}
                                label={currency.label}
                                name='currency'
                                checked={selectedCurrency === currency.id}
                                onChange={handleCurrencyChange}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
