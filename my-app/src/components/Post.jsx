import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import axios from "axios";
import OfflineModal from "./OfflineModal";
import { useAppContext } from "../context/AppContext";

export default function Post({ onLine }) {
  const [user, setUser] = useState({ name: "", city: "" });
  const [showModal, setShowModal] = useState(false);
  const { post } = useAppContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onLine) {
      setShowModal(false);
      post(user);
      // console.log(currUser);
    } else {
      setShowModal(true);
      console.log("you are in offline");
    }
  };
  return (
    <div>
      <OfflineModal show={showModal} handleShow={setShowModal}></OfflineModal>
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Form.Group className="mb-3 w-25 center " controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={user.name}
            type="text"
            placeholder="Name"
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, name: [e.target.value] };
              })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, city: [e.target.value] };
              })
            }
            value={user.city}
            type="text"
            placeholder="City"
          />
        </Form.Group>
        <Button className="mb-3 w-25" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
