/**
 * i18next는 js뿐만 아니라 여러가지 다양한 언어에서 적용할 수 있는 국제화 모듈 (언어 전환 전용 모듈)
 * react-i18next i18next 기능을 리액트에서 사용할 수 있도록 특화된 라이브러리
 */
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import getLanguage from './util';

/**
 * 딕셔너리 기능을 수행할 JSON 파일 생성해서 import
 */
// import translationEN from './locales/en/translation.json';
// import translationKO from './locales/ko/translation.json';
// import translationJA from './locales/ja/translation.json';

/**
 * import 했던 딕셔너리 파일, 리액트가 i18next에 번역 데이터를 요청하면 i18next가 찾아보게될 파일
 */
// const resources = {
//   en: { translation: translationEN },
//   ko: { translation: translationKO },
//   ja: { translation: translationJA },
// };

/**
 * 페이지 진입시 사용자의 언어를 가져와 세션에 저장
 */
getLanguage();

i18n
  .use(Backend)
  .use(initReactI18next) // i18n 인스턴스를 react-i18next에 전달
  .init({
    // resources, // 위에서 설정한 번역 데이터
    lng: sessionStorage.lang ? sessionStorage.lang : 'ko', // 실행 시 기본값으로 가져갈 언어
    fallbackLng: 'ko', // 요청한 언어의 번역 데이터를 찾을 수 없을때 대신 찾아보게 할 딕셔너리 언어값
    keySeparator: false, // 객체에서 값을 불러올때 key값만 넣어서 사용할지 여부
    debug: true,
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false,
    },
    // backend: {
    //   // for all available options read the backend's repository readme file
    //   loadPath: '/locales/{{lng}}/{{ns}}.json',
    //   allowMultiLoading: true,
    // },
  });

export default i18n;
