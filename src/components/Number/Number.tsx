import './Number.css';
import React from 'react';

interface  Props{
    number:number
}

const Number: React.FC<Props> = ({number}) => {
    return (
        <div className="number">
            <h2>{number}</h2>
        </div>
    );
};

export default Number;