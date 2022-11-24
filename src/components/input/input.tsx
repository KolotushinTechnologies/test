// Import Engine Module
import React from 'react';

interface IInput {
    width?: string | null;
    height?: string;
    padding?: string;
    placeholder?: string;
    classNames?: string;
}

const Input = ({ width, height, padding, placeholder, classNames }: IInput) => {
  return (
    <input
        style={{
            width: `${width}px`,
            height: `${height}px`,
            padding: `${padding}px`
        }}
        placeholder={placeholder ? placeholder : ""}
        className={classNames ? classNames : "input"}
    />
  )
};

export default Input;