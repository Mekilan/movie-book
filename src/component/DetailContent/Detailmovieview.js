import React from "react";
import Slidedate from "./Slidedate";
import Expcatg from "./Expcatg";
import DetailFooter from "./DetailFooter";
import AgreeModal from "./AgreeModal";


class Detailmovieview extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        detaildata:[],
        movtimescr1:[],
        movtimescr2:[],
        movtimescr3:[],
        movtimescr4:[],
        enable:false,
        openamodal:false
    }
  }
  componentDidMount()
  {
      const {detaildata,openagreem}=this.props;    
      this.setState({detaildata:detaildata[0],movtimescr1:detaildata[0].mtperience,movtimescr2:detaildata[0].mtscreen,movtimescr3:detaildata[0].mtsuites,movtimescr4:detaildata[0].mtjunior,openamodal:openagreem});
  }

  onEnable=(data)=>
  {
   this.props.callback1(data);
  }
 
  render() {
    return (
        <React.Fragment>
      <section>
        <div className="container">
          <img src="/img/movie-seat.jpg" alt="Snow" className="img-s-o" />
          <div className="top-left">
            <img src="/img/muvi-cinemas-logo.png" className="" />
          </div>
          <section className="container">
            <section className="row d-post">
                <aside className="">
          <ul>
              <li>
              <img
                      src={this.state.detaildata.mimg}
                      className="ps-img"
                      alt="..."
                    />
              </li>
          </ul>
          </aside>
          <aside className="container cn-t-d">
           <div className="row">
            <div className="col-md-12 flex b-btm">
            <h3>{this.state.detaildata.mname}</h3>
            </div>
            <div className="col-md-12 flex b-btm">
            <p>{this.state.detaildata.type} | {this.state.detaildata.mcatg} | Language - {this.state.detaildata.lang}</p>
            </div>
            <div className="col-md-12 flex b-btm">
            <p>{this.state.detaildata.duration} | Subtite - {this.state.detaildata.subtitle}</p>
            </div>
            <div className="col-md-12 flex">
            <p>Cast : {this.state.detaildata.cast}</p>
            </div>
            <div className="col-md-12 flex">
            <p className="p-lf-s">Synopsis: {this.state.detaildata.stryline}</p>
            </div>
           </div>
          </aside>
          </section>
          </section>
        </div>
      </section>
       <Slidedate />
       {this.state.detaildata.length !=0 ? 
       <Expcatg scr1={this.state.movtimescr1} scr2={this.state.movtimescr2} scr3={this.state.movtimescr3} scr4={this.state.movtimescr4} callback={this.onEnable} />  :null}
      </React.Fragment>
    );
  }
}

export default Detailmovieview;
