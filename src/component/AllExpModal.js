import React from "react";

class AllExpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      count: 0,
      expcat: [
        { id: 1, name: "PERIENCE", cat: "PERIENCE", class: "" },
        { id: 2, name: "SUITES", cat: "SUITES", class: "" },
        { id: 3, name: "JUNIOR", cat: "JUNIOR", class: "" },
        { id: 4, name: "SCREEN", cat: "SCREEN", class: "" },
      ],
    };
  }
  componentDidMount(props) {
    const { show, count, selectarr } = this.props;
    this.setState({}, () => {
      this.setState({ show: show, count: count });
      if (count != 0) {
        this.setState({ expcat: selectarr });
      }
    });
  }
  onCloseModal = () => {
    this.setState({ show: false });
    this.props.callback(false);
  };
  onSelectExp = (evt) => {
    evt.preventDefault();
    let id = evt.currentTarget.dataset.id;
    let arr = this.state.expcat;
    for (var i in arr) {
      if (arr[i].cat === id) {
        if (arr[i].class === "") {
          arr[i].class = "active";
        } else {
          arr[i].class = "";
        }
      }
    }
    this.setState({ expcat: arr });
  };
  onResetClick = (evt) => {
    evt.preventDefault();
    let arr = this.state.expcat;
    for (var i in arr) {
      arr[i].class = "";
    }
    this.setState({ expcat: arr });
  };
  onApplyClick = (evt) => {
    let selectlen = this.state.expcat.filter((item) => {
      return item.class === "active";
    }).length;
    let selectvalue = this.state.expcat;
    this.setState({ show: false });
    this.props.callback(false);
    this.props.callgetcount(selectlen, selectvalue);
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
          <div className="modal-content ext-m-p">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Select Experience
              </h5>
              <button
                type="button"
                className="close cus-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.onCloseModal}
              >
                <span aria-hidden="true" className="x-cls">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="form-group">
                  <div className="items-collection">
                    <div className="row">
                      {this.state.expcat.map((item, i) => (
                        <div className="items col-md-6" key={i} id={item.cat}>
                          <div className="info-block block-info clearfix">
                            <div
                              data-toggle="buttons"
                              className="btn-group bizmoduleselect"
                              data-id={item.cat}
                              onClick={this.onSelectExp}
                            >
                              <label
                                className={`btn btn-default ${item.class}`}
                              >
                                <div className="itemcontent">
                                  <input
                                    type="checkbox"
                                    className="hidechk"
                                    autoComplete="off"
                                    value=""
                                  />
                                  <h5>{item.name}</h5>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.onResetClick}
              >
                Reset
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onApplyClick}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllExpModal;
