import "./App.css";
import MoneyShower from "./Components/MoneyShower.tsx";
import {useState} from "react";
import Miner from "./Components/Miner.tsx";
import Melter from "./Components/Melter.tsx";


function App() {
    const [money, setMoney] = useState<number>(1000);
    const [ironOre, setIronOre] = useState<number>(0);
    const [ironPlate, setIronPlate] = useState<number>(0);

    function getMoney(income: number) {
        setMoney(money + income);
    }

    function hasMoney(cost: number) {
        if (money >= cost) {
            setMoney(money - cost);
            return true;
        } else {
            return false;
        }
    }

    function getIronOre(income: number) {
        setIronOre(ironOre + income);
    }

    function hasIronOre(cost: number) {
        if (ironOre >= cost) {
            setIronOre(ironOre - cost);
            return true;
        } else {
            return false;
        }
    }

    function getIronPlate(income: number) {
        setIronPlate(ironPlate + income);
    }

    return (
        <div className={"container"}>
            <MoneyShower className={"col money-shower text-center"} money={money} ironOre={ironOre}
                         ironPlate={ironPlate}/>
            <Miner onMine={hasMoney} onSell={getMoney} onCollect={getIronOre}/>
            <Melter onMelt={hasIronOre} onSell={getMoney} onCollect={getIronPlate}/>
        </div>
    );
}

export default App;
