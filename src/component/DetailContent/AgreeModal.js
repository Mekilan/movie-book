import React from "react";

class AgreeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  componentDidMount(props) {
    const { open } = this.props;
    this.setState({ show: open });
  }
  onCloseModal = () => {
    this.setState({ show: false });
    this.props.callback(false);
  };

  onCancelClick = (evt) => {
    this.setState({ show: false });
    this.props.callback(false);
  };
  onAgreeClick = (evt) => {
    this.setState({ show: false });
    this.props.callback(false);
  };
  render() {
    return (
      <div className={`modal-backdrop fade ${this.state.show ? "show" : "hide"}`}
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={{ display: this.state.show ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content m-wt">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Rules of Entry
              </h5>
              <button
                type="button"
                className="close cus-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.onCancelClick}
              >
                <span aria-hidden="true" className="x-cls">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row p-ch">
                <p>
                  I understand this movie is rated <b>PG15</b>
                </p>
                <br />
                <p>
                  Guests under the <b>age of 12</b> must be accompanied by a guardian
                </p>
                <br />
                <p>Children under the <b>age of 3 </b>will not be permitted in the cinema</p><br />
                <p>Outside food and drink are not allowed in the cinema</p><br />
                <p>I agree to comply with the <a href="#"> Conumers Code of Conduct</a></p><br />
                <p>I agree to comply with the <a href="#"> Seating Rules</a></p>

              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.onCancelClick}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onAgreeClick}
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgreeModal;
