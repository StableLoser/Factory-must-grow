import Button from "./Button.tsx";


function CollectButton({onClick, className}: { onClick: () => void, className?: string }) {

    return <Button className={className} onClick={onClick}>Collect</Button>;
}

export default CollectButton;