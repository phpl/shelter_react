import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
import "./Home.css";
import { home } from "../actions";
import AnimalTable from "./AnimalTable.jsx";

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

  onChangeForm(e) {
    const { name, value } = e.target;
    this.setState({
      animal: { ...this.state.animal, [name]: value }
    });
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
    const animalToUpdate = this.props.animals.find(animal => (animal.id === id));
    let newState = {
      ...this.state,
      animal: animalToUpdate,
      animalUpdateId: id
    };
    this.setState(newState);
  };

  invertAnimalAdoptionState = id => {
    const animalToUpdate = this.props.animals.find(animal => (animal.id === id));
    animalToUpdate.adoptionInProgress = !animalToUpdate.adoptionInProgress;
    let newState = {
      ...this.state,
      animal: animalToUpdate,
      animalUpdateId: id
    };
    this.setState(newState, () =>
      this.props
        .updateAnimal(this.state.animalUpdateId, this.state.animal)
        .then(this.resetForm())
    );
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
        <AnimalTable
          animal={this.state.animal}
          onChange={this.onChangeForm.bind(this)}
          submitAnimal={this.submitAnimal.bind(this)}
          resetForm={this.resetForm.bind(this)}
          animals={this.props.animals}
          selectForEdit={this.selectForEdit.bind(this)}
          deleteAnimal={this.props.deleteAnimal.bind(this)}
          invertAnimalAdoptionState={this.invertAnimalAdoptionState.bind(this)}
        />
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
    updateAnimal: (animalId, animal) => {
      return dispatch(home.updateAnimal(animalId, animal));
    },
    deleteAnimal: animalId => {
      dispatch(home.deleteAnimal(animalId));
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
