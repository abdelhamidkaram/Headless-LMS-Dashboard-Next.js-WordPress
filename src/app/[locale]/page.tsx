import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
 
export default  function  HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title' , {name: 'Rasheed'})}</h1>
      <p>{t('message' , { count: 100 })}</p>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}