// import { MouseEvent } from "react";
import { useState } from "react";


interface Props {
    list: string[]
    header: string
}


function ListGroup({list, header}: Props) {

    // const msg = list.length === 0 ? <p>No Items Found</p> : null;
    const msg = list.length === 0 && <p>No Items Found</p>; // same as above

    //event handler
    // const handleClick = (event: MouseEvent, item: string) => {
    //     console.log(`${item} was clicked!\n event:`, event)
    // }

    // State Hook
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    return (
        <> {/* This tells react to use Fragment tag here */}
            <h1>{header}</h1>
            {msg}
            <ul className="list-group">
                {list.map(
                    (item, index) => (
                <li 
                    key={item} 
                    className={
                        selectedItemIndex === index 
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    //----- can use inline onclick
                    // onClick={(event) => console.log(`${item} was clicked!\n event:`, event)} 

                    //----- can use handler from outer code
                    // onClick={(event) => handleClick(event, item)}

                    //----- using state hook
                    onClick={() => setSelectedItemIndex(index)}
                > {/* Need to add key prop for react to be able to dynamically add and remove elems later*/}
                    {item}
                </li>
                    )
                )}
            </ul>
        </>
    );
}

export default ListGroup;
