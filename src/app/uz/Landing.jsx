"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Switcher from '../Switcher';

export default function Landing() {
    const { t } = useTranslation();
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [result, setResult] = useState(null);

    const handleGenerate = () => {
        const from = parseInt(min, 10);
        const to = parseInt(max, 10);
        if (isNaN(from) || isNaN(to)) {
            alert(t("landing_body.item_6"));
            return;
        }
        if (from > to) {
            alert(t("landing_body.item_7"));
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
                    <p>{t("landing_header.item_2")}</p>
                </div>
                <Switcher />
                <div className="landing-body__main">
                    <div className="landing-body">
                        <p>{t("landing_body.item_1")}</p>
                        <div className='landing-body__container'>
                            <div className="landing-body__container__header">
                                <div>
                                    <label htmlFor="min">{t("landing_body.item_2")}</label>
                                    <input
                                        type="number"
                                        id="min"
                                        value={min}
                                        onChange={(e) => setMin(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="max">{t("landing_body.item_3")}</label>
                                    <input
                                        type="number"
                                        id="max"
                                        value={max}
                                        onChange={(e) => setMax(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button onClick={handleGenerate}>{t("landing_body.item_4")}</button>
                            <div className="result">
                                {result !== null ? (
                                    <p>{t("landing_body.item_5")} <strong>{result}</strong></p>
                                ) : (
                                    <div className="result"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing-footer">
                    <b>{t("landing_footer.item_1")}</b>
                    <p>{t("landing_footer.item_2")}</p>
                </div>
            </div>
            <div className="footer">
                <p>{t("landing_footer.item_3")} <a href="https://akbarsoft.uz" target="_blank">Akbar Soft</a></p>
            </div>
        </div>
    );
};