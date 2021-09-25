import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList' 
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />

        <Switch>
          <Route path="/mail">
            <Mail/>            
          </Route>
          <Route path="/">
            <EmailList/>
          </Route>
        </Switch>
      </div>

      {sendMessageIsOpen && <SendMail />}
    </div>
    </Router>
  );
}

export default App;
