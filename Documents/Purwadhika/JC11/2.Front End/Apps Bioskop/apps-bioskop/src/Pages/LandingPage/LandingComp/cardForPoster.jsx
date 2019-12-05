import React from 'react';
import './cardForPoster.css';
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';

const Example = (props) => {
    return (
        <div className="card-itself">
            <Card className="card">
                <CardImg src={props.image} alt="poster" />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;