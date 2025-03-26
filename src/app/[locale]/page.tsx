import { Link } from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
 
export default  function  HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4 text-red-600'>{t('title' , {name: 'Rasheed'})}</h1>
      <p>{t('message' , { count: 100 })}</p>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}