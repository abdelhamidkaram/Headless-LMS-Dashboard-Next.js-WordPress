import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
export  type Locale = 'en' | 'ar';

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);

