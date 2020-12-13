import React from 'react';
import { Link } from '../../atoms/link/link';
import './headerLinks.scss';

export function HeaderLinks() {
    return (
        <div className="m-headerLinks">
            <div class='m-headerLinks__linkWrapper'>
                <Link>Gmail</Link>
            </div>
            <div class='m-headerLinks__linkWrapper'>
                <Link>Imagenes</Link>
            </div>
        </div>
    );
}
