import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ru: {
        translation: {
            landing_header: {
                item_1: "🎲 Randomizer от",
                item_2: "Дата релиза: 17 апреля 2025 года"
            },
            landing_body: {
                item_1: "Введите диапазон чисел, чтобы сгенерировать случайное число:",
                item_2: "От",
                item_3: "До",
                item_4: "Сгенерировать",
                item_5: "🎉 Случайное число:",
                item_6: "Пожалуйста, введите оба числа.",
                item_7: "Число 'От' не может быть больше числа 'До'."
            },
            landing_footer: {
                item_1: "ℹ️ ВАЖНО!",
                item_2: "Генерация случайных чисел происходит абсолютно случайным образом. Никакие попытки повлиять на результат не сработают — всё управляется прозрачным и честным алгоритмом.",
                item_3: "© 2025 Разработано в"
            }
        }
    },
    uz: {
        translation: {
            landing_header: {
                item_1: "🎲 Randomizer —",
                item_2: "Reliz sanasi: 2025-yil 17-aprel"
            },
            landing_body: {
                item_1: "Tasodifiy son hosil qilish uchun sonlar oralig'ini kiriting:",
                item_2: "Dan",
                item_3: "Gacha",
                item_4: "Generatsiya qilish",
                item_5: "🎉 Tasodifiy son:",
                item_6: "Iltimos, ikkala sonni ham kiriting.",
                item_7: "'Dan' qiymati 'Gacha' qiymatidan katta bo‘lishi mumkin emas."
            },
            landing_footer: {
                item_1: "ℹ️ MUHIM!",
                item_2: "Tasodifiy sonlar butunlay tasodifiy tarzda yaratiladi. Natijaga ta'sir qilishning iloji yo‘q — hammasi shaffof va adolatli algoritm asosida ishlaydi.",
                item_3: "© 2025 Dasturlangan"
            }
        }
    }
};

const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") : null;

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "ru",
    lng: savedLanguage || "ru",
    interpolation: { escapeValue: false }
});

export default i18n;