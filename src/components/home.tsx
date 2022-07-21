import { StyledButton } from "@aureskonnect/react-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Home(): JSX.Element {
    const navigate = useNavigate();
    function handleFormOnSubmitEvent() {
        navigate("/login");
    }
    return (
        <div>
            <StyledButton
                type="submit"
                outline={true}
                rounded={true}
                block={true}
                variant="secondary"
                onClick={handleFormOnSubmitEvent}
            >
                Login
            </StyledButton>
        </div>
    );
}
