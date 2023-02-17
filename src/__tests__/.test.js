import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

describe("App", () => {
  it("should convert text to lowercase when the lowercase radio button is selected", () => {
    render(<App />);
    const textarea = screen.getByLabelText('Text to be converted:');
    const submitButton = screen.getByText('Submit');
    fireEvent.change(textarea, { target: { value: 'EXAMPLE TEXT' } });
    fireEvent.click(screen.getByLabelText('Convert text to lowercase'));
    fireEvent.click(submitButton);
    expect(screen.getByLabelText('Converted text:')).toHaveTextContent('example text');
  });

  it('should convert text to uppercase when the "Convert text to uppercase" radio button is selected', () => {
    render(<App />);
    const textarea = screen.getByLabelText('Text to be converted:');
    const submitButton = screen.getByText('Submit');
    fireEvent.change(textarea, { target: { value: 'example text' } });
    fireEvent.click(screen.getByLabelText('Convert text to uppercase'));
    fireEvent.click(submitButton);
    expect(screen.getByLabelText('Converted text:')).toHaveTextContent('EXAMPLE TEXT');
  });
});