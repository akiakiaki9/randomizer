import '../styles/styles.css'
import '../styles/landing.css'
import '../styles/footer.css'
import '../styles/switcher.css'
import Head from 'next/head';

export const metadata = {
  title: "Randomizer - генератор случайных чисел",
  description: "Сгенерируйте случайные числа от и до абсолютно честно!",
  keywords: "randomizer, генератор чисел, случайные числа, генератор случайных чисел, Akbar Soft, онлайн генератор, генератор чисел онлайн, генерация чисел, рандомайзер, случайное число",
  robots: "index, follow",
  canonical: "https://randomizer.uz",
  openGraph: {
    title: "Randomizer - генератор случайных чисел",
    description: "Сгенерируйте случайные числа от и до абсолютно честно!",
    url: "https://randomizer.uz",
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["uz_UZ", "en_US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Randomizer - генератор случайных чисел",
    description: "Сгенерируйте случайные числа от и до абсолютно честно!",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
};