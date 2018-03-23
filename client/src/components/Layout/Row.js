import React from 'react';
import { Row } from 'reactstrap';


const Row = ({children}) => {
    return (
        <div>
            <Row>
                {children}
            </Row>
        </div>
    );
};

export default Row;