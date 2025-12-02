import UpgradeButton from "./UpgradeButton.tsx";

import CollectButton from "./CollectButton.tsx";
import {useState} from "react";

const defaultSpeed = 10000;

function Incremancer({name, onCollect, className}: {
    name: string,
    onCollect: (p1: number) => void,
    className?: string
}) {
    const [speed, setSpeed] = useState(defaultSpeed);
    const [count, setCount] = useState(0);


    function upgrade() {
        setSpeed(speed / 2);
    }

    function increment() {
        setCount(count + 1);
    }

    function collect() {
        onCollect(count);
        setCount(0);
    }

    setTimeout(increment, speed);

    return <div className={"container " + className}>
        <div className={"row"}>
            <output className={"m-2 p-2 col col-md-auto"}> You have {count} {name}</output>
            <CollectButton className={" col col-md-auto"} onClick={collect}/>
        </div>

        <div className={"row  "}>
            <UpgradeButton name={"Faster"} upgradeCost={10} className={"col col-md-auto "} onClick={upgrade}/>
            <UpgradeButton name={"Stronger"} upgradeCost={10} className={"col col-md-auto "} onClick={upgrade}/>
            <UpgradeButton name={"Better"} upgradeCost={10} className={"col col-md-auto "} onClick={upgrade}/>
        </div>


    </div>

}

export default Incremancer;