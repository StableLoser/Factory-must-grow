import Button from "./Button.tsx";

type props = {
    name: string;
    upgradeCost: number;
    onClick: () => void;

}

function UpgradeButton({name, upgradeCost, onClick}: props) {

    return <Button onClick={onClick}> {name} Upgrade Cost: {upgradeCost}</Button>;
}

export default UpgradeButton;