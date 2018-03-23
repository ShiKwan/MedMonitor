import React from 'react';
import { Breadcrumb } from 'reactstrap';
import './Breadcrumb.css';

const Breadcrumb = ({ children }) => {
    {/*https://reactstrap.github.io/components/breadcrumbs/*/}
    return (
        <div>
            <Breadcrumb>
                {children}
            </Breadcrumb>
        </div>
    )

}

export default Breadcrumb;