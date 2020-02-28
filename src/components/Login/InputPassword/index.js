import React, { useState } from 'react';

import { ContainerPassword, PasswordInput } from './styles';

export default function InputPassword() {
    const [passwordShow, setPasswordShow] = useState(false);
    return (
        <ContainerPassword>
            <PasswordInput show={passwordShow} placeholder="Password" />
            <button
                type="button"
                onClick={() => {
                    setPasswordShow(!passwordShow);
                }}
            >
                {passwordShow ? 'Hide' : 'Show'}
            </button>
        </ContainerPassword>
    );
}
