import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AppClass from './AppClass';
import reportWebVitals from './reportWebVitals';
// provider을 사용해 i18next의 인스턴스를 전달
import { I18nextProvider } from 'react-i18next';
// 세팅한 i18n import
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    {/* i18n prop을 통해 세팅한 i18n 인스턴스를 전달하여 각 파일에서 import 하지 않아도 사용 가능하다 */}
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/app-class" element={<AppClass />} />
        </Routes>
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
