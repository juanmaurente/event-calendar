import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

jest.mock('./Calendar.scss', () => ({}));

test('renders calendar component', () => {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	render(<Calendar />);

	// Assert that the calendar title is rendered
	const calendarTitle = screen.getByRole('heading');
	expect(calendarTitle).toBeInTheDocument();

	// Assert that the calendar header is rendered
	const calendarHeader = screen.getByText('Monday');
	expect(calendarHeader).toBeInTheDocument();

	// Assert that the calendar grid is rendered
	const calendarGrid = screen.getByTestId('calendar-grid');
	expect(calendarGrid).toBeInTheDocument();

	// Get the current month and year
	const currentMonthElement = screen.getByRole('heading');
	const [currentMonthText, currentYearText] =
		currentMonthElement.textContent.split(' ');

	// Trigger the previous month button click
	const prevButton = screen.getByText('<');
	fireEvent.click(prevButton);

	// Calculate the expected previous month and year
	const currentMonthIndex = monthNames.indexOf(currentMonthText);
	const expectedPrevMonth =
		currentMonthIndex === 0
			? 'December'
			: monthNames[currentMonthIndex - 1];
	const expectedPrevYear =
		currentMonthIndex === 0
			? parseInt(currentYearText) - 1
			: parseInt(currentYearText);

	// Check if the current month and year have been updated correctly
	const updatedMonthElement = screen.getByRole('heading');
	expect(updatedMonthElement.innerHTML.trim()).toEqual(
		`${expectedPrevMonth} ${expectedPrevYear}`,
	);
	// Trigger the next month button click
	const nextButton = screen.getByText('>');
	fireEvent.click(nextButton);

	// Calculate the expected next month and year
	const expectedNextMonth =
		updatedMonthIndex === 11
			? 'January'
			: monthNames[updatedMonthIndex + 1];
	const expectedNextYear =
		updatedMonthIndex === 11
			? parseInt(updatedYearText) + 1
			: parseInt(updatedYearText);

	// Check if the current month and year have been updated correctly
	expect(updatedMonthElement.innerHTML.trim()).toEqual(
		`${expectedNextMonth} ${expectedNextYear}`,
	);
});
