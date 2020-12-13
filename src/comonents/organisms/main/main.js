import React from 'react';
import { Button } from '../../atoms/button/button';
import { GoogleLogo } from '../../atoms/googleLogo/googleLogo';
import { Link } from '../../atoms/link/link';
import './main.scss';


// I KNOW I COULD ATOM THIS COMPONENT TOO A BIT MORE
// ALSO, INPUT HAS NO ICONS BUT... LACK OF TIME. SORRY.

export function Main() {
    return (
        <div className="o-main">
            <div className="o-main__logo">
                <GoogleLogo />
            </div>
            <div className="o-main__input">
                <input type="text" />
            </div>
            <div className="o-main__actions">
                <Button classes={['-grey']}>Google Search</Button>
                <Button classes={['-grey']}>Viva er Beti</Button>
            </div>
            <div className="o-main__languages">
                <p>Ofrecido por Google en:</p>
                <div className="o-main__links">
                    <Link classes={['-blue']}>español</Link>
                    <Link classes={['-blue']}>catalan</Link>
                    <Link classes={['-blue']}>galego</Link>
                    <Link classes={['-blue']}>euskera</Link>
                </div>
            </div>
        </div>
    );
}
