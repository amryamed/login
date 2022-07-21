import React, { Fragment, useState } from "react";
import { AvForm } from "availity-reactstrap-validation";
import {
    StyledButton,
    StyledLabel,
    StyledTextInput,
} from "@aureskonnect/react-ui";

export function InputTodo(): JSX.Element {
    const [description, setDescription] = useState("");

    function handleInputOnChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        setDescription(e.target.value);
    }
    function handleOnSubmitEvent() {
        fetch(`${process.env.REACT_APP_API_URL}/add`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ description }),
        })
            .then((response) => response.json())

            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <main className="container__clz">
                    <header className="centered_grid__clz">
                        <h1>Todo List</h1>
                    </header>
                    <AvForm>
                        <StyledLabel></StyledLabel>
                        <StyledTextInput
                            id="todo"
                            name="Todo"
                            placeholder="Add a Todo"
                            onChange={handleInputOnChangeEvent}
                        />

                        <StyledButton
                            type="submit"
                            outline={true}
                            rounded={true}
                            block={true}
                            variant="secondary"
                            onClick={handleOnSubmitEvent}
                        >
                            ADD
                        </StyledButton>
                    </AvForm>
                </main>
            </div>
        </div>
    );
}
