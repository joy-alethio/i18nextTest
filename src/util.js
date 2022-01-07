const LANGUAGE_LIST = {
  'en-US': 'en',
  en: 'en',
  'ko-KR': 'ko',
  ko: 'ko',
  za: 'za',
};

const getLanguage = () => {
  const lang = window.navigator.language;
  sessionStorage.lang = LANGUAGE_LIST.hasOwnProperty(lang)
    ? LANGUAGE_LIST[lang]
    : lang;
};

export default getLanguage;
