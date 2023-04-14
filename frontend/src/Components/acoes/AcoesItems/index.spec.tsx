import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { AcoesItems } from '.'

describe('<AcoesItems/>', () => {
    describe('Quando redenizar meu documento', () => {
        test('Rendenize o componente na Tela', () => {

            render(<MemoryRouter>
                <AcoesItems />
            </MemoryRouter>)

            const menu = screen.getByRole('menu')
            expect(menu).toBeInTheDocument();
        })
        test('Rendenize os 3 filhos Botoes de Links existente dentro do component', () => {

            const quantidadeEsperada = 3;
            render(<MemoryRouter>
                <AcoesItems />
            </MemoryRouter>)

            const menu = screen.getByRole('menu')
            const quantidadeDeFilhos = menu?.children?.length;
            expect(quantidadeDeFilhos).toBe(quantidadeEsperada)
        })
    })
})