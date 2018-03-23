import React from 'react';
import {Card} from 'reactstrap';


const Card = ({children}) => {
    return (
        <div>
            <Card>
                {children}
            </Card>
        </div>
    );
};

export default Card;