import React from "react";
import { useNavigate } from "react-router-dom";
import { AvForm } from "availity-reactstrap-validation";
import {
    StyledButton,
    StyledLabel,
    StyledTextInput,
} from "@aureskonnect/react-ui";

import { validateEmail } from "../../helper";

import "./index.css";

export function Register(): JSX.Element {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState<string>("");
    const [firstName, setFirstname] = React.useState<string>("");
    const [lastName, setLastname] = React.useState<string>("");

    const [password, setPassword] = React.useState<string>("");
    const [isPasswordConfirmed, setIsPasswordConfirmed] =
        React.useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = React.useState<boolean>(false);

    function handleEmailInputOnChangeEvent(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setEmail(e.target.value);
        setIsEmailValid(validateEmail(email));
    }

    function handlePasswordInputOnChangeEvent(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setPassword(e.target.value);
    }

    function handleRegisterButtonOnClickEvent() {
        fetch(`${process.env.REACT_APP_API_URL}/user`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())

            .then((data) => {
                if (data.error === true) {
                    alert("email already used");
                } else {
                    if (isPasswordConfirmed === true) {
                        setIsPasswordConfirmed(false);

                        alert("you are successfully registered");
                        navigate("/login");
                    } else {
                        alert("password mismatch");
                    }
                }
            })
            .catch((err) => console.log(err));
    }

    function handleNameInputOnChangeEvent(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setFirstname(e.target.value);
    }

    function handleLastnameInputOnChangeEvent(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setLastname(e.target.value);
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <main className="container__clz">
                <header className="centered_grid__clz">
                    <h1>Sign up</h1>
                </header>
                <section className="centered_grid__clz">
                    <AvForm onSubmit={handleRegisterButtonOnClickEvent}>
                        <StyledLabel htmlFor="email">NAME</StyledLabel>
                        <StyledTextInput
                            id="name"
                            name="name"
                            placeholder="Insert your name"
                            type="name"
                            onChange={handleNameInputOnChangeEvent}
                            validate={{
                                required: {
                                    value: true,
                                    errorMessage: "This field is required",
                                },
                            }}
                        />
                        <StyledLabel htmlFor="email">Last NAME</StyledLabel>
                        <StyledTextInput
                            id="lastname"
                            name="lastname"
                            placeholder="Insert your second name"
                            type="lastname"
                            onChange={handleLastnameInputOnChangeEvent}
                            validate={{
                                required: {
                                    value: true,
                                    errorMessage: "This field is required",
                                },
                            }}
                        />
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
                        <StyledLabel htmlFor="password">
                            Your Password
                        </StyledLabel>
                        <StyledTextInput
                            id="password"
                            name="password"
                            minLength="8"
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
                        <StyledLabel htmlFor="password">
                            Confirm Your Password
                        </StyledLabel>
                        <StyledTextInput
                            id="confirmPassword"
                            name="confirmPassword"
                            // minLength="8"
                            placeholder="Insert a valid password"
                            type="password"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                if (e.target.value === password) {
                                    setIsPasswordConfirmed(true);
                                } else {
                                    setIsPasswordConfirmed(false);
                                }
                            }}
                            validate={{
                                required: {
                                    value: true,
                                    errorMessage: "This field is required",
                                },
                            }}
                        />
                        <StyledButton
                            outline={true}
                            rounded={true}
                            block={true}
                            variant="secondary"
                            type="submit"
                            disabled={
                                firstName === "" ||
                                lastName === "" ||
                                email === "" ||
                                password === "" ||
                                !isPasswordConfirmed ||
                                !isEmailValid
                            }
                        >
                            Register
                        </StyledButton>
                    </AvForm>
                </section>
                <footer className="centered_grid__clz">2022</footer>
            </main>
        </div>
    );
}
