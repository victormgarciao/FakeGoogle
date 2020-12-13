import React from 'react';
import { HeaderButtons } from '../../molecules/headerButtons/headerButtons';
import { HeaderLinks } from '../../molecules/headerLinks/headerLinks';
import './headerActions.scss';

export function HeaderActions() {
    return (
        <div className="o-headerActions">
            <div className="o-headerActions__links">
                <HeaderLinks />
            </div>
            <HeaderButtons />
        </div>
    );
}
