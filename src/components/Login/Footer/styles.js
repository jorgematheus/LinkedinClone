import styled from 'styled-components';
import logoLinkedin from '../../../assets/images/linkedin-footer.png';

export const FooterComponent = styled.footer`
    width: 100%;
    height: 78px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    ul {
        list-style: none;
        display: flex;

        li {
            display: flex;
            align-items: center;
            padding: 12px;
            font-size: 12px;
        }

        li:hover:not(:first-child) {
            background-color: rgba(207, 207, 207, 0.25);
        }

        a {
            text-decoration: none;
            color: rgba(0, 0, 0, 0.9);
        }
    }
`;

export const Logo = styled.img.attrs(props => ({
    src: logoLinkedin,
}))`
    width: 60px;
`;
