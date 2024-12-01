// Filename - components/Create.js

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    // Making usestate for setting and
    // fetching a value in jsx
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [title, settitle] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");

    // Using useNavigation for redirecting to pages
    let history = useNavigate();

    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault(); // Prevent reload

        const ids = uuid(); // Creating unique id
        let uni = ids.slice(0, 8); // Slicing unique id

        // Fetching a value from usestate and
        // pushing to javascript object
        let a_1 = name,
            b_1 = age,
            c_1 = title,
            d_1 = phone,
            e_1 = email,
            f_1 = address;

        if (
          a_1 === "" &&
          b_1 === "" &&
          c_1 === "" &&
          d_1 === "" &&
          e_1 === "" &&
          f_1 === ""
        ) {
            alert("All fields are empty. Please provide input.");
            return;
        }

        if (a_1 === "") {
          alert("Name is required");
          return;
        }
        if (b_1 === "") {
            alert("Age is required");
            return;
        }
        if (c_1 === "") {
            alert("Title is required");
            return;
        }
        if (d_1 === "") {
            alert("Phone is required");
            return;
        }
        if (e_1 === "") {
            alert("Email is required");
            return;
        }
        if (f_1 === "") {
            alert("Address is required");
            return;
        }
      
        array.push({ id: uni, Name: a_1, Age: b_1, Title: c_1, Phone: d_1, Email: e_1, Address: f_1 });

        // Redirecting to home page after creation done
        history("/");
    };

    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* Fetching a value from input textfirld 
                    in a setname using usestate*/}
                <Form.Group
                    className="mb-2"
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>

                {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
                <Form.Group
                    className="mb-2"
                    controlId="formBasicAge"
                >
                    <Form.Control
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                        required
                    />
                </Form.Group>

                <Form.Group
                    className="mb-2"
                    controlId="formBasicTitle"
                >
                    <Form.Control
                        onChange={(e) =>
                            settitle(e.target.value)
                        }
                        type="text"
                        placeholder="Job Title"
                        required
                    />
                </Form.Group>

                <Form.Group
                    className="mb-2"
                    controlId="formBasicPhone"
                >
                    <Form.Control
                        onChange={(e) =>
                            setphone(e.target.value)
                        }
                        type="number"
                        placeholder="Phone"
                        required
                    />
                </Form.Group>
                
                <Form.Group
                    className="mb-2"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        onChange={(e) =>
                            setemail(e.target.value)
                        }
                        type="text"
                        placeholder="Email"
                        required
                    />
                </Form.Group>

                <Form.Group
                    className="mb-2"
                    controlId="formBasicAddress"
                >
                    <Form.Control
                        onChange={(e) =>
                            setaddress(e.target.value)
                        }
                        type="text"
                        placeholder="Address"
                        required
                    />
                </Form.Group>

                {/* handing a onclick event in button for
                    firing a function */}
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>

                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create;