import React from 'react';
import AllExpModal from './AllExpModal';



class Movielist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allexpshow: false,
            expcount:0,
            selectedexp:[],
            language: [
                {
                    id: '1', language: 'ENGLISH', class: 'active'
                },
                {
                    id: '2', language: 'عربى', class: 'inactive'
                }
            ]
        }
    }
    onLangChange = (evt) => {
        debugger;
        evt.preventDefault();
        let id= evt.currentTarget.dataset.id;
        let arr= this.state.language;
        for(var i in arr)
        {
            if(arr[i].class === 'active'){
            arr[i].class = 'inactive';
            }
            else
            {
                arr[i].class = 'active';
            }
        }
        this.setState({language:arr});
    }
    openAllExpModel = (evt) => {
        this.setState({ allexpshow: true });
    }
    statechange = (data) => {
        this.setState({ allexpshow: false });
    }
    selectCount=(data,arr)=>
    {
     this.setState({expcount:data,selectedexp:arr});
    }
    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row tab-nav">
                                <ul className="nav nav-pills pill-cs">
                                    {this.state.language.map((item, i) => (
                                        <li className="nav-item" key={i} data-id={item.id} onClick={this.onLangChange}>
                                            <a className={`nav-link tab-sz ${item.class}`} href="#"  ><span className="ln-spans">{item.language}</span></a>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <div className="row">
                                    <div className="col-md-6 btn-alexp">
                                        <button type="button" className={`btn btn-primary btn-cus ${this.state.expcount === 0  ? '':''}`} data-toggle="modal" data-target="#exampleModalCenter" onClick={this.openAllExpModel}>ALL EXPERIENCE
                                        <div className={`${this.state.expcount === 0  ? '':'btn-sm-r'}`}>
                                        <span className="count-s">{this.state.expcount !== 0 ? this.state.expcount : ''}</span>
                                        </div>
                                        </button>
                                    </div>
                                    <div className="col-md-3 nxt-shw">
                                        <ul className="nav nav-pills pill-cs clr-ch">
                                            <li className="nav-item">
                                                <a className="nav-link clp" href="#">PROMOTIONS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 nxt-shw">
                                        <ul className="nav nav-pills pill-cs nxt clr-ch">
                                            <li className="nav-item">
                                                <a className="nav-link clp" href="#">NEXT 10 SHOWS</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container inner-scroll">
                        <div className="row">
                            <div className="card-group">
                                <div className="col-md-3 col-sm-6 pb-4">
                                    <div className="card card-al">
                                        <img className="card-img-top img-h" src="/img/220px-Asuran_movie_poster.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <ul className="cr-ul">
                                                <li className="m-txt">Asuran</li>
                                                <li className="m-txt">Action/Drama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 pb-4">
                                    <div className="card card-al">
                                        <img className="card-img-top img-h" src="/img/220px-Asuran_movie_poster.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <ul className="cr-ul">
                                                <li className="m-txt">Asuran</li>
                                                <li className="m-txt">Action/Drama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 pb-4">
                                    <div className="card card-al">
                                        <img className="card-img-top img-h" src="/img/220px-Asuran_movie_poster.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <ul className="cr-ul">
                                                <li className="m-txt">Asuran</li>
                                                <li className="m-txt">Action/Drama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 pb-4">
                                    <div className="card card-al">
                                        <img className="card-img-top img-h" src="/img/220px-Asuran_movie_poster.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <ul className="cr-ul">
                                                <li className="m-txt">Asuran</li>
                                                <li className="m-txt">Action/Drama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 pb-4">
                                    <div className="card card-al">
                                        <img className="card-img-top img-h" src="/img/220px-Asuran_movie_poster.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <ul className="cr-ul">
                                                <li className="m-txt">Asuran</li>
                                                <li className="m-txt">Action/Drama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 pb-4">
                                    <div className="card card-al">
                                        <img className="card-img-top img-h" src="/img/220px-Asuran_movie_poster.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <ul className="cr-ul">
                                                <li className="m-txt">Asuran</li>
                                                <li className="m-txt">Action/Drama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 pb-4">
                                    <div className="card card-al">
                                        <img className="card-img-top img-h" src="/img/220px-Asuran_movie_poster.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <ul className="cr-ul">
                                                <li className="m-txt">Asuran</li>
                                                <li className="m-txt">Action/Drama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 pb-4">
                                    <div className="card card-al">
                                        <img className="card-img-top img-h" src="/img/220px-Asuran_movie_poster.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <ul className="cr-ul">
                                                <li className="m-txt">Asuran</li>
                                                <li className="m-txt">Action/Drama</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {this.state.allexpshow ?
                    <AllExpModal show={this.state.allexpshow} count={this.state.expcount} selectarr={this.state.selectedexp} callback={this.statechange} callgetcount={this.selectCount}/> : null}
            </React.Fragment>
        )
    }
}

export default Movielist;