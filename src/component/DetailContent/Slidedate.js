import React from "react";
import Slider from "react-slick";


class Slidedate extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          datelist:[]
      }
    }
    componentDidMount()
    {  
        var arr=[];
        var data={id:'',month:'',year:'',day:''}
       
        var data = this.timeFrom(-10);
        this.setState({datelist:data});
    }
    timeFrom =(date) => {
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var day=new Array();
        day[0] = "Sun";
        day[1] = "Mon";
        day[2] = "Tue";
        day[3] = "Wed";
        day[4] = "Thr";
        day[5] = "Fri";
        day[6] = "Sat";
        var getdata=[]
          for (let I = 0; I < Math.abs(date); I++) {
            var arrdata={id:"",month:"",Date:"",year:"",day:""};
                var dtval=new Date(new Date().getTime() - ((date >= 0 ? I : (I - I - I)) * 24 * 60 * 60 * 1000)).toLocaleString()
                var data=dtval.split(',')[0];
                var newdate=new Date(data);
                var m = month[ newdate.getMonth()];
                var d= day[ newdate.getDay()];
                arrdata.id= I;
                arrdata.month= m;
                arrdata.year=newdate.getFullYear();
                arrdata.date=newdate.getDate();
                arrdata.day=d;
                getdata.push(arrdata);
            }
            return getdata;
    }
    onChooseDay=(evt)=>
    {
        evt.preventDefault();
        var elems = document.querySelectorAll(".slide-cus-r");
        [].forEach.call(elems, function(el) {
        el.classList.remove("active");
        });
        evt.currentTarget.classList.add('active');
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
          };
          return (
            <section className="container cus-slide">
            <Slider {...settings}>
                {this.state.datelist.map((item,i)=>(
                <div className={`slide-cus-r ${i === 0 ? 'active':''}`} key={i} onClick={this.onChooseDay}>
                  <h3>{i !== 0 ? item.month : 'Today'}</h3>
                  <p>{item.day} {item.date}</p>
                </div>
                ))}
              </Slider>
            </section>
          )
    }
}

export default Slidedate;