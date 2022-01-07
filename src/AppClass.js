import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 클래스형 컴포넌트일 때 react-i18next에서 제공하는 HOC 사용
import { withTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

class AppClass extends Component {
  state = { lang: sessionStorage.lang };

  doChangeLanguage = (e) => {
    this.setState({ lang: e.target.value });
    sessionStorage.lang = e.target.value;
    // 언어 변경
    this.props.i18n.changeLanguage(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <select
              value={this.state.lang}
              onChange={(e) => this.doChangeLanguage(e)}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>
          {/* 딕셔너리 파일에서 설정한 key값을 파라미터로 넣어 실행 */}
          <div>{this.props.t('AppClass.test')}</div>
          <Link to="/">
            <button>{this.props.t('AppClass.button')}</button>
          </Link>
        </header>
      </div>
    );
  }
}

// props를 통해 컴포넌트 내부에 t메소드와 i18n 인스턴스를 가져올 수 있음
export default withTranslation()(AppClass);
