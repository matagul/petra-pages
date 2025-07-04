// lang.js
// Çoklu dil desteği: Arapça ve İngilizce tam çeviri

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
    hero_title: 'Petra Bet: حيث يلتقي الفخامة باللعب',
    hero_desc: 'انضم إلى عالم النخبة مع أفضل كازينو اونلاين في الأردن. بونصات حصرية، ألعاب ثلاثية الأبعاد، ودعم VIP.',
    join_now: 'سجّل الآن',
    features: 'مميزاتنا',
    secure_banking: 'مدفوعات آمنة',
    vip_support: 'دعم VIP',
    licensed_partners: 'شركاء مرخصون',
    offerings: 'ألعابنا',
    affiliate: 'برنامج الشراكة',
    about_legal: 'الشرعية والأمان',
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
    hero_title: 'Petra Bet: Where Prestige Meets Play',
    hero_desc: 'Join the elite world with Jordan’s top online casino. Exclusive bonuses, 3D games, and VIP support.',
    join_now: 'Join Now',
    features: 'Our Features',
    secure_banking: 'Secure Banking',
    vip_support: 'VIP Support',
    licensed_partners: 'Licensed Partners',
    offerings: 'Our Games',
    affiliate: 'Affiliate Program',
    about_legal: 'Legality & Security',
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
  if (typeof updateTranslations === 'function') updateTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(getLang());
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === getLang());
    btn.addEventListener('click', e => {
      setLang(btn.dataset.lang);
      location.reload();
    });
  });
});

function t(key) {
  const lang = getLang();
  return TRANSLATIONS[lang][key] || key;
}
