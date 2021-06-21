import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section>
                <div className="container">
                    <img src="/img/underwater.jpg" alt="Snow" className="img-s" />
                    <div className="top-left"><img src="/img/muvi-cinemas-logo.png" className="" /></div>
                </div>
            </section>
        )
    }
}

export default Header;