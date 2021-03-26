import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Login from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import localeMsgs from './localeMsgs';

let localization = new LocalizedStrings(localeMsgs);

const App = () => {
  const [userInfo, setUserInfo] = React.useState(false);
  const [lang, setLang] = React.useState('en');
  const [pageName, setPageName] = React.useState('DummyApp');

  const handleChangeLanguage = (lang) => {
    setLang(lang);
  }

  const logout = () => {
    if (confirm(localization.logout_confirm)) setUserInfo('');
  }

  localization.setLanguage(lang);

  return (
    <BrowserRouter>
      <Navbar
        userInfo={userInfo}
        handleChangeLanguage={handleChangeLanguage}
        handleSetUserInfo={setUserInfo}
        setUserInfo={setUserInfo}
        logout={logout}
        pageName={pageName}
        lang={lang}
      />

      <Route exact path="/" render={() => {
        setPageName('DummyApp');
        return <HomePage lang={lang} />
      }}>
      </Route>

      <Route path="/contact" render={() => {
        setPageName(localization.contact_us);
        return <Contact lang={lang} userInfo={userInfo} />
      }}>
      </Route>
      <Route path="/login" render={() => {
        setPageName(localization.login);
        return <Login setUserInfo={setUserInfo} lang={lang} />
      }}>
      </Route>
      <Footer lang={lang} />
    </BrowserRouter>
  );
};


export default App;
