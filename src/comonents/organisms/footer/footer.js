import React from 'react';
import { FooterActions } from '../../molecules/footerActions/footerActions';
import { FooterLocation } from '../../molecules/footerLocation/footerLocation';
import './footer.scss';

export function Footer() {
    return (
        <div className="o-footer">
            <div className="o-footer__section">
                <FooterLocation classes={['o-footer__location']} />
            </div>
            <div className="o-footer__section">
                <FooterActions classes={['o-footer__actions']} />
            </div>
        </div>
    );
}
