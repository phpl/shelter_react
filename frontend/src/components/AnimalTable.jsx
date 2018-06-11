import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import "./AnimalTable.css";
import Modal from "react-modal";
import AnimalForm from "./AnimalForm.jsx";

Modal.setAppElement("#root");

export default class AnimalTable extends Component {
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
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Common name</th>
            <th>Scientific name</th>
            <th>Gender</th>
            <th>Adopted</th>
            <th>
              <div>
                <Button onClick={this.handleOpenModal}>Add Animal</Button>
                <Modal
                  isOpen={this.state.showModal}
                  contentLabel="Add animal"
                  style={this.customStyles}
                >
                  <AnimalForm
                    animal={this.props.animal}
                    onChange={this.props.onChange}
                    submitAnimal={this.props.submitAnimal}
                    resetForm={this.props.resetForm}
                  />
                  <Button onClick={this.handleCloseModal}>Cancel</Button>
                </Modal>
              </div>
            </th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.animals.map((animal, id) => (
            <tr key={`animal_${id}`}>
              <td>{animal.name}</td>
              <td>{animal.commonName}</td>
              <td>{animal.scientificName}</td>
              <td>{animal.gender}</td>
              <td>{animal.adoptionInProgress === true ? "YES" : "NO"}</td>
              <td>
                <div>
                  <Button
                    onClick={() => {
                      this.props.selectForEdit(id);
                      this.handleOpenModal();
                    }}
                  >
                    Edit Animal
                  </Button>
                  <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Edit Animal"
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
              </td>
              <td>
                <Button onClick={() => this.props.deleteAnimal(id)}>
                  Delete Animal
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => this.props.invertAnimalAdoptionState(id)}
                >
                  Change Animal adoption
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
