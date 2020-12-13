import React from 'react';
import { HeaderActions } from '../headerActions/headerActions';
import './header.scss';

export function Header() {
    return (
        <div className="o-header">
            <HeaderActions />
        </div>
    );
}
