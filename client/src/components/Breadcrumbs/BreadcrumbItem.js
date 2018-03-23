import React from 'react';
import { BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import './BreadcrumbItem.css';

const BreadcrumbItem = (props) => {
    {/*https://reactstrap.github.io/components/breadcrumbs/*/}
    return (
        <div>
            <BreadcrumbItem>
                <Link to={"/home"}>
                    Home
                </Link>
            </BreadcrumbItem>
        </div>
    );
};

export default BreadcrumbItem;