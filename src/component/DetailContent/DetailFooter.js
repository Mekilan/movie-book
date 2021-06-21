import React from 'react';

class DetailFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            continuebtn: false
        }
    }

    backToHome = (evt) => {
        evt.preventDefault();
        this.props.callback(false);
    }
    openAgreeModal = (evt) => {
        evt.preventDefault();
        this.props.callback1(true);
    }
    render() {
        return (
            <section>
                <div className="container">
                    <div className="d-footer">
                        <button className="btn btn-primary btn-cus-b" onClick={this.backToHome}><span className="s-bc">Back</span></button>
                        <button className={`btn btn-primary  btn-cus-c ${this.props.btnenable ? '' : 'disabled'}`} onClick={this.openAgreeModal}><span className="s-bc">Continue</span></button>
                    </div>
                </div>
            </section>
        )
    }
}

export default DetailFooter;