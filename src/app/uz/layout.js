import '../../styles/styles.css'
import '../../styles/landing.css'
import '../../styles/footer.css'

export const metadata = {
  title: "Randomizer - tasodifiy sonlar generatori",
  description: "Istalgan oraliqda tasodifiy son yarating — adolatli va ishonchli!",
  keywords: "randomizer, tasodifiy sonlar, son generatori, Akbar Soft, son yaratish, onlayn generator, raqamlar, tasodifiy raqamlar",
  robots: "index, follow",
  canonical: "https://randomizer.uz/uz",
  openGraph: {
    title: "Randomizer - tasodifiy sonlar generatori",
    description: "Istalgan oraliqda tasodifiy son yarating — adolatli va ishonchli!",
    url: "https://randomizer.uz/uz",
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Randomizer - tasodifiy sonlar generatori",
    description: "Istalgan oraliqda tasodifiy son yarating — adolatli va ishonchli!"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        {children}
      </body>
    </html>
  );
};