import CollectButton from "./CollectButton.tsx";
import UpgradeButton from "./UpgradeButton.tsx";
import {useEffect, useState} from "react";

const defaultSpeed = 1000; //Miliseconds
const defaultAmount = 1;
const ironOreForIronPlate = 25; // 25 Iron Ore for 1 Iron Plate
const defaultIronPlateValue = 100;
const material = "Iron Plate";

type props = {
    onMelt: (value: number) => boolean;
    onSell: (value: number) => void;
    onCollect: (value: number) => void;
}


function Melter({onMelt, onSell, onCollect}: props) {
    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(defaultSpeed);
    const [amount, setAmount] = useState(defaultAmount);
    const [value, setValue] = useState(defaultIronPlateValue);

    function upgradeSpeed() {
        setSpeed(prevSpeed => prevSpeed / 2);
    }

    function upgradeAmount() {
        setAmount(prevAmount => prevAmount + 1);
    }

    function upgradeIronPlateValue() {
        setValue((prevValue) => prevValue + 2);
    }

    function sell() {
        onSell(count * value);
        setCount(0);
    }

    function collect() {
        onCollect(count);
        setCount(0);
    }

    function melt(amount: number) {
        setCount(prevCount => prevCount + amount);
    }

    useEffect(() => {
        if (onMelt(ironOreForIronPlate)) {
            const timer = setTimeout(() => {
                melt(amount);
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
                    onClick={upgradeIronPlateValue}
                />

            </div>
        </div>
    );
}

export default Melter;