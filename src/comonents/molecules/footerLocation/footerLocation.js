import React from 'react';
import { joinClasses } from '../../../utils/joingClasses';
import { FooterRow } from '../../atoms/footerRow/footerRow';
import { Link } from '../../atoms/link/link';
import './footerLocation.scss';

export function FooterLocation({ classes }) {
    const classesList = joinClasses([
        classes,
        'm-footerLocation',
    ]);

    return (
        <div className="m-footerLocation">
            <div className={classesList}>
                <FooterRow classes={['m-footerLocation__Links']}>
                    <Link classes={['-grey']}>España</Link>
                </FooterRow>
            </div>
        </div>
    );
}
