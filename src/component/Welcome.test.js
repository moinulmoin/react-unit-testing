import {render, screen} from '@testing-library/react'
import Welcome from './Welcome'

test('render text in Welcome Comp', ()=> {
    render(<Welcome />)
    const text = screen.getByText(/Welcome to React/i)
    expect(text).toBeInTheDocument()
})