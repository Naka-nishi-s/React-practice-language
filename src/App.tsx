import './App.css'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {

  const [ lang, setLang ] = useState('ja');
  const {t, i18n}:any = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div className="App">
      <h1> { t( 'こんにちは。' ) } </h1>
      <p> { t('お元気ですか？') } </p>
      <p> { t('私は元気です') } </p>
      <p> { t('すごく元気で、めっちゃ元気です。') } </p>
      <button onClick={() => setLang('ja')}> { t('日本語') } </button>
      <button onClick={() => setLang('en')}> { t('英語') } </button>
      <button onClick={() => setLang('fr')}> { t('フランス語') } </button>
      <button onClick={() => setLang('ar')}> { t('アラビア語') } </button>
    </div>
  )
}

export default App
