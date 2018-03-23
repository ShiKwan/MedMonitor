import React from 'react';
import {Col} from 'reactstrap';


const Col = ({children}) => {
    return (
        <div>
            <Col>
                {children}
            </Col>
        </div>
    );
};

export default Col;