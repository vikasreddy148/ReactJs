import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
test('should load contact us comopnent', () => { 
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
 })

 test('should load  button inside contact us comopnent', () => { 
    render(<Contact />);
   // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
 })

 test('should load input name in contact us comopnent', () => { 
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
 })

 test('should load  2 input  boxes on contact comopnent', () => { 
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes).toBeInTheDocument();
 })
