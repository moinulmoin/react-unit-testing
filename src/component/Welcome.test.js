import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Welcome from './Welcome';

describe('Welcome Component', () => {
	test('renders "Welcome to React" text', () => {
		render(<Welcome />);

		const output = screen.getByText('Welcome to React', { exact: false });
		expect(output).toBeInTheDocument();
	});

	test('renders "React Component" text', () => {
		render(<Welcome />);

		const output = screen.getByText(/React Component/i);
		expect(output).toBeInTheDocument();
	});

	test('renders "successfully" text if button is clicked', () => {
		render(<Welcome />);

		const button = screen.getByRole('button');
		userEvent.click(button);

		const output = screen.getByText('successfully', { exact: false });
		expect(output).toBeInTheDocument();
	});

	test('doesnt render "React component" test if button is clicked', () => {
		render(<Welcome />);

		const button = screen.getByRole('button');
		userEvent.click(button);

		const output = screen.queryByText('React component', { exact: false });
		expect(output).toBeNull();
	});
});
