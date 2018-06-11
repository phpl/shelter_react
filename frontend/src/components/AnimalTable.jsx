import React, { Component } from 'react'
import { Table, Button } from "react-bootstrap";
import './AnimalTable.css';

export default class About extends Component {
  render() {
    return (
        <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Common ne</th>
            <th>Scientific name</th>
            <th>Gender</th>
            <th>Adopted</th>
          </tr>
        </thead>
        <tbody>
          {this.props.animals.map((animal, id) => (
            <tr key={`animal_${id}`}>
              <td>{animal.name}</td>
              <td>{animal.commonName}</td>
              <td>{animal.scientificName}</td>
              <td>{animal.amgender}</td>
              <td>{animal.adoptionInProgress === true ? "YES" : "NO"}</td>
              <td>
                <Button onClick={() => this.props.selectForEdit(id)}>
                  Edit Animal Data
                </Button>
              </td>
              <td>
                <Button onClick={() => this.props.deleteAnimal(id)}>
                  Delete Animal
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}