"use client"
import React, { useState } from 'react'
import Switcher from './Switcher';
import { useTranslation } from 'react-i18next';

export default function Landing() {
    const { t } = useTranslation();
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [result, setResult] = useState(null);

    const handleGenerate = () => {
        const from = parseInt(min, 10);
        const to = parseInt(max, 10);
        if (isNaN(from) || isNaN(to)) {
            alert("Пожалуйста, введите оба числа.");
            return;
        }
        if (from > to) {
            alert("Число 'От' не может быть больше числа 'До'.");
            return;
        }
        const random = Math.floor(Math.random() * (to - from + 1)) + from;
        setResult(random);
    };

    return (
        <div className='main'>
            <div className='landing'>
                <div className="landing-header">
                    <h1>{t("landing_header.item_1")} <a href="https://akbarsoft.uz" target="_blank">Akbar Soft</a></h1>
                    <p>Дата релиза: 17 апреля 2025 года</p>
                </div>
                <Switcher />
                <div className="landing-body__main">
                    <div className="landing-body">
                        <p>Введите диапазон чисел, чтобы сгенерировать случайное число:</p>
                        <div className='landing-body__container'>
                            <div className="landing-body__container__header">
                                <div>
                                    <label htmlFor="min">От</label>
                                    <input
                                        type="number"
                                        id="min"
                                        value={min}
                                        onChange={(e) => setMin(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="max">До</label>
                                    <input
                                        type="number"
                                        id="max"
                                        value={max}
                                        onChange={(e) => setMax(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button onClick={handleGenerate}>Сгенерировать</button>
                            <div className="result">
                                {result !== null ? (
                                    <p>🎉 Случайное число: <strong>{result}</strong></p>
                                ) : (
                                    <div className="result"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing-footer">
                    <b>ℹ️ ВАЖНО!</b>
                    <p>
                        Генерация случайных чисел происходит абсолютно случайным образом.
                        Никакие попытки повлиять на результат не сработают — всё управляется
                        прозрачным и честным алгоритмом.
                    </p>
                </div>
            </div>
            <div className="footer">
                <p>{t("landing_footer.item_3")} <a href="https://akbarsoft.uz" target="_blank">Akbar Soft</a></p>
            </div>
        </div>
    );
};