import UpgradeButton from "./UpgradeButton.tsx";
import Counter from "./Counter.tsx";
import CollectButton from "./CollectButton.tsx";
import {useState} from "react";

const defaultSpeed = 10000;

function Incremancer({collect}: { collect: () => void }) {
    const [speed, setSpeed] = useState(defaultSpeed);

    function upgrade() {
        setSpeed(speed / 2);
    }

    return <div className={"incremancer"}>
        <Counter speed={speed} name={"Iron Ore"}/>
        <UpgradeButton name={"Faster"} upgradeCost={10} onClick={upgrade}/>
        <CollectButton onClick={collect}/>
    </div>

}

export default Incremancer;