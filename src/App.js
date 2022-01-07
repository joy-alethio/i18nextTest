import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 함수형 컴포넌트일 때 react-i18next에서 제공하는 react hook 사용
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

const App = () => {
  /**
   * t 메소드 : 리액트가 i18next에게 특정 key 값에 매칭되는 번역 데이터를 찾아달라고 요청하는 메소드
   * i18n : I18nextProvider를 통해 전달받은 i18n 세팅 데이터, 각 컴포넌트 파일별로 import 하지 않아도 됨
   */
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(sessionStorage.lang);

  const doChangeLanguage = (e) => {
    setLang(e.target.value);
    sessionStorage.lang = e.target.value;
    // 언어 변경
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <select value={lang} onChange={(e) => doChangeLanguage(e)}>
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </div>
        {/* 딕셔너리 파일에서 설정한 key값을 인자로 전달 */}
        <div>{t('App.test')}</div>
        <Link to="/app-class">
          <button>{t('App.button')}</button>
        </Link>
      </header>
    </div>
  );
};

export default App;
