import { CSSProperties } from "react";

interface Props {
    children: string;
    color?: string;
    x: number;
    y: number;
    hover: () => void;
}
function Badge({children, color, x, y, hover}: Props) {
    const styles: CSSProperties = {
        top: y,
        left: x,
    }
    return (
        <div className={`badge label text-bg-${color} position-absolute`} style={styles} onMouseOver={hover} >{children}</div>
    );
}

export default Badge;