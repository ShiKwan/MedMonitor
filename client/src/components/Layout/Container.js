import React from 'react';
import { Container } from 'reactstrap';


const Container = ({ children }) => {
    return (
        <div>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default Container;