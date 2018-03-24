import React, { Component } from "react";
import API from "../../utils/API";
import medicationAPI from "../../utils/medicationAPI";
import { Link } from "react-router-dom";
import {} from "reactstrap";
import Carousel from "../../components/Carousel";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Container, Navbar} from 'reactstrap';
class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    FadeButton : "Fade In/Out",
    modalLabel : "Modal",
    drugName : "",
    drugType : "",
    dosage : ""
  };

  componentDidMount() {
    //this.loadBooks();
  }

  handleNewDrug  = event => {
      event.preventDefault();
      if(this.state.drugName && this.state.drugType && this.state.dosage){
        medicationAPI.newDrug({
          name : this.state.drugName,
          type : this.state.drugType,
          dose : this.state.dosage
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(event.target.value);
  };

  render() {
    return (
      <Container>
        Add new med: 
        <Form>
            <FormGroup>
                <Label >Drug name: </Label>
                <Input type="text" name="drugName" placeholder="drug name" onChange={this.handleInputChange} value={this.state.drugName}  />
            </FormGroup>
            <FormGroup>
                <Label> Drug Type: </Label>
                <Input type="text" name="drugType" placeholder="drug type" onChange={this.handleInputChange}  value={this.state.drugType} />
            </FormGroup>
            <FormGroup>
                <Label>Dosage: </Label>
                <Input type="text" name="dosage" placeholder="dosage" onChange={this.handleInputChange} value={this.state.dosage} />
            </FormGroup>
            <Button onClick={this.handleNewDrug}>Submit</Button>
        </Form>


        Example of navbar: 
        <Navbar />  
        Example of Carousel: 
        <Carousel />
      </Container>
    );
  }
}

export default Books;
