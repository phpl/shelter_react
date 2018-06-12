import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default class FormModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpenModal}>{this.props.buttonLabel}</Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel={this.props.contentLabel}
          style={this.customStyles}
        >
          <h2>Are you sure you want to {this.props.actionLabel}?</h2>
          <Button onClick={this.handleCloseModal}>No</Button>
          <Button
            onClick={() => {
              this.props.action(this.props.id);
              this.handleCloseModal();
            }}
          >
            Yes
          </Button>
        </Modal>
      </div>
    );
  }
}
