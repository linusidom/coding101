import {Modal, Button} from 'react-bootstrap'

export const ModalComponent = (props) => {
    return(
        <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>{props.body}</p>
        </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary" onClick={props.function}>{props.confirmText}</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

