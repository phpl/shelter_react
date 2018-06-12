import React, { Component } from "react";
import { Table, FormGroup, FormControl } from "react-bootstrap";
import "./AnimalTable.css";
import FormModal from "./FormModal.jsx";
import ConfirmationModal from "./ConfirmationModal.jsx";

export default class AnimalTable extends Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "" };
  }

  filterHandleChange(e) {
    const { value } = e.target;
    this.setState({ filterText: value });
  }

  filterPredicate = animal => {
    const filter = this.state.filterText;

    if (filter === "") {
      return true;
    }

    if (
      animal.name.includes(filter) ||
      animal.commonName.includes(filter) ||
      animal.scientificName.includes(filter) ||
      animal.gender.includes(filter)
    ) {
      return true;
    }

    return false;
  };

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
              <FormModal
                buttonStyle="success"
                label="Add animal"
                contentLabel="Add animal"
                animal={this.props.animal}
                onChange={this.props.onChange}
                submitAnimal={this.props.submitAnimal}
                resetForm={this.props.resetForm}
                edit={false}
              />
            </th>
            <th> Filter Animals by</th>
            <th>
              <FilterForm
                filter={this.state.filterText}
                filterHandleChange={this.filterHandleChange.bind(this)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.animals
            .filter(this.filterPredicate)
            .map((animal, id) => (
              <tr key={`animal_${id}`}>
                <td>{animal.name}</td>
                <td>{animal.commonName}</td>
                <td>{animal.scientificName}</td>
                <td>{animal.gender}</td>
                <td>{animal.adoptionInProgress === true ? "YES" : "NO"}</td>
                <td>
                  <FormModal
                    buttonStyle="primary"
                    label="Edit animal"
                    contentLabel="Edit animal"
                    animal={this.props.animal}
                    onChange={this.props.onChange}
                    submitAnimal={this.props.submitAnimal}
                    selectForEdit={this.props.selectForEdit}
                    resetForm={this.props.resetForm}
                    edit={true}
                    id={id}
                  />
                </td>
                <td>
                  <ConfirmationModal
                    id={id}
                    buttonStyle="danger"
                    action={this.props.deleteAnimal}
                    buttonLabel="Delete Animal"
                    actionLabel="delete this animal"
                  />
                </td>
                <td>
                  <ConfirmationModal
                    id={id}
                    buttonStyle="primary"
                    action={this.props.invertAnimalAdoptionState}
                    buttonLabel="Change Animal Adoption"
                    actionLabel="change this animal adoption state"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}

const FilterForm = props => {
  return (
    <form>
      <FormGroup controlId="formBasicText">
        <FormControl
          type="text"
          value={props.filter}
          placeholder="Filter"
          onChange={props.filterHandleChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    </form>
  );
};
