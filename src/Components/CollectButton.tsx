import Button from "./Button.tsx";


function CollectButton({onClick}: { onClick: () => void }) {

    return <Button onClick={onClick}>Collect</Button>;
}

export default CollectButton;