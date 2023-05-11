
function ListGroup() {
    let langs = [
        "C", "C++", "Python", "Go",
    ]
    // langs = []

    // if (langs.length === 0) 
    //     return <p>No Items Found</p>
    // const msg = langs.length === 0 ? <p>No Items Found</p> : null;
    const msg = langs.length === 0 && <p>No Items Found</p>; // same as above

    return (
        <> {/* This tells react to use Fragment tag here */}
            <h1>List</h1>
            {msg}
            <ul className="list-group">
                {langs.map(
                    (lang) => (
                        <li key={lang} className="list-group-item"> {/* Need to add key prop for react to be able to dynamically add and remove elems later*/}
                            {lang}
                        </li>
                    )
                )}
            </ul>
        </>
    );
}

export default ListGroup;
