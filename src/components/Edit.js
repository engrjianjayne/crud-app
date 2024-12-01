// Filename - Edit.js
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
    // Here usestate has been used in order
    // to set and get values from the jsx
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [title, settitle] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [id, setid] = useState("");

    // Used for navigation with logic in javascript
    let history = useNavigate();

    // Getting an index of an entry with an id
    let index = array
        .map(function (e) {
            return e.id;
        })
        .indexOf(id);

    // Function for handling the edit and
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        // Preventing from reload
        e.preventDefault();
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
        let a = array[index];

        // Putting the value from the input
        // textfield and replacing it from
        // existing for updation
        a.Name = name;
        a.Age = age;
        a.Title = title;
        a.Phone = phone;
        a.Email = email;
        a.Address = address;
      
        // Redirecting to main page
        history("/");
    };

    // Useeffect take care that page will
    // be rendered only once
    useEffect(() => {
        setname(localStorage.getItem("Name"));
        setage(localStorage.getItem("Age"));
        settitle(localStorage.getItem("Title"));
        setphone(localStorage.getItem("Phone"));
        setemail(localStorage.getItem("Email"));
        setaddress(localStorage.getItem("Address"));
        setid(localStorage.getItem("id"));
    }, []);

    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* setting a name from the 
                    input textfiled */}
                <Form.Group
                    className="mb-2"
                    controlId="formBasicName"
                >
                    <Form.Control
                        value={name}
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>

                {/* setting a age from the input textfiled */}
                <Form.Group
                    className="mb-2"
                    controlId="formBasicAge"
                >
                    <Form.Control
                        value={age}
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                    />
                </Form.Group>

                <Form.Group
                    className="mb-2"
                    controlId="formBasicTitle"
                >
                    <Form.Control
                        value={title}
                        onChange={(e) =>
                            settitle(e.target.value)
                        }
                        type="text"
                        placeholder="Title"
                    />
                </Form.Group>

                <Form.Group
                    className="mb-2"
                    controlId="formBasicPhone"
                >
                    <Form.Control
                        value={phone}
                        onChange={(e) =>
                            setphone(e.target.value)
                        }
                        type="text"
                        placeholder="Phone No."
                    />
                </Form.Group>

                <Form.Group
                    className="mb-2"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        value={email}
                        onChange={(e) =>
                            setemail(e.target.value)
                        }
                        type="text"
                        placeholder="Email"
                    />
                </Form.Group>

                <Form.Group
                    className="mb-2"
                    controlId="formBasicAddress"
                >
                    <Form.Control
                        value={address}
                        onChange={(e) =>
                            setaddress(e.target.value)
                        }
                        type="text"
                        placeholder="Address"
                    />
                </Form.Group>

                {/* Hadinling an onclick event 
                    running an edit logic */}
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>

                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Edit;