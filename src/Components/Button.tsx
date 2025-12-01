import * as React from "react";

function Button({onClick, children}: { onClick: () => void, children?: React.ReactNode }) {

    return <button onClick={onClick} className={"button"}> {children}</button>;
}

export default Button;