import React from 'react';

import {
    Container
} from 'reactstrap';

export default class PatientInfo extends React.Component {

        render () {
        return (

            <Container>
                <p>
                    Hospital No : {this.props.patientNumber}
                    <br />
                    Patient Name : {this.props.lastName}, {this.props.firstName}
                </p>
            </Container>

        )
    }
}           