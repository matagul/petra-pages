// lang.js
// Dil değiştirici ve çeviri yönetimi

const LANGS = ['ar', 'en'];
const DEFAULT_LANG = 'ar';

const TRANSLATIONS = {
  ar: {
    home: 'الرئيسية',
    review: 'مراجعتنا',
    bonuses: 'البونصات',
    slots: 'أفضل السلوتس',
    faq: 'الأسئلة الشائعة',
    about: 'حول الموقع',
    competitors: 'منافسون',
    cta: 'سجّل الآن في Petra.bet',
    featured_bonus: 'بونص مميز',
    trust: 'موثوقية',
    contact: 'تواصل معنا',
    language: 'اللغة',
    // ... diğer çeviriler ...
  },
  en: {
    home: 'Home',
    review: 'Our Review',
    bonuses: 'Bonuses',
    slots: 'Top Slots',
    faq: 'FAQ',
    about: 'About',
    competitors: 'Competitors',
    cta: 'Join Petra.bet Now',
    featured_bonus: 'Featured Bonus',
    trust: 'Trust',
    contact: 'Contact',
    language: 'Language',
    // ... other translations ...
  }
};

function getLang() {
  return localStorage.getItem('lang') || DEFAULT_LANG;
}

function setLang(lang) {
  if (!LANGS.includes(lang)) return;
  localStorage.setItem('lang', lang);
  document.body.classList.toggle('ltr', lang === 'en');
  document.body.classList.toggle('rtl', lang === 'ar');
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  // Sayfa içi çeviri güncellemesi (varsa)
  if (typeof updateTranslations === 'function') updateTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(getLang());
  // Dil değiştirici butonları
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.addEventListener('click', e => {
      setLang(btn.dataset.lang);
      location.reload();
    });
  });
});
