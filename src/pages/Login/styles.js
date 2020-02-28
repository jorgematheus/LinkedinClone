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
        margin-bottom: 32px;
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;

    input {
        padding: 10px;
        margin: 5px;
        width: 400px;
        height: 53px;
    }
`;
