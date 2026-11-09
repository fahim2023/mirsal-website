import { en } from './en';
import { ar } from './ar';

export type Lang = 'en' | 'ar';
export type Page = '' | 'services' | 'process' | 'sectors' | 'engagement' | 'about' | 'contact' | 'thanks' | 'privacy';

/** Returns all text for one language. */
export const t = (lang: Lang) => (lang === 'ar' ? ar : en);

/** Builds a link to a page in a given language: link('ar', 'services') -> "/ar/services/" */
export const link = (lang: Lang, page: Page) => {
  const base = lang === 'ar' ? '/ar/' : '/';
  return page ? `${base}${page}/` : base;
};

export const other = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');
export const dir = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** The arrow that points "forward" in each reading direction. */
export const arrow = (lang: Lang) => (lang === 'ar' ? '←' : '→');
