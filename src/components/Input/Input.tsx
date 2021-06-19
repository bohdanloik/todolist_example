import React from 'react';

type InputPropsType = {
    placeholder: string
}

export const Input = (props: InputPropsType) => {
    return <input  placeholder={props.placeholder}/>
}