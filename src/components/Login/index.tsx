import React from "react";
import { AvForm } from "availity-reactstrap-validation";
import { useNavigate } from "react-router-dom";
import {
    StyledButton,
    StyledLabel,
    StyledTextInput,
} from "@aureskonnect/react-ui";

import "./index.css";

export function Login(): JSX.Element {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    function handleEmailInputOnChangeEvent(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setEmail(e.target.value);
    }

    function handlePasswordInputOnChangeEvent(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setPassword(e.target.value);
    }

    function handleOnSubmitEvent() {
        fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())

            .then((data) => {
                if (data.error === false) {
                    localStorage.setItem("user", JSON.stringify(data.data));
                    navigate("/first-page");
                } else {
                    alert("user not found");
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <main className="container__clz">
                <header className="centered_grid__clz">
                    <h1>Login Page</h1>
                </header>
                <section className="centered_grid__clz">
                    <AvForm onSubmit={() => handleOnSubmitEvent()}>
                        <StyledLabel htmlFor="email">EMAIL</StyledLabel>
                        <StyledTextInput
                            id="email"
                            name="email"
                            placeholder="Insert your email"
                            type="email"
                            onChange={handleEmailInputOnChangeEvent}
                            validate={{
                                email: {
                                    value: true,
                                    errorMessage:
                                        "Please enter a valid username in the format name@example.com",
                                },
                                required: {
                                    value: true,
                                    errorMessage: "This field is required",
                                },
                            }}
                        />
                        <StyledLabel htmlFor="password">PASSWORD</StyledLabel>
                        <StyledTextInput
                            id="password"
                            name="password"
                            placeholder="Insert a valid password"
                            type="password"
                            validate={{
                                required: {
                                    value: true,
                                    errorMessage: "This field is required",
                                },
                            }}
                            onChange={handlePasswordInputOnChangeEvent}
                        />
                        <StyledButton
                            type="submit"
                            outline={true}
                            rounded={true}
                            block={true}
                            variant="secondary"
                        >
                            Login
                        </StyledButton>
                    </AvForm>
                </section>
                <footer className="centered_grid__clz">2022</footer>
            </main>
        </div>
    );
}
