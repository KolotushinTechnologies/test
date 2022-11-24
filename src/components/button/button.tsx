// Import Engine Modules
import React from 'react';
import { Link } from 'react-router-dom';

interface IButton {
    text: string;
    classNames: string;
    path: string;
}

const Button = ({ text, classNames, path }: IButton) => {
  return (
    <Link className={classNames} to={path}>
        {text}
    </Link>
  )
};

export default Button;