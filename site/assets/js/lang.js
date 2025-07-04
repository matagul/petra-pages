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
    payment_methods: 'طرق الدفع',
    legal_info: 'Petra.bet مرخص دولياً ويستخدم تشفير SSL. جميع المدفوعات آمنة وموثوقة.',
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
    about_title: 'حول Petra.bet Affiliate',
    about_desc: 'تعرف على برنامج Petra.bet Affiliate، طرق التواصل، ودعم اللغات للاعبين في الأردن.',
    copyright: '© 2025 Petra.bet Affiliate. جميع الحقوق محفوظة.',
    email: 'للتواصل: affiliate@petra.bet',
    // Rakipler
    '1xbet_review_title': 'مراجعة 1xBet',
    '1xbet_review_desc': 'منصة ضخمة للرهانات والسلوتس مع بونص ترحيبي حتى $130 و150 لفة مجانية.',
    '1xbet_bonus': 'بونص ترحيبي: 100% حتى $130 + 150 لفة مجانية',
    '1xbet_weekly': 'عروض أسبوعية للاعبين النشطين',
    '1xbet_games': 'سلوتس، كازينو مباشر، رهانات رياضية، بوكر',
    '1xbet_providers': 'مزودون عالميون: NetEnt, Pragmatic Play, Play’n GO',
    '1xbet_license': 'مرخص من حكومة كوراساو. يقبل لاعبين من الأردن.',
    '20bet_review_title': 'مراجعة 20Bet',
    '20bet_review_desc': 'كازينو عالمي مع بونص ترحيبي حتى €120 و120 لفة مجانية.',
    '20bet_bonus': 'بونص ترحيبي: 100% حتى €120 + 120 لفة مجانية',
    '20bet_weekly': 'عروض أسبوعية للاعبين النشطين',
    '20bet_games': 'سلوتس، كازينو مباشر، رهانات رياضية',
    '20bet_providers': 'مزودون عالميون: NetEnt, Pragmatic Play, Play’n GO',
    '20bet_license': 'مرخص من حكومة كوراساو. يقبل لاعبين من الأردن.',
    'bet365_review_title': 'مراجعة bet365',
    'bet365_review_desc': 'أشهر علامة في العالم للرهانات والكازينو مع بونص ترحيبي حتى $100.',
    'bet365_bonus': 'بونص ترحيبي: 100% حتى $100',
    'bet365_games': 'سلوتس، كازينو مباشر، رهانات رياضية',
    'bet365_providers': 'مزودون عالميون: NetEnt, Playtech, Microgaming',
    'bet365_license': 'مرخص من Gibraltar وUKGC. يقبل لاعبين من الأردن.',
    'melbet_review_title': 'مراجعة Melbet',
    'melbet_review_desc': 'بونص ترحيبي حتى $100 و100 لفة مجانية، مع خيارات دفع متنوعة.',
    'melbet_bonus': 'بونص ترحيبي: 100% حتى $100 + 100 لفة مجانية',
    'melbet_games': 'سلوتس، كازينو مباشر، رهانات رياضية',
    'melbet_providers': 'مزودون عالميون: NetEnt, Pragmatic Play, Play’n GO',
    'melbet_license': 'مرخص من حكومة كوراساو. يقبل لاعبين من الأردن.',
    'sbobet_review_title': 'مراجعة SBOBET',
    'sbobet_review_desc': 'رهانات رياضية وسلوتس مع بونص ترحيبي حتى $200 و50 لفة مجانية.',
    'sbobet_bonus': 'بونص ترحيبي: 100% حتى $200 + 50 لفة مجانية',
    'sbobet_games': 'رهانات رياضية، كازينو مباشر، سلوتس',
    'sbobet_providers': 'مزودون عالميون: Playtech, Microgaming',
    'sbobet_license': 'مرخص من Isle of Man. يقبل لاعبين من الأردن.',
    // Slotlar
    'slot_bookofdead': 'Book of Dead',
    'slot_bookofdead_desc': 'كلاسيك مغامرة من Play’n GO مع RTP مرتفع ولفات مجانية.',
    'slot_starbust': 'Starburst',
    'slot_starbust_desc': 'سلوت ملون وسريع من NetEnt، مثالي للمبتدئين.',
    'slot_gates': 'Gates of Olympus',
    'slot_gates_desc': 'تجربة سلوت متحركة مع مضاعفات من Pragmatic Play.',
    'slot_sweet': 'Sweet Bonanza',
    'slot_sweet_desc': 'سلوت فواكه مع لفات مجانية ومضاعفات كبيرة.',
    // SSS
    'faq_q1': 'كيف أسجل في Petra.bet؟',
    'faq_a1': 'اضغط على زر التسجيل، املأ بياناتك وفعّل حسابك عبر البريد أو الهاتف.',
    'faq_q2': 'هل الكازينو قانوني في الأردن؟',
    'faq_a2': 'المواقع الدولية المرخصة تقبل لاعبين من الأردن، لكن التزم بالقوانين المحلية.',
    'faq_q3': 'ما طرق الدفع المتوفرة؟',
    'faq_a3': 'بطاقات بنكية، محافظ إلكترونية وعملات رقمية (Bitcoin, USDT).',
    'faq_q4': 'هل بياناتي آمنة؟',
    'faq_a4': 'جميع المواقع تستخدم تشفير SSL وإجراءات أمان متقدمة.',
    'faq_q5': 'هل يوجد دعم عربي؟',
    'faq_a5': 'نعم، Petra.bet وفريق الدعم يوفرون خدمة كاملة بالعربية.',
    // Bonus tablo başlıkları
    'bonus_site': 'الموقع',
    'bonus_percent': 'نسبة البونص',
    'bonus_max': 'الحد الأقصى',
    'bonus_freespin': 'لفات مجانية',
    'bonus_wagering': 'متطلبات الرهان',
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
    payment_methods: 'Payment Methods',
    legal_info: 'Petra.bet is internationally licensed and uses SSL encryption. All payments are safe and secure.',
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
    about_title: 'About Petra.bet Affiliate',
    about_desc: 'Learn about the Petra.bet Affiliate program, contact methods, and language support for Jordanian players.',
    copyright: '© 2025 Petra.bet Affiliate. All rights reserved.',
    email: 'Contact: affiliate@petra.bet',
    // Competitors
    '1xbet_review_title': '1xBet Review',
    '1xbet_review_desc': 'A massive platform for betting and slots with a welcome bonus up to $130 and 150 free spins.',
    '1xbet_bonus': 'Welcome Bonus: 100% up to $130 + 150 free spins',
    '1xbet_weekly': 'Weekly offers for active players',
    '1xbet_games': 'Slots, Live Casino, Sports Betting, Poker',
    '1xbet_providers': 'Global providers: NetEnt, Pragmatic Play, Play’n GO',
    '1xbet_license': 'Licensed by Curacao. Accepts players from Jordan.',
    '20bet_review_title': '20Bet Review',
    '20bet_review_desc': 'A global casino with a welcome bonus up to €120 and 120 free spins.',
    '20bet_bonus': 'Welcome Bonus: 100% up to €120 + 120 free spins',
    '20bet_weekly': 'Weekly offers for active players',
    '20bet_games': 'Slots, Live Casino, Sports Betting',
    '20bet_providers': 'Global providers: NetEnt, Pragmatic Play, Play’n GO',
    '20bet_license': 'Licensed by Curacao. Accepts players from Jordan.',
    'bet365_review_title': 'bet365 Review',
    'bet365_review_desc': 'The world’s most famous betting and casino brand with a welcome bonus up to $100.',
    'bet365_bonus': 'Welcome Bonus: 100% up to $100',
    'bet365_games': 'Slots, Live Casino, Sports Betting',
    'bet365_providers': 'Global providers: NetEnt, Playtech, Microgaming',
    'bet365_license': 'Licensed by Gibraltar and UKGC. Accepts players from Jordan.',
    'melbet_review_title': 'Melbet Review',
    'melbet_review_desc': 'Welcome bonus up to $100 and 100 free spins, with diverse payment options.',
    'melbet_bonus': 'Welcome Bonus: 100% up to $100 + 100 free spins',
    'melbet_games': 'Slots, Live Casino, Sports Betting',
    'melbet_providers': 'Global providers: NetEnt, Pragmatic Play, Play’n GO',
    'melbet_license': 'Licensed by Curacao. Accepts players from Jordan.',
    'sbobet_review_title': 'SBOBET Review',
    'sbobet_review_desc': 'Sports betting and slots with a welcome bonus up to $200 and 50 free spins.',
    'sbobet_bonus': 'Welcome Bonus: 100% up to $200 + 50 free spins',
    'sbobet_games': 'Sports Betting, Live Casino, Slots',
    'sbobet_providers': 'Global providers: Playtech, Microgaming',
    'sbobet_license': 'Licensed by Isle of Man. Accepts players from Jordan.',
    // Slots
    'slot_bookofdead': 'Book of Dead',
    'slot_bookofdead_desc': 'Play’n GO’s classic adventure slot, high RTP and free spins.',
    'slot_starbust': 'Starburst',
    'slot_starbust_desc': 'NetEnt’s colorful, fast slot, ideal for beginners.',
    'slot_gates': 'Gates of Olympus',
    'slot_gates_desc': 'Multiplier, animated slot experience from Pragmatic Play.',
    'slot_sweet': 'Sweet Bonanza',
    'slot_sweet_desc': 'Fruit-themed slot with free spins and big multipliers.',
    // FAQ
    'faq_q1': 'How do I register at Petra.bet?',
    'faq_a1': 'Click the register button, fill your details, and verify your account via email or phone.',
    'faq_q2': 'Is casino legal in Jordan?',
    'faq_a2': 'Internationally licensed sites accept players from Jordan, but follow local laws.',
    'faq_q3': 'What payment methods are available?',
    'faq_a3': 'Bank cards, e-wallets, and cryptocurrencies (Bitcoin, USDT).',
    'faq_q4': 'Is my data safe?',
    'faq_a4': 'All sites use SSL encryption and advanced security measures.',
    'faq_q5': 'Is there Arabic support?',
    'faq_a5': 'Yes, Petra.bet and the support team offer full Arabic service.',
    // Bonus table headers
    'bonus_site': 'Site',
    'bonus_percent': 'Bonus %',
    'bonus_max': 'Maximum',
    'bonus_freespin': 'Free Spin',
    'bonus_wagering': 'Wagering',
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
  return TRANSLATIONS[lang][key] || TRANSLATIONS['ar'][key] || key;
}

// Otomatik tüm data-i18n alanlarını doldur
function updateTranslations() {
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });
  // Dil butonlarını güncelle
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}
