type props = {
    className: string;
    upgradeCost: number;
    name: string;
    disabled: boolean;

}

function UpgradeButton(props: props) {

    return <button className={props.className} disabled={props.disabled}>{props.name} Upgrade
        cost: {props.upgradeCost}</button>;
}

export default UpgradeButton;