import Button from "./Button.tsx";

type props = {
    name: string;
    upgradeCost: number;
    className?: string;
    onClick: () => void;


}

function UpgradeButton({name, upgradeCost, onClick, className}: props) {

    return <Button onClick={onClick} className={className}> {name} Upgrade Cost: {upgradeCost}</Button>;
}

export default UpgradeButton;