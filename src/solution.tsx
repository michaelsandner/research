import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { levelSlice } from "./reducer";

function Solution() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        if (value === "juz") {
            dispatch(levelSlice.actions.increase());
        }
    }

    return (
        <div>
            <TextField value={value} onChange={handleChange} ></TextField>
            <Button onClick={handleClick}>Next</Button >
        </div>
    )
}

export default Solution;