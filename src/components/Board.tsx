import '/src/App.css';
import {ReactNode} from 'react';

interface Props {
    children: ReactNode;
}

function Board({ children }: Props): ReactNode {
    return (
        <div className="board">{children}</div>
    );
}

export default Board;