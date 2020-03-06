import React from 'react';
import { FooterComponent, Logo } from './styles';

export default function Footer() {
    const items = [
        {
            name: <Logo />,
            url: '#',
        },
        {
            name: 'User Agreement',
            url: '#',
        },
        {
            name: 'Privacy Policy',
            url: '#',
        },
        {
            name: 'Community Guidelines',
            url: '#',
        },
        {
            name: 'Cookie Policy',
            url: '#',
        },
        {
            name: 'Copyright Policy',
            url: '#',
        },
        {
            name: 'Send Feedback',
            url: '#',
        },
    ];
    return (
        <FooterComponent>
            <ul>
                {items.map(item => (
                    <li key={item.name}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </FooterComponent>
    );
}
