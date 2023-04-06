import * as React from "react";
import { Modal } from "react-bootstrap";

interface IModalOverlayProps {
  show: boolean;
  setShow: () => void;
  header: string;
}

export const ModalOverlay: React.FC<IModalOverlayProps> = (props) => {
  return (
    <>
      <Modal
        className="modal-card-overlay"
        onHide={props.setShow}
        show={props.show}
        centered
      >
        <Modal.Header closeButton={true} onHide={props.setShow}>
          {props.header}
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
