import React, { Component } from "react";
import { Table, FormGroup, FormControl } from "react-bootstrap";
import "./AnimalTable.css";
import FormModal from "./FormModal.jsx";
import ConfirmationModal from "./ConfirmationModal.jsx";

export default class AnimalTable extends Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", filterAdopted: "all" };
  }

  filterHandleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  filterPredicate = animal => {
    const filter = this.state.filterText;
    const filterAdopted = this.state.filterAdopted;
    const isAdoptedWordMatching =
      animal.adoptionInProgress.toString() === filterAdopted;
    const canShowUsingAdoptionPredicate =
      filterAdopted === "all" || isAdoptedWordMatching;

    if (filter === "") {
      return canShowUsingAdoptionPredicate ? true : false;
    }

    const doesFieldsIncludesFilter =
      animal.name.includes(filter) ||
      animal.commonName.includes(filter) ||
      animal.scientificName.includes(filter) ||
      animal.gender.includes(filter);

    if (doesFieldsIncludesFilter && canShowUsingAdoptionPredicate) {
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
              <AdoptionFilterForm
                filterHandleChange={this.filterHandleChange.bind(this)}
              />
            </th>
            <th>
              <FilterForm
                filter={this.state.filterText}
                filterHandleChange={this.filterHandleChange.bind(this)}
              />
            </th>
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
          </tr>
        </thead>
        <tbody>
          {this.props.animals.filter(this.filterPredicate).map((animal, id) => (
            <tr key={`animal_${id}`}>
              <td>{animal.name}</td>
              <td>{animal.commonName}</td>
              <td>{animal.scientificName}</td>
              <td>{animal.gender}</td>
              <td>{animal.adoptionInProgress === true ? "YES" : "NO"}</td>
              <td>
                <ConfirmationModal
                  id={animal.id}
                  buttonStyle="primary"
                  action={this.props.invertAnimalAdoptionState}
                  buttonLabel="Change Animal Adoption"
                  actionLabel="change this animal adoption state"
                />
              </td>
              <td>
                <ConfirmationModal
                  id={animal.id}
                  buttonStyle="danger"
                  action={this.props.deleteAnimal}
                  buttonLabel="Delete Animal"
                  actionLabel="delete this animal"
                />
              </td>
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
                  id={animal.id}
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
          name="filterText"
          value={props.filter}
          placeholder="Filter"
          onChange={props.filterHandleChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    </form>
  );
};

const AdoptionFilterForm = props => {
  return (
    <form>
      <FormGroup controlId="formControlsSelect">
        <FormControl
          componentClass="select"
          name="filterAdopted"
          placeholder="select"
          onChange={props.filterHandleChange}
        >
          <option value="all">All</option>
          <option value="true">Adopted</option>
          <option value="false">Not Adopted</option>
        </FormControl>
      </FormGroup>
    </form>
  );
};
