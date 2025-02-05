import {CSSProperties} from "react";

interface Props {
    children: string;
    color?: string;
    onClick: () => void;
}
function Button({children, onClick, color}: Props) {
    const styles: CSSProperties = {
        fontSize: '1.5em',
        boxShadow: 'rgba(10, 12, 14, 0.24) 1px 1px 3px',

    }
    return (
        <button className={`btn btn-${color}`} style={styles} onClick={onClick}>{children}</button>
    );
}

export default Button;