import React from "react";

import { AvForm } from "availity-reactstrap-validation";
import { StyledButtonWithIcon } from "@aureskonnect/react-ui";
import {
    StyledButton,
    StyledLabel,
    StyledTextInput,
} from "@aureskonnect/react-ui";

export function Profile(): JSX.Element {
    // eslint-disable-next-line
    const user: User = JSON.parse(localStorage.getItem("user")!);
    const [firstname, setFirstname] = React.useState(user.firstname);
    const [lastname, setlastname] = React.useState(user.lastname);
    const [email, setemail] = React.useState(user.email);

    function handleFirstNameInputOnChangeEvent(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setFirstname(e.target.value);
    }
    function handleLastNameInputOnChangeEvent(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        setlastname(e.target.value);
    }

    function handleOnSubmitEvent() {
        fetch(`${process.env.REACT_APP_API_URL}/updateUser`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
            }),
        })
            .then((response) => response.json())

            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <main className="container__clz">
                <header className="centered_grid__clz">
                    <h1>Personnel Information</h1>
                </header>
                <AvForm onSubmit={handleOnSubmitEvent}>
                    <StyledLabel htmlFor="first name">First name :</StyledLabel>
                    <StyledTextInput
                        id="first name"
                        name="first name"
                        placeholder={user.firstname}
                        type="text"
                        onChange={handleFirstNameInputOnChangeEvent}
                    />
                    <StyledLabel htmlFor="first name">Last name:</StyledLabel>
                    <StyledTextInput
                        id="first name"
                        name="first name"
                        placeholder={user.lastname}
                        type="text"
                        onChange={handleLastNameInputOnChangeEvent}
                    />
                    <StyledLabel htmlFor="first name">Email :</StyledLabel>
                    <StyledLabel>{user.email}</StyledLabel>
                    <StyledButtonWithIcon
                        icon="EditIcon"
                        iconPosition="right"
                        rounded
                        variant="info"
                    >
                        SAVE
                    </StyledButtonWithIcon>
                </AvForm>
            </main>
        </div>
    );
}
