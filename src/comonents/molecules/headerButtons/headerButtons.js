import React from 'react';
import { Button } from '../../atoms/button/button';
import './headerButtons.scss';

export function HeaderButtons() {
    return (
        <div className="m-headerButtons">
            <div class='m-headerButtons__buttonWrapper'>
                <Button classes={['-boxes']}></Button>
            </div>
            <div class='m-headerButtons__buttonWrapper'>
                <Button classes={['-blue']}>Iniciar sesion</Button>
            </div>
        </div>
    );
}
