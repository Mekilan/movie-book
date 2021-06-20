import React from 'react';

class Detailmovieview extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section>
                <div className="container">
                   <img src="/img/movie-seat.jpg" alt="Snow" className="img-s-o" />
                    <div className="top-left"><img src="/img/muvi-cinemas-logo.png" className="" /></div>
                    <div className="row">
                    <div class="card mb-3 card-d-img">
                    <div class="row">
                    <div class="col-md-4">
                        <div className="img-aln">
                    <img src="/img/220px-Asuran_movie_poster.jpg" class="card-img img-m-pos" alt="..." /> 
                    </div>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title mv-c">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Detailmovieview;