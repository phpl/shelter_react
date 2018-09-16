import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
 
const columnStyleTwo = {
  float: 'left',
  width: '50%',
  padding: '5px'
};

const rowStyle = {
  content: "",
  clear: 'both',
  display: 'table',
  width: '80%'
};

const mainJumbotronStyle = {
  backgroundColor: "rgba(238,238,238,0.5)",
  color: "inherit",
}

export default class Contact extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron style={mainJumbotronStyle}>
        <Jumbotron>

        <div style={rowStyle}>

          <div style={columnStyleTwo}>
            <img src={require('./../photos/contactUs.png')} alt="" style={{'borderRadius':'10px', 'width':'80%'}}/>
          </div>

          <div style={columnStyleTwo}>
            <h2><b>Contact us</b></h2>
            <br/>
            <h3><b>Animal Shelter</b></h3>

            <h4><b>Address:</b> Reymonta 19, 30-059 Cracow</h4>
            <h4><b>Telephone:</b> 111 222 333</h4>
            <h4><b>Email:</b> animalshelter@gmail.com</h4>
          </div>
        </div>
        </Jumbotron>
        </Jumbotron>
      </Grid>
    );
  }
}

 
