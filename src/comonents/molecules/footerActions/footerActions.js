import React from 'react';
import { joinClasses } from '../../../utils/joingClasses';
import { FooterRow } from '../../atoms/footerRow/footerRow';
import { Link } from '../../atoms/link/link';
import './footerActions.scss';

export function FooterActions({ classes }) {
    const classesList = joinClasses([
        classes,
        'm-footerActions',
    ]);

    return (
        <div className={classesList}>
            <div className="m-footerActions__contact">
                <FooterRow classes={['m-footerActions__contactLinks']}>
                    <div className="m-footerActions__link">
                        <Link classes={['-grey']}>Advertising</Link>
                    </div>
                    <div className="m-footerActions__link">
                        <Link classes={['-grey']}>Business</Link>
                    </div>
                    <div className="m-footerActions__link">
                        <Link classes={['-grey']}>About</Link>
                    </div>
                    <div className="m-footerActions__link">
                        <Link classes={['-grey']}>How Search works</Link>
                    </div>
                </FooterRow>
            </div>
            <div className="m-footerActions__legal">
                <FooterRow>
                    <div className="m-footerActions__link">
                        <Link classes={['-grey']}>Privacy</Link>
                    </div>
                    <div className="m-footerActions__link">
                        <Link classes={['-grey']}>Terms</Link>
                    </div>
                    <div className="m-footerActions__link">
                        <Link classes={['-grey']}>Settings</Link>
                    </div>
                </FooterRow>
            </div>
        </div>
    );
}
