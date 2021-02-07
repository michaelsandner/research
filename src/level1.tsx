import React from "react";
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import Solution from "./solution";

function Level1() {
    return (
        <div>
            <label>Level1</label>
            <Solution />
            <Document file="room.pdf"></Document>
        </div >
    )
}

export default Level1;