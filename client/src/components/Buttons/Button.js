import React from 'react';
import { Button } from 'reactstrap';

{/*https://reactstrap.github.io/components/buttons/*/}
const ButtonR = (props) => {
    return(
        <div>
            <Button color={props.color}>
                {props.name}
            </Button>
        </div>
    );
};

export default ButtonR;