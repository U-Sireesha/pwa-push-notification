import React from "react";
import { Button, Modal } from "react-bootstrap";
export default function OfflineModal({ show, handleShow }) {
  return (
    <Modal
      show={show}
      onHide={() => handleShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          You are in Offline
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <p>Please go online to submit forms</p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
