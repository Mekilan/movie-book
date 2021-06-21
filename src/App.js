import React from 'react';
import Header from './component/Header';
import Movielist from './component/Movielist';
import Detailmovieview from './component/DetailContent/Detailmovieview';
import DetailFooter from './component/DetailContent/DetailFooter';
import AgreeModal from './component/DetailContent/AgreeModal';
import Footer from './component/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
     this.state={
       detailshow:false,
       detaildata:[],
       btnenable:false,
       openagree:false
     }
  }
  HomeFun=(data)=>
  {
    this.setState({detailshow:data});
  }
  detailFunCall=(data,arrdata)=>
  {
    this.setState({detailshow:data,detaildata:arrdata});
  }
  goHome=(data)=>
  {
    this.setState({detailshow:data,openagree:false,btnenable:false});
  }
  onEnable=(data)=>
  {
    this.setState({btnenable:data});
  }
  openAgree=(data)=>
  {
    this.setState({openagree:data});
  }
  onCallBack=(data)=>
  {
    this.setState({openagree:data});
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {!this.state.detailshow ?
          <React.Fragment>
          <Header />
          <Movielist callback={this.detailFunCall}/>
          <Footer /></React.Fragment> : 
           <React.Fragment>
          <Detailmovieview detaildata={this.state.detaildata} callback={this.HomeFun} callback1={this.onEnable} />
          <DetailFooter btnenable={this.state.btnenable} callback={this.goHome} callback1={this.openAgree}/> 
          {this.state.openagree ?
          <AgreeModal open={this.state.openagree} callback={this.onCallBack}/> : null}
          </React.Fragment>
          }
        </div>
      </div>
    )
  }
}

export default App;
