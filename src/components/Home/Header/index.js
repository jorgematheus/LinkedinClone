import React from 'react';
import {
    HeaderComponent,
    ContainerItems,
    Icon,
    ListItems,
    SearchForm,
} from './styles';

export default function Header() {
    const itens = ['item 1', 'item 2', 'item 3'];
    return (
        <HeaderComponent>
            <ContainerItems>
                <Icon />
                <SearchForm>
                    <input placeholder="Pesquisar" type="text" />
                </SearchForm>
                <ListItems>
                    {itens.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ListItems>
            </ContainerItems>
        </HeaderComponent>
    );
}
