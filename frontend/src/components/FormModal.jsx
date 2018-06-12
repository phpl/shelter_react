import React, { Component } from "react";
import AnimalForm from "./AnimalForm.jsx";
import { Button, Modal } from "react-bootstrap";

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
        <Button
          bsStyle={this.props.buttonStyle}
          onClick={() => {
            if (this.props.edit) {
              this.props.selectForEdit(this.props.id);
            }
            this.handleShow();
          }}
        >
          {this.props.label}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AnimalForm
              animal={this.props.animal}
              onChange={this.props.onChange}
              submitAnimal={this.props.submitAnimal}
              resetForm={this.props.resetForm}
              handleCloseModal={this.handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
