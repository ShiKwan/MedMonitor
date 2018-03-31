import React from "react";
import "./PatMedDue.css";

import { 
    Container,
    Card,
    Button,
    ButtonGroup,
    CardTitle,
    CardHeader,
    CardSubtitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';


const PatMedDue = (props) => {

    return (
        <Container fluid className="patSurvey">
                
            <Card className="medsDueCard" body fluid inverse style={{ backgroundColor: '#669999', borderColor: '#669999' }}>
                <CardHeader tag="h4"  className="medsDueHeader">WHEN YOUR NEXT MEDS ARE DUE</CardHeader>
                <Card className="surveyQuestions">
                    <CardText className="surveyQandA"><h4>Your Next Medication(s) Is Due</h4></CardText>
                    <br>
                    </br>
                    <Label className="text-center medsDueHours">
                        In: 2 HOURS
                    </Label>
                    <br>
                    </br>
                    <Label className="text-center medsDueTime">
                        At: 4:00 PM
                    </Label>
                    <br>
                    </br>

                    <div className="nextMedBtn">
                    <Button className="medReminder" color="secondary" size="lg"><h4>Remind Me!</h4></Button>
                    <Button className="medTook" color="secondary" size="lg"><h4>Took Meds</h4></Button>
                    </div>

                </Card>
            </Card>

        </Container>

    );
};

export default PatMedDue;
