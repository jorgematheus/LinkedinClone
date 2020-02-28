import styled from 'styled-components';

export const ContainerPassword = styled.div`
    position: relative;
    button {
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        border-radius: 2px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #0073b1;
        cursor: pointer;
        display: inline-block;
        font-size: 15px;
        font-weight: 600;
        font-family: inherit;
        height: 24px;
        line-height: 35px;
        overflow: hidden;
        outline-width: 2px;
        padding: 0 8px;
        position: relative;
        text-align: center;
        text-decoration: none;
        -webkit-transition-duration: 167ms;
        transition-duration: 167ms;
        -webkit-transition-property: background-color, color, -webkit-box-shadow;
        transition-property: background-color, color, -webkit-box-shadow;
        transition-property: background-color, box-shadow, color;
        transition-property: background-color, box-shadow, color,
            -webkit-box-shadow;
        -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        vertical-align: middle;
        z-index: 0;
        position: absolute;
        z-index: 1;
        top: 14px;
        right: 4px;
    }
`;

export const PasswordInput = styled.input.attrs(props => ({
    type: props.show ? 'text' : 'password',
}))``;
