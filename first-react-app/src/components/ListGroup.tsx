
function ListGroup() {
    let langs = [
        "C", "C++", "Python", "Go",
    ]

    return (
        <> {/* This tells react to use Fragment tag here */}
            <h1>List</h1>
            <ul className="list-group">
                {langs.map(
                    lang => <li className="list-group-item">{lang}</li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;
