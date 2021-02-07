import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { levelSlice } from "./reducer";

function Solution() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [label, setLabel] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        if (value === "juz") {
            dispatch(levelSlice.actions.increase());
        }
        else {
            setError(true);
            setLabel("False");
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            if (value === "juz") {
                dispatch(levelSlice.actions.increase());
            }
            else {
                setError(true);
                setLabel("False");
            }
        }
    }

    return (
        <div>
            <TextField onKeyDown={handleKeyPress} error={error} label={label} variant="outlined" helperText="solution = 'juz'" value={value} onChange={handleChange} ></TextField>
            <Button onClick={handleClick}>Next</Button >
        </div>
    )
}

export default Solution;