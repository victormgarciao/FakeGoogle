import React from 'react';
import { joinClasses } from '../../../utils/joingClasses';
import './footerRow.scss';

export function FooterRow({ children, classes }) {
    const classesList = joinClasses([
        classes,
        'a-footerRow',
    ]);
    return <div className={classesList}>{children}</div>;
}
