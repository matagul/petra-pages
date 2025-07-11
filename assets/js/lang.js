// lang.js
// Arabic and English translations used throughout the site

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
    secure_banking_desc: 'إيداعات وسحوبات سريعة وآمنة عبر NETELLER وVisa والعملات الرقمية.',
    vip_support: 'دعم VIP',
    vip_support_desc: 'دعم عملاء VIP على مدار الساعة ومدير حساب شخصي.',
    licensed_partners: 'شركاء مرخصون',
    licensed_partners_desc: 'مزودون مرخصون دولياً وشركاء موثوقون.',
    offerings: 'ألعابنا',
    roulette_desc: 'طاولة روليت ثلاثية الأبعاد بكرم كبير وموزعين مباشرين.',
    blackjack_desc: 'طاولات VIP، لعب سريع وجوائز ضخمة.',
    slots_desc: 'أشهر ألعاب السلوتس مع دورات مجانية وجوائز كبرى.',
    affiliate: 'برنامج الشراكة',
    affiliate_desc: 'تتبع الأرباح لحظياً مع تقارير دفع فورية.',
    affiliate_btn: 'اذهب إلى لوحة الشركاء',
    about_legal: 'الشرعية والأمان',
    legal_info: 'Petra.bet مرخص دولياً ويستخدم تشفير SSL. جميع المدفوعات آمنة وموثوقة.',
    legal_long: 'Petra.bet مرخص من كوراكاو ويستخدم تشفير SSL مع رقابة دولية. أكثر أماناً من مواقع مثل ArabianBetting وJordan Casino.',
    register_steps: 'خطوات التسجيل',
    step1: 'ادخل إلى موقع Petra.bet وانقر على زر التسجيل',
    step2: 'املأ بياناتك الشخصية واختر كلمة مرور قوية',
    step3: 'أكد بريدك الإلكتروني وابدأ اللعب مباشرة',
    bonus_table_title: 'جدول مقارنة البونصات',
    bonus_table_desc: 'قارن بين أفضل بونصات الكازينو في الأردن',
    slot_showcase_title: 'أفضل ألعاب السلوتس',
    slot_showcase_desc: 'أشهر وأربح ألعاب السلوتس العالمية',
    faq_title: 'الأسئلة الشائعة',
    faq_desc: 'كل ما تحتاج معرفته عن Petra.bet وكازينوهات الأردن',
    faq_intro: 'أكثر الأسئلة شيوعاً حول Petra.bet وعالم الكازينو الأردني.',
    about_title: 'حول Petra.bet Affiliate',
    about_desc: 'تعرف على برنامج Petra.bet Affiliate، طرق التواصل، ودعم اللغات للاعبين في الأردن.',
    about_intro: 'Petra.bet Affiliate منصة مستقلة تساعد اللاعبين الأردنيين على اختيار أفضل مواقع الكازينو والرهان بمراجعات محايدة ونصائح أمان.',
    about_aff1: 'عمولات مرتفعة',
    about_aff2: 'تقارير أداء مفصلة',
    about_aff3: 'دعم تسويقي شخصي',
    about_aff_btn: 'اذهب للوحة التحكم',
    about_langs: 'الموقع يدعم العربية (RTL) والإنجليزية (LTR). يمكنك تغيير اللغة من الأعلى وسيتم حفظ تفضيلك تلقائياً.',
    copyright: '© 2025 Petra.bet Affiliate. جميع الحقوق محفوظة.',
    email: 'للتواصل: affiliate@petra.bet',
    bonuses_desc: 'أحدث نسب البونص ولفات مجانية ومتطلبات الرهان لدى Petra.bet والمنافسين.',
    slots_intro: 'أشهر وأربح ألعاب السلوتس مع صور ثلاثية الأبعاد وحركات جذابة.',
    slot_legacy_desc: 'سلوت بموضوع فرعوني مع جوائز كبرى.',
    petra_summary: 'Petra.bet هو أكثر كازينو فخامة وأماناً في الأردن مع ألعاب ثلاثية الأبعاد وبونصات كبيرة ودعم VIP.',
    how_register_title: 'كيفية التسجيل',
    unique_bonuses_title: 'بونصات مميزة',
    petra_bonus1: 'بونص ترحيبي 150% حتى 100 دينار + 200 لفة مجانية',
    petra_bonus2: 'عروض أسبوعية متجددة',
    petra_bonus3: 'برنامج ولاء VIP',
    slots_games_title: 'السلوتس والألعاب',
    pros_cons_title: 'الإيجابيات والسلبيات',
    petra_pro1: 'بونص مرتفع ولفات مجانية',
    petra_pro2: 'ألعاب ثلاثية الأبعاد وكازينو مباشر',
    petra_pro3: 'دعم VIP ودفع سريع',
    petra_con1: 'منصة جديدة (2024+)',
    petra_con2: 'بعض طرق الدفع محدودة',
    platform_screenshots: 'صور من المنصة',
    payment_methods: 'طرق الدفع',
    bonus_site: 'الموقع',
    bonus_percent: 'نسبة البونص',
    bonus_max: 'الحد الأقصى',
    bonus_freespin: 'لفات مجانية',
    bonus_wagering: 'متطلبات الرهان',
    footer_legal: 'الشرعية والأمان',
    footer_legal_text: 'Petra.bet مرخص من حكومة كوراساو ويستخدم تشفير SSL 256-bit. جميع المعاملات آمنة ومحمية.',
    footer_payment: 'طرق الدفع',
    footer_contact: 'تواصل معنا',
    footer_email: 'البريد الإلكتروني',
    footer_support: 'الدعم',
    footer_support_hours: '24/7 دعم مباشر',
    footer_responsible: 'اللعب المسؤول',
    footer_responsible_text: 'يرجى اللعب بمسؤولية. إذا كنت تعاني من مشكلة في القمار، اطلب المساعدة.',
    footer_copyright: '© 2025 Petra.bet Affiliate. جميع الحقوق محفوظة. هذا الموقع مخصص للاعبين من عمر 18+ فقط.',
    footer_disclaimer: 'تنويه: هذا موقع تابع مستقل وليس مملوكاً أو مُشغلاً من قبل Petra.bet. جميع العلامات التجارية مملوكة لأصحابها.',
    // FAQ Questions and Answers
    faq_q1: 'هل Petra.bet آمن وموثوق؟',
    faq_a1: 'نعم، Petra.bet مرخص من حكومة كوراساو ويستخدم تشفير SSL 256-bit لحماية بياناتك المالية والشخصية.',
    faq_q2: 'كيف يمكنني الحصول على بونص الترحيب؟',
    faq_a2: 'سجّل حساباً جديداً وقم بإيداعك الأول لتحصل تلقائياً على بونص 150% حتى 100 دينار أردني + 200 لفة مجانية.',
    faq_q3: 'ما هي طرق الدفع المتاحة؟',
    faq_a3: 'يمكنك الإيداع والسحب عبر Visa، Mastercard، NETELLER، Skrill، والعملات الرقمية مثل Bitcoin.',
    faq_q4: 'كم يستغرق سحب الأموال؟',
    faq_a4: 'عادة ما تتم معالجة طلبات السحب خلال 24 ساعة للمحافظ الإلكترونية و3-5 أيام عمل للبطاقات المصرفية.',
    faq_q5: 'هل يمكنني اللعب على الهاتف المحمول؟',
    faq_a5: 'نعم، موقع Petra.bet متوافق تماماً مع الهواتف الذكية والأجهزة اللوحية ويعمل على جميع المتصفحات.'
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
    hero_desc: 'Join the elite world with Jordan\'s top online casino. Exclusive bonuses, 3D games, and VIP support.',
    join_now: 'Join Now',
    features: 'Our Features',
    secure_banking: 'Secure Banking',
    secure_banking_desc: 'Fast and secure deposits and withdrawals via NETELLER, Visa and crypto.',
    vip_support: 'VIP Support',
    vip_support_desc: '24/7 VIP customer support with a personal account manager.',
    licensed_partners: 'Licensed Partners',
    licensed_partners_desc: 'Internationally licensed and trusted providers and partners.',
    offerings: 'Our Games',
    roulette_desc: 'Realistic 3D roulette table with live dealers and high payouts.',
    blackjack_desc: 'VIP tables, fast play and big rewards.',
    slots_desc: 'Top slot games with free spins and huge jackpots.',
    affiliate: 'Affiliate Program',
    affiliate_desc: 'Real-time earnings tracking with instant payout reports.',
    affiliate_btn: 'Go to Dashboard',
    about_legal: 'Legality & Security',
    legal_info: 'Petra.bet is internationally licensed and uses SSL encryption. All payments are safe and secure.',
    legal_long: 'Petra.bet operates under a Curacao license with SSL encryption and international audits—safer than sites like ArabianBetting and Jordan Casino.',
    register_steps: 'Registration Steps',
    step1: 'Go to Petra.bet and click the Register button',
    step2: 'Fill in your personal details and choose a strong password',
    step3: 'Verify your email and start playing instantly',
    bonus_table_title: 'Bonus Comparison Table',
    bonus_table_desc: 'Compare the best casino bonuses in Jordan',
    slot_showcase_title: 'Top Slot Games',
    slot_showcase_desc: 'The most popular and profitable global slots',
    faq_title: 'Frequently Asked Questions',
    faq_desc: 'Everything you need to know about Petra.bet and Jordanian casinos',
    faq_intro: 'The most common questions about Petra.bet and Jordan\'s casino scene.',
    about_title: 'About Petra.bet Affiliate',
    about_desc: 'Learn about the Petra.bet Affiliate program, contact methods, and language support for Jordanian players.',
    about_intro: 'Petra.bet Affiliate is an independent platform helping Jordanian players choose the best casino and betting sites with unbiased reviews and security tips.',
    about_aff1: 'High commission rates',
    about_aff2: 'Detailed performance reports',
    about_aff3: 'Personal marketing support',
    about_aff_btn: 'Visit Dashboard',
    about_langs: 'The site supports Arabic (RTL) and English (LTR). Change your preference at the top and it will be saved automatically.',
    copyright: '© 2025 Petra.bet Affiliate. All rights reserved.',
    email: 'Contact: affiliate@petra.bet',
    bonuses_desc: 'Latest bonus percentages, free spins and wagering requirements for Petra.bet and competitors.',
    slots_intro: 'The most popular and rewarding slots with 3D visuals and animations.',
    slot_legacy_desc: 'Egyptian-themed slot with massive jackpots.',
    petra_summary: 'Petra.bet is Jordan\'s most luxurious and secure casino with 3D games, huge bonuses and VIP support.',
    how_register_title: 'How to Register',
    unique_bonuses_title: 'Exclusive Bonuses',
    petra_bonus1: '150% first deposit bonus up to 100 JOD + 200 free spins',
    petra_bonus2: 'Weekly ongoing promotions',
    petra_bonus3: 'VIP loyalty program',
    slots_games_title: 'Slots & Games',
    pros_cons_title: 'Pros & Cons',
    petra_pro1: 'High bonus and free spins',
    petra_pro2: '3D and live games',
    petra_pro3: 'VIP support and fast payouts',
    petra_con1: 'New platform (2024+)',
    petra_con2: 'Some payment methods limited',
    platform_screenshots: 'Platform Screenshots',
    payment_methods: 'Payment Methods',
    bonus_site: 'Site',
    bonus_percent: 'Bonus %',
    bonus_max: 'Maximum',
    bonus_freespin: 'Free Spin',
    bonus_wagering: 'Wagering',
    footer_legal: 'Legality & Security',
    footer_legal_text: 'Petra.bet is licensed by the Government of Curacao and uses 256-bit SSL encryption. All transactions are safe and secure.',
    footer_payment: 'Payment Methods',
    footer_contact: 'Contact Us',
    footer_email: 'Email',
    footer_support: 'Support',
    footer_support_hours: '24/7 Live Support',
    footer_responsible: 'Responsible Gaming',
    footer_responsible_text: 'Please gamble responsibly. If you have a gambling problem, seek help.',
    footer_copyright: '© 2025 Petra.bet Affiliate. All rights reserved. This site is for players 18+ only.',
    footer_disclaimer: 'Disclaimer: This is an independent affiliate site and is not owned or operated by Petra.bet. All trademarks belong to their respective owners.',
    // FAQ Questions and Answers
    faq_q1: 'Is Petra.bet safe and trustworthy?',
    faq_a1: 'Yes, Petra.bet is licensed by the Government of Curacao and uses 256-bit SSL encryption to protect your financial and personal data.',
    faq_q2: 'How can I get the welcome bonus?',
    faq_a2: 'Register a new account and make your first deposit to automatically receive a 150% bonus up to 100 JOD + 200 free spins.',
    faq_q3: 'What payment methods are available?',
    faq_a3: 'You can deposit and withdraw via Visa, Mastercard, NETELLER, Skrill, and cryptocurrencies like Bitcoin.',
    faq_q4: 'How long do withdrawals take?',
    faq_a4: 'Withdrawal requests are usually processed within 24 hours for e-wallets and 3-5 business days for bank cards.',
    faq_q5: 'Can I play on mobile?',
    faq_a5: 'Yes, Petra.bet is fully compatible with smartphones and tablets and works on all browsers.'
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
  // Always set language from localStorage or fallback
  const lang = getLang();
  setLang(lang);
  
  // Update language buttons
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      document.querySelectorAll('[data-lang]').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === btn.dataset.lang);
      });
    });
  });
  
  if (typeof updateTranslations === 'function') updateTranslations();
});

function t(key) {
  const lang = getLang();
  return TRANSLATIONS[lang][key] || TRANSLATIONS['ar'][key] || key;
}

// Populate all elements with data-i18n attribute
function updateTranslations() {
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });
  // Update language buttons
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Make updateTranslations globally available
window.updateTranslations = updateTranslations;
window.t = t;
window.getLang = getLang;
window.setLang = setLang;