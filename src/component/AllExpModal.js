import React from 'react';

class AllExpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    componentDidMount(props) {
        debugger;
        const { show } = this.props;
        this.setState({}, () => {
            this.setState({ show: show });
        })
    }
    onCloseModal = () => {
        this.setState({ show: false });
        this.props.callback(false);
    }
    render() {
        return (
            <div className={`modal-backdrop fade ${this.state.show ? 'show' : 'hide'}`} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ display: this.state.show ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCloseModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" >Reset</button>
                            <button type="button" className="btn btn-primary">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllExpModal;