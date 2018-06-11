import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Table,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  HelpBlock
} from "react-bootstrap";
import "./Home.css";
import { home } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: {
        name: "",
        commonName: "",
        scientificName: "",
        gender: "Male",
        adoptionInProgress: false
      },
      animalUpdateId: null
    };
  }

  componentDidMount() {
    this.props.fetchAnimals();
  }

  resetForm = () => {
    this.setState({
      animal: {
        name: "",
        commonName: "",
        scientificName: "",
        gender: "Male",
        adoptionInProgress: false
      },
      animalUpdateId: null
    });
  };

  selectForEdit = id => {
    let animalToUpdate = this.props.animals[id];
    let newState = {
      ...this.state,
      animal: animalToUpdate,
      animalUpdateId: id
    };
    this.setState(newState);
  };

  submitAnimal = e => {
    e.preventDefault();

    if (this.state.animalUpdateId == null) {
      this.props.addAnimal(this.state.animal).then(this.resetForm);
    } else {
      this.props
        .updateAnimal(this.state.animalUpdateId, this.state.animal)
        .then(this.resetForm);
    }
  };

  render() {
    return (
      <Grid>
        <form onSubmit={this.submitAnimal}>
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Name"
            placeholder="Enter animal name"
            value={this.state.animal.name}
            onChange={e =>
              this.setState({
                animal: { ...this.state.animal, name: e.target.value }
              })
            }
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Common Name"
            placeholder="Enter animal common name"
            value={this.state.animal.commonName}
            onChange={e =>
              this.setState({
                animal: { ...this.state.animal, commonName: e.target.value }
              })
            }
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Scientific Name"
            placeholder="Enter animal scientific name"
            value={this.state.animal.scientificName}
            onChange={e =>
              this.setState({
                animal: { ...this.state.animal, scientificName: e.target.value }
              })
            }
          />

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Gender</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={e =>
                this.setState({
                  animal: { ...this.state.animal, gender: e.target.value }
                })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </FormControl>
          </FormGroup>
          <Button onClick={this.resetForm}>Reset</Button>
          <Button type="submit">Add/Update animal</Button>
        </form>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Common name</th>
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
                <td>{animal.gender}</td>
                <td>{animal.adoptionInProgress === true ? "YES" : "NO"}</td>
                <td>
                  <Button onClick={() => this.selectForEdit(id)}>
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
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.home.animals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAnimal: animal => {
      return dispatch(home.addAnimal(animal));
    },
    updateAnimal: (id, animal) => {
      return dispatch(home.updateAnimal(id, animal));
    },
    deleteAnimal: id => {
      dispatch(home.deleteAnimal(id));
    },
    fetchAnimals: () => {
      dispatch(home.fetchAnimals());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
