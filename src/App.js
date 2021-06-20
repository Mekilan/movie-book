import React from 'react';
import Header from './component/Header';
import Movielist from './component/Movielist';
import Detailmovieview from './component/DetailContent/Detailmovieview';
import Footer from './component/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
     this.state={
       detailshow:false
     }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.detailshow ?
          <React.Fragment>
          <Header />
          <Movielist />
          <Footer /></React.Fragment> : <Detailmovieview />}
        </div>
      </div>
    )
  }
}

export default App;
