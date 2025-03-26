
import {setRequestLocale} from 'next-intl/server';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
 
export default async function LocaleLayout({children, params}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
 

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
    <body>
      <NextIntlClientProvider locale={locale}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </body>
  </html>
  );
}