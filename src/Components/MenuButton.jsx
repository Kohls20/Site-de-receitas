import Button from "../img/Button.svg";

function MenuButton({ onClick }) {
    return (
        <button onClick={onClick}>
            <img src={Button} alt="Menu" className="w-10" />
        </button>
    );
}
export default MenuButton;
