import React from 'react';
import { joinClasses } from '../../../utils/joingClasses';
import './link.scss';

export function Link({ classes, children }) {
    const classesList = joinClasses([
        'a-link',
        classes,
    ]);
    return <a className={classesList}>{children}</a>
}
