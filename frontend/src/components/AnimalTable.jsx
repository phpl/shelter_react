import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import "./AnimalTable.css";
import FormModal from "./FormModal.jsx";

export default class AnimalTable extends Component {
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
                label="Add animal"
                contentLabel="Add animal"
                animal={this.props.animal}
                onChange={this.props.onChange}
                submitAnimal={this.props.submitAnimal}
                resetForm={this.props.resetForm}
                edit={false}
              />
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
                <FormModal
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
