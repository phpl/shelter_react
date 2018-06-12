import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  HelpBlock
} from "react-bootstrap";
import "./AnimalForm.css";

export default class AnimalForm extends Component {
  render() {
    return (
      <form
        onSubmit={e => {
          this.props.submitAnimal(e);
          this.props.handleCloseModal();
        }}
      >
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Name"
          name="name"
          placeholder="Enter animal name"
          value={this.props.animal.name}
          onChange={this.props.onChange}
        />
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Common Name"
          name="commonName"
          placeholder="Enter animal common name"
          value={this.props.animal.commonName}
          onChange={this.props.onChange}
        />
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Scientific Name"
          name="scientificName"
          placeholder="Enter animal scientific name"
          value={this.props.animal.scientificName}
          onChange={this.props.onChange}
        />
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Gender</ControlLabel>
          <FormControl
            componentClass="select"
            name="gender"
            placeholder="select"
            onChange={this.props.onChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </FormControl>
        </FormGroup>
        <Button
          bsStyle="primary"
          onClick={() => {
            this.props.resetForm();
            this.props.handleCloseModal();
          }}
        >
          Cancel
        </Button>
        <Button bsStyle="danger" onClick={this.props.resetForm}>
          Reset
        </Button>
        <Button bsStyle="success" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
