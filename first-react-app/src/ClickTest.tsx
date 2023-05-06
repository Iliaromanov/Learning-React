import React, { useState } from "react";

function ClickTest() {
    const [myName, setMyName] = useState("Ilia");
    const clickHandler = () => {
        setMyName("Jeff");
    }
    return (
        <div
            id="target"
            onClick={clickHandler}
            style={{backgroundColor: 'red', color: 'white'}}
        >
            my name {myName}
        </div>
    )
}

export default ClickTest;
