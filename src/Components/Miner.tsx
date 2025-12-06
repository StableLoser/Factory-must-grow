import {useEffect, useState} from "react";
import CollectButton from "./CollectButton.tsx";
import UpgradeButton from "./UpgradeButton.tsx";

const defaultSpeed = 1000; //Miliseconds
const defaultAmount = 1;
const ironOreCost = 1;
const defaultIronOreValue = 2;
const material = "Iron Ore";

type props = {
    onMine: (value: number) => boolean;
    onSell: (value: number) => void;
    onCollect: (value: number) => void;
};

function Miner({onMine, onSell, onCollect}: props) {
    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(defaultSpeed);
    const [amount, setAmount] = useState(defaultAmount);
    const [value, setValue] = useState(defaultIronOreValue);

    function upgradeSpeed() {
        setSpeed(prevSpeed => prevSpeed / 2);
    }

    function upgradeAmount() {
        setAmount(prevAmount => prevAmount + 1);
    }

    function upgradeIronOreValue() {
        setValue((prevValue) => prevValue + 2);
    }

    function mine(amount: number) {
        setCount(prevCount => prevCount + amount);
    }

    function sell() {
        onSell(count * value);
        setCount(0);
    }

    function collect() {
        onCollect(count);
        setCount(0);
    }

    useEffect(() => {
        if (onMine(ironOreCost)) {
            const timer = setTimeout(() => {
                mine(amount);
            }, speed);

            return () => clearTimeout(timer);
        }
    }, [speed, count]);

    return (
        <div className={"container "}>
            <div className={"row"}>
                <output className={"m-2 p-2 col col-md-auto"}>
                    {" "}
                    You have {count} {material}
                </output>
                <CollectButton className={" col col-md-auto"} onClick={sell}/>
                <CollectButton className={" col col-md-auto"} onClick={collect}/>
            </div>

            <div className={"row  "}>
                <UpgradeButton
                    name={"Speed"}
                    upgradeCost={10}
                    className={"col col-md-auto "}
                    onClick={upgradeSpeed}
                />
                <UpgradeButton
                    name={"Amount"}
                    upgradeCost={10}
                    className={"col col-md-auto "}
                    onClick={upgradeAmount}
                />
                <UpgradeButton
                    name={"Value"}
                    upgradeCost={10}
                    className={"col col-md-auto "}
                    onClick={upgradeIronOreValue}
                />

            </div>
        </div>
    );
}

export default Miner;