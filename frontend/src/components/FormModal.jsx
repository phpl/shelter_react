import React, { Component } from "react";
import AnimalForm from "./AnimalForm.jsx";
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
    content: {}
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
        <Button
          onClick={() => {
            if (this.props.edit) {
              this.props.selectForEdit(this.props.id);
            }
            this.handleOpenModal();
          }}
        >
          {this.props.label}
        </Button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel={this.props.contentLabel}
          style={this.customStyles}
        >
          <AnimalForm
            animal={this.props.animal}
            onChange={this.props.onChange}
            submitAnimal={this.props.submitAnimal}
            resetForm={this.props.resetForm}
            handleCloseModal={this.handleCloseModal}
          />
        </Modal>
      </div>
    );
  }
}
