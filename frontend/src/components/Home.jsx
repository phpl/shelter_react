import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
import "./Home.css";
import { home } from "../actions";
import AnimalForm from "./AnimalForm.jsx";
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
    console.log(e.target.value);
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
    let animalToUpdate = this.props.animals[id];
    let newState = {
      ...this.state,
      animal: animalToUpdate,
      animalUpdateId: id
    };
    this.setState(newState);
  };

  invertAnimalAdoptionState = id => {
    let animalToUpdate = this.props.animals[id];
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
        <AnimalForm
          animal={this.state.animal}
          onChange={this.onChangeForm.bind(this)}
          submitAnimal={this.submitAnimal.bind(this)}
          resetForm={this.resetForm.bind(this)}
        />
        <AnimalTable
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
