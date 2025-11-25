import {useState} from "react";
import IronPlate from "./IronPlate.tsx";

function Counter({upgradeLevel}: { upgradeLevel: number }) {


    const [count, setCount] = useState(0);
    const speed = upgradeLevel * 1000;

    function increment() {
        setCount(count + 1);
    }

    setTimeout(increment, speed);

    return <div className={"position-absolute top-0 start-50 translate-middle-x m-2 p-2"}>
        <output>You have {count} </output>
        <IronPlate/> ({1000 / speed}/s) </div>;
}

export default Counter;