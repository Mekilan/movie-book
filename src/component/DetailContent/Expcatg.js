import React from "react";

class Expcatg extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            scr1:[],
            scr2:[],
            scr3:[],
            scr4:[]
        }
      }
      componentDidMount()
      {
          const {scr1,scr2,scr3,scr4}=this.props;
          this.setState({},()=>
          {
           this.setState({scr1:scr1,scr2:scr2,scr3:scr3,scr4:scr4 });
          })
      }
      removeClass=()=>
      {
        var elems = document.querySelectorAll('.rm-c');
        [].forEach.call(elems, function(el) {
        el.classList.remove("active");
        });
      }
      onMovtimeClick=(evt)=>
      {
        evt.preventDefault();
        this.removeClass();
        let id= evt.currentTarget.dataset.id;
        let arr= this.state.scr1;
        for(var i in arr)
        {
            if(arr[i].class !== "li-disable"){
            if(arr[i].id === id) {
            if(arr[i].class === 'inactive') {
            arr[i].class = 'active';
            this.props.callback(true);
            }
            else
            {
            arr[i].class = 'inactive';
            this.props.callback(false);
            }
            }
        }
        }
        this.setState({scr1:arr});
        
      }
      onMovtimeClick1=(evt)=>
      {
        evt.preventDefault();
        this.removeClass();
        let id= evt.currentTarget.dataset.id;
        let arr= this.state.scr2;
        for(var i in arr)
        {
            if(arr[i].class !== "li-disable"){
            if(arr[i].id === id) {
            if(arr[i].class === 'inactive') {
            arr[i].class = 'active';
            this.props.callback(true);
            }
            else
            {
            arr[i].class = 'inactive';
            this.props.callback(false);
            }
            }
        }
        }
        this.setState({scr2:arr});
        
      }
      onMovtimeClick2=(evt)=>
      {
        evt.preventDefault();  
        this.removeClass();
        let id= evt.currentTarget.dataset.id;
        let arr= this.state.scr3;
        for(var i in arr)
        {
            if(arr[i].class !== "li-disable"){
            if(arr[i].id === id) {
            if(arr[i].class === 'inactive') {
            arr[i].class = 'active';
            this.props.callback(true);
            }
            else
            {
            arr[i].class = 'inactive';
            this.props.callback(false);
            }
            }
        }
        }
        this.setState({scr3:arr});
      }
      onMovtimeClick3=(evt)=>
      {
        evt.preventDefault();
        this.removeClass();
        let id= evt.currentTarget.dataset.id;
        let arr= this.state.scr4;
        for(var i in arr)
        {
            if(arr[i].class !== "li-disable"){
                if(arr[i].id === id) {
                if(arr[i].class === 'inactive') {
                arr[i].class = 'active';
                this.props.callback(true);
                }
                else
                {
                arr[i].class = 'inactive';
                this.props.callback(false);
                }
                }
        }
        }
        this.setState({scr4:arr});
      }
      render() {
        return (
            <section className="container c-srl">
             <div className="row">
             <h3 className="h-sht">PERIENCE</h3>
                 <ul className="ul-list-t li-1">
                     {this.state.scr1.length != 0 ? this.state.scr1.map((item,i)=>(
                     <li className={`li-tm-al rm-c ${item.class} `}  key={i} data-id={item.id} onClick={this.onMovtimeClick}><a href="#">
                        {item.time}
                         </a></li>
                         )) : null}
                 </ul>
             </div>
             <div className="row">
             <h3 className="h-sht">SCREEN</h3>
                 <ul className="ul-list-t" >
                 {this.state.scr2.length != 0 ? this.state.scr2.map((item,i)=>(
                     <li className={`li-tm-al rm-c ${item.class}`}  key={i}  data-id={item.id} onClick={this.onMovtimeClick1}><a href="#" >
                        {item.time}
                         </a></li>
                         )) : null}
                 </ul>
             </div>
             <div className="row">
             <h3 className="h-sht">SUITES</h3>
                 <ul className="ul-list-t">
                 {this.state.scr3.length != 0 ? this.state.scr3.map((item,i)=>(
                     <li className={`li-tm-al rm-c ${item.class}`} key={i} data-id={item.id} onClick={this.onMovtimeClick2}><a href="#">
                        {item.time}
                         </a></li>
                         )) : null}
                 </ul>
             </div>
             <div className="row">
             <h3 className="h-sht">JUNIOR</h3>
                 <ul className="ul-list-t" >
                 {this.state.scr4.length != 0 ? this.state.scr4.map((item,i)=>(
                     <li className={`li-tm-al rm-c ${item.class}`} key={i} data-id={item.id} onClick={this.onMovtimeClick3}><a href="#">
                        {item.time}
                         </a></li>
                         )) : null}
                 </ul>
             </div>
            </section>
        )
    }
}

export default Expcatg;