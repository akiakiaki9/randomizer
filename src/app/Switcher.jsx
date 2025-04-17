"use client";
import { usePathname, useRouter } from "next/navigation";
import i18n from "@/i18n";
import { useState, useEffect, useRef } from "react";

export default function Switcher() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/uz") ? "uz" : "ru";
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);

        if (lang === "ru") {
            router.push("/");
        } else {
            router.push(`/${lang}`);
        }

        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const flags = {
        uz: "/images/flags/uz.png",
        ru: "/images/flags/ru.png"
    };

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <div className="selected" onClick={() => setIsOpen(!isOpen)}>
                <img src={flags[currentLang]} alt={currentLang} className="flag" />
            </div>
            {isOpen && (
                <div className="dropdown">
                    {["ru", "uz"].map((lang) => (
                        <div
                            key={lang}
                            className={`dropdown-item ${currentLang === lang ? "active" : ""}`}
                            onClick={() => switchLanguage(lang)}
                        >
                            <img src={flags[lang]} alt={lang} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};