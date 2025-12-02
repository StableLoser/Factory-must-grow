import * as React from "react";

function Button({onClick, children, className}: {
    onClick: () => void,
    children?: React.ReactNode,
    className?: string
}) {

    return <button onClick={onClick} className={"button m-2 p-2" + className}> {children}</button>;
}

export default Button;