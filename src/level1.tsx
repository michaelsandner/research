import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Solution from "./solution";
import room from "./room.pdf";

function Level1() {
    const [page, setPage] = useState(1);
    return (
        <div>
            <h1>Level1</h1>
            <Document file={room}>
                <Page pageNumber={page} />
            </Document>
            <Solution />
        </div >
    )
}

export default Level1;