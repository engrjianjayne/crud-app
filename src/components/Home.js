// Filename - components/Home.js

import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    let history = useNavigate();

    // Function to set the ID, Name, and Age in local storage
    function setID(id, name, age, title, phone, email, address) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Title", title);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("Email", email);
        localStorage.setItem("Address", address);
    }

    // Function to delete an entry
    function deleted(id) {
        let index = array
            .map(function (e) {
                return e.id;
            })
            .indexOf(id);

        // Deleting the entry with the specified index
        array.splice(index, 1);

        // Redirecting to the same page to re-render
        history("/");
    }

    return (
        <div style={{ margin: "2rem" }}>
            <h1 className="text-center mb-4">User Management</h1>
            <Table striped bordered hover responsive className="shadow-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Title</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Title}</td>
                                <td>{item.Phone}</td>
                                <td>{item.Email}</td>
                                <td>{item.Address}</td>
                                <td>
                                    <Link to={`/edit`}>
                                        <Button
                                            onClick={() => setID(item.id, item.Name, item.Age, item.Title, item.Phone, item.Email, item.Address)}
                                            variant="info"
                                            className="me-2"
                                        >
                                            Update
                                        </Button>
                                    </Link>
                                    <span></span>
                                    <Button
                                        onClick={() => deleted(item.id)}
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="d-grid gap-2 mt-4">
                <Link to="/create">
                    <Button variant="success" size="lg">
                        Create New User
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;