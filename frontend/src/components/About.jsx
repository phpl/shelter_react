import React, { Component } from 'react'
import { Jumbotron, Grid } from 'react-bootstrap';

const columnStyleThree = {
  float: 'left',
  width: '33.33%',
  padding: '5px'
};

const columnStyleTwo = {
  float: 'left',
  width: '50%',
  padding: '5px'
};

const rowStyle = {
  content: "",
  clear: 'both',
  display: 'table'
};

const mainJumbotronStyle = {
  backgroundColor: "rgba(238,238,238,0.7)",
  color: "inherit"
}


export default class About extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron style={mainJumbotronStyle}>
          <Jumbotron>
            <h2><b><center>Why do we do our work?</center></b></h2>
            <h3><center>We have lots of lovely, but sad animals that need a new home. We can't look on their gloomy faces.</center></h3>
          
            <div style={rowStyle}>
              <div style={columnStyleThree}>
                <img src={require('./../photos/sadCat.jpg')} alt="" style={{'borderRadius':'25px', 'width':'100%'}}/>
              </div>

              <div style={columnStyleThree}>
                <img src={require('./../photos/sadDog2.jpg')} alt="" style={{'borderRadius':'25px', 'width':'100%'}}/>
              </div>

              <div style={columnStyleThree}>
              <img src={require('./../photos/sadDog.jpg')} alt="" style={{'borderRadius':'25px', 'width':'100%'}}/>
              </div>
            </div>
          </Jumbotron>
          <Jumbotron>
            <h2><b><center>What are we doing?</center></b></h2>
            <h3><center>We find homes for unwanted cats and dogs across the UK and our tailor-made service means we help each pet find the right person for them.</center></h3>
            
            <div style={rowStyle}>
              <div style={columnStyleTwo}>
                <img src={require('./../photos/rescueMe.jpg')} alt="" style={{'borderRadius':'60%', 'width':'90%'}}/>
              </div>
              <div style={columnStyleTwo}>
                <img src={require('./../photos/dogHome.jpg')} alt="" style={{'borderRadius':'60%', 'width':'90%'}}/>
              </div>
            </div>
          </Jumbotron>
          <Jumbotron>
            <h2><b><center>What we want to achieve by doing our work?</center></b></h2>
            <h3><center>Pets are at the heart of everything we do. Each year, thousands of cats and dogs find the happy homes they deserve. We prepare future pet owners to take responsibility and look after their pets for life. We gain the smile on pet's faces as well as hapiness their new parents.</center></h3>
          
            <div style={rowStyle}>
              <div style={columnStyleThree}>
                <img src={require('./../photos/happyCat.jpg')} alt="" style={{'borderRadius':'25px', 'width':'100%'}}/>
              </div>

              <div style={columnStyleThree}>
                <img src={require('./../photos/happydog.jpg')} alt="" style={{'borderRadius':'25px', 'width':'100%'}}/>
              </div>

              <div style={columnStyleThree}>
              <img src={require('./../photos/smilingDog.jpg')} alt="" style={{'borderRadius':'25px', 'width':'100%'}}/>
              </div>
            </div>
          </Jumbotron>
        </Jumbotron>
      </Grid>
    )
  }
}