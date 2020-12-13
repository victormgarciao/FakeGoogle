import React from 'react';
import { joinClasses } from '../../../utils/joingClasses';
import './button.scss';

export function Button({ classes, children }) {
    const classesList = joinClasses([
        classes,
        'a-button',
    ]);
    return <a className={classesList}>{children}</a>
}
