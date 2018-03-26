import React from 'react';
import "./PhysInfo.css";

import { 
    Card, 
    Button, 
    CardTitle, 
    CardText 
} from 'reactstrap';

const PhysInfo = (props) => {

    return (
        <div>
            <Card className="physCard" body outline color="secondary">
                <CardTitle>Physician Information</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            </Card>
        </div>
    );
};

export default PhysInfo;