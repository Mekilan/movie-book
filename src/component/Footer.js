import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section>
                <div className="container">
                    <div className="footer">
                        <span>Powered by<sub>Influx</sub></span>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;