import React from "react";

export function ListTodos(): JSX.Element {
    const [todos, setTodos] = React.useState([]);
    const [id, setId] = React.useState(0);
    const [description, setDescription] = React.useState("");
    function handleOnDeleteEvent(id: number) {
        fetch(`${process.env.REACT_APP_API_URL}/delete`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: description,
            }),
        })
            .then((response) => response.json())

            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }
    function handleGetEvent() {
        fetch(`${process.env.REACT_APP_API_URL}/todos`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id, description: description }),
        })
            .then((response) => response.json())

            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }
    return <div>index</div>;
}
