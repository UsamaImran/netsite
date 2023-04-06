import * as React from "react";
import { Modal } from "react-bootstrap";

interface INativeOverlayProps {
  show: boolean;
  setShow: () => void;
  header: string;
}

export const NativeOverlay: React.FC<INativeOverlayProps> = (props) => {
  return (
    <>
      <Modal className="modal-overlay" show={props.show} backdrop="static">
        <Modal.Header closeButton={true} onHide={() => props.setShow()}>
          {props.header}
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
};
