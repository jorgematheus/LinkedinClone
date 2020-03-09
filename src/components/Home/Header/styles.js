import styled from 'styled-components';

export const HeaderComponent = styled.header`
    height: 52px;
    background-color: #283e4a;
`;

export const ContainerItems = styled.div`
    display: flex;
    align-items: center;
    padding: 50px;
    height: 52px;
    padding: 0 415px;
`;

// trocar o icone, apenas exemplo
export const Icon = styled.img.attrs(props => ({
    src:
        'https://cdn5.vectorstock.com/i/1000x1000/99/09/linkedin-social-media-icon-design-template-vector-22339909.jpg',
}))`
    height: 40px;
`;

export const SearchForm = styled.form`
    input {
        height: 35px;
        border-radius: 2px;
        border: none;
        width: 290px;
        background-color: #e1e9ee;
        padding: 0 20px;
    }
`;

export const ListItems = styled.ul`
    display: flex;
    list-style: none;
    margin-left: 165px;
`;
