import Button from "react-bootstrap/Button";

const DeleteButton = ({delFunction, delText}) => {
    return (
        <Button onClick={() => delFunction()}
        variant="danger"
        >
            { delText }
        </Button>
    )
};

export default DeleteButton;