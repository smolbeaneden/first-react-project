import { useState } from 'react';

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem} : Props) {

    const [selectedIndex, setSelectedIndex] = useState(-1); //Hook
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No Items Found</p>}
            <ul className="list-group">
                {items.map((item: string, index) => (
                <li key={item}
                    onClick={() => {
                        setSelectedIndex(index)
                        onSelectItem(item);
                    }}
                    className={selectedIndex === index ? "list-group-item active" :"list-group-item"}
                >{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;