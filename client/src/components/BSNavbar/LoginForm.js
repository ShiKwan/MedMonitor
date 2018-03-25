// import React from 'react';
// import "./BSNavbar.css";
// import "./Container.css"
// import { Container, Row } from "./Container.js";

// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     Input


// } from 'reactstrap';

// export default class NavbarR extends React.Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false
//         };
//     }
//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <Container>
//                     <Form className="signin-form">
//                         <FormGroup row>
//                             <Label for="exampleEmail" sm={2} size="lg">Email</Label>
//                             <Col sm={10}>
//                                 <Input type="email" name="email" id="exampleEmail" placeholder="lg" bsSize="lg" />
//                             </Col>
//                         </FormGroup>
//                         <FormGroup row>
//                             <Label for="exampleEmail2" sm={2}>Email</Label>
//                             <Col sm={10}>
//                                 <Input type="email" name="email" id="exampleEmail2" placeholder="default" />
//                             </Col>
//                         </FormGroup>
//                         <Button>Submit</Button>
//                     </Form>
//                 </Container>
//             </div>
//         );
//     }
// }