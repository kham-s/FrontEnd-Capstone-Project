import { render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import { BrowserRouter as Router } from 'react-router-dom';

//test block
test("Date is initialized with current date", () => {
  // render the component on virtual dom
  render(<Router><BookingPage /></Router>);

  const chooseDateElement = screen.getByLabelText('Choose date');
  expect(chooseDateElement).toBeInTheDocument();
  const currentDate = new Date();
  expect(chooseDateElement).toHaveValue(currentDate.toISOString().slice(0,10));
});