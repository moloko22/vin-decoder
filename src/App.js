import React from 'react';
import './App.css';
import {Router} from 'react-router-dom';
import {history} from './helpers/history';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Footer from "./components/Footer/Footer";
import UpButton from "./components/UpButton/UpButton";

function App() {
  return (
      <Router history={history}>
          <section className={'app'}>
                <Header />
                <Main />
                <Footer />
          </section>
          <UpButton/>
      </Router>
  );
}

export default App;