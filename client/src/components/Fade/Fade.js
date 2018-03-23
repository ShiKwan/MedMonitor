import React from 'react';
import { Button, Fade } from 'reactstrap';

class FadeR extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }
    
    render() {
        return (
            
            <div>  
                {this.state.fadeIn}
                <Button color="primary" onClick={this.toggle} name="FadeButton">Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    {this.props.children}
                </Fade>
            </div>
        );
    }
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
    
};

export default FadeR;