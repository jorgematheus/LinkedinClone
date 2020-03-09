import styled from 'styled-components';

export const Main = styled.div`
    height: auto;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    img {
        width: 95px;
        height: auto;
        background: #ccc;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;

    input:not([type='checkbox']) {
        padding: 10px;
        margin: 5px;
        width: 400px;
        height: 53px;
        border-radius: 3px;
        border: 1px solid;
        transition: ease-in-out, 0.35s ease-in-out;
    }

    input:focus {
        border-color: #0073b1;
        box-shadow: 0 0 0 1px #0073b1;
    }

    .container-remember {
        display: flex;
        align-items: center;

        input {
            width: 15px;
        }
    }

    .button-login {
        padding: 17px;
        margin: 25px;
        width: 400px;
        height: 53px;
        border-radius: 3px;
        background: #0073b1;
        color: #fff;
        border: none;
        font-weight: bold;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        color: #0073b1;
        font-weight: 600;
        text-decoration: none;
        font-size: 14px;
        margin-bottom: 15px;
    }

    a:not(:nth-child(1)) {
        padding: 7px;
    }

    a:hover:not(:nth-child(1), .button-login) {
        background: rgba(152, 216, 244, 0.25);
    }
`;
