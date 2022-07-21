import React from "react";
import Logo from "@assets/LogoStore.jpg";
import { useNavigate } from "react-router-dom";
import { AvForm } from "availity-reactstrap-validation";

import "./index.css";
import { StyledButtonWithIcon } from "@aureskonnect/react-ui";

export function NavBar(): JSX.Element {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const user: User = JSON.parse(localStorage.getItem("user")!);

    function handleFormOnSubmitEvent() {
        navigate("/login");
        localStorage.clear();
    }

    function handleOnSubmitEvent() {
        navigate("/profile");
    }

    return (
        <nav>
            <div className="grid_container__clz">
                <img
                    src={Logo}
                    alt="classic-utility-jacket"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <h1 className="text__clz">
                    Welcome {user.firstname} to fashion store{" "}
                </h1>

                <div className="d-flex justify-content-end">
                    <AvForm onSubmit={handleFormOnSubmitEvent}>
                        <StyledButtonWithIcon
                            type="submit"
                            outline={true}
                            rounded={true}
                            block={true}
                            variant="secondary"
                            icon="SignInAltIcon"
                            iconPosition="right"
                        >
                            Logout
                        </StyledButtonWithIcon>
                    </AvForm>
                    <AvForm onSubmit={handleOnSubmitEvent}>
                        <StyledButtonWithIcon
                            type="submit"
                            outline={true}
                            rounded={true}
                            block={true}
                            variant="secondary"
                            icon="SignInAltIcon"
                            iconPosition="right"
                            onClick={handleOnSubmitEvent}
                        >
                            Profile
                        </StyledButtonWithIcon>
                    </AvForm>
                </div>
            </div>
        </nav>
    );
}
