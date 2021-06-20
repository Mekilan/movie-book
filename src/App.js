import React from 'react';
import Header from './component/Header';
import Movielist from './component/Movielist';
import Footer from './component/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
          <Movielist />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
