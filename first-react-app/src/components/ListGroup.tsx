// import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
    let langs = [
        "C", "C++", "Python", "Go",
    ]
    // langs = []

    // const msg = langs.length === 0 ? <p>No Items Found</p> : null;
    const msg = langs.length === 0 && <p>No Items Found</p>; // same as above

    //event handler
    // const handleClick = (event: MouseEvent, lang: string) => {
    //     console.log(`${lang} was clicked!\n event:`, event)
    // }

    // State Hook
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    return (
        <> {/* This tells react to use Fragment tag here */}
            <h1>List</h1>
            {msg}
            <ul className="list-group">
                {langs.map(
                    (lang, index) => (
                <li 
                    key={lang} 
                    className={
                        selectedItemIndex === index 
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    //----- can use inline onclick
                    // onClick={(event) => console.log(`${lang} was clicked!\n event:`, event)} 

                    //----- can use handler from outer code
                    // onClick={(event) => handleClick(event, lang)}

                    //----- using state hook
                    onClick={() => setSelectedItemIndex(index)}
                > {/* Need to add key prop for react to be able to dynamically add and remove elems later*/}
                    {lang}
                </li>
                    )
                )}
            </ul>
        </>
    );
}

export default ListGroup;
