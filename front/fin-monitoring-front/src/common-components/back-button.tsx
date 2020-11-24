import React from 'react';
import {Button} from "./customButton/button";
import {useHistory} from 'react-router-dom';

export const BackButton = () => {
    let history = useHistory();

    return <Button buttonClass={'general'} onClick={history.goBack}>Back</Button>
}
