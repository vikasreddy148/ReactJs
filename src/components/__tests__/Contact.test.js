import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
describe("Contact Us Page Test Case",()=>{
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

 it('should load input name in contact us comopnent', () => { 
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
 })

 it('should load  2 input  boxes on contact comopnent', () => { 
    render(<Contact />);
    const inputBoxes = screen.getByRole("button");

    //Assertion
    expect(inputBoxes).toBeInTheDocument();
 })
})

