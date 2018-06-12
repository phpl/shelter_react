import React, { Component } from "react";
import { Button, ButtonGroup, Modal } from "react-bootstrap";

export default class FormModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle={this.props.buttonStyle} onClick={this.handleShow}>
          {this.props.buttonLabel}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to {this.props.actionLabel}?</p>
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup>
              <Button onClick={this.handleClose}>No</Button>
              <Button
                bsStyle={this.props.buttonStyle}
                onClick={() => {
                  this.props.action(this.props.id);
                  this.handleClose();
                }}
              >
                Yes
              </Button>
            </ButtonGroup>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
