// import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("Should render Header Component with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>

)
    const loginButton = screen.getByRole("button",{name:"login"});
    expect(loginButton).toBeInTheDocument();

})