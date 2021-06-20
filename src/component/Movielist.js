import React from 'react';
import AllExpModal from './AllExpModal';


const language = [
    {
        id: '1', language: 'ENGLISH', class: 'active'
    },
    {
        id: '2', language: 'عربى', class: 'inactive'
    }
]
class Movielist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allexpshow: false
        }
    }
    onLamgChange = (evt) => {

    }
    openAllExpModel = (evt) => {
        this.setState({ allexpshow: true });
    }
    statechange = (data) => {
        this.setState({ allexpshow: false });
    }
    render() {
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row tab-nav">
                            <div className="col-md-12">
                                <ul className="nav nav-pills pill-cs">
                                    {language.map((item, i) => (
                                        <li className="nav-item" key={i}>
                                            <a className={`nav-link tab-sz ${item.class}`} href="#" onClick={this.onLamgChange}><span className="ln-spans">{item.language}</span></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="row container-sm">
                            <div className="col-md-12 mt-3">
                                <div className="row">
                                    <div className="col-md-6">

                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.openAllExpModel}>ALL EXPERIENCE</button>

                                    </div>
                                    <div className="col-md-3">
                                        <ul className="nav nav-pills pill-cs clr-ch">
                                            <li className="nav-item">
                                                <a className="nav-link clp" href="#">PROMOTIONS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
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
                    <AllExpModal show={this.state.allexpshow} callback={this.statechange} /> : null}
            </React.Fragment>
        )
    }
}

export default Movielist;