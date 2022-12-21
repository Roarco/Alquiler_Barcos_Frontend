import React from 'react';
import Form from '../components/Form';

const Boats = () => {
    var inputsProp = [
        {
            id: "brand",
            type: "text"
        },
        {
            id: "name",
            type: "text"
        },
        {
            id: "year",
            type: "number"
        },
        {
            id: "description",
            type: "text"
        }
    ];
     var classesProp = {
        label: "",
        input: "form-control-sm"
    }
    return (
        // <Form titleForm="CONO"/>
        <Form inputs={inputsProp} classes={classesProp} titleForm="Boats"/>
    );
}

export default Boats;
