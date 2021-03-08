import React, { Component } from "react"
import { Modal, Button, Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap"

export class CreateProviderComponent extends Component {
    // constructor(props) {
    //   super(props)
    // }
    handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:4000/api/AddProvider', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

            body: JSON.stringify({
                firstname: event.target.providerfirstname.value,
                lastname: event.target.providerlastname.value,
                gender: event.target.providergender.value,
                mobile_no: event.target.providermobileno.value,
                email: event.target.provideremail.value,
                address: event.target.provideraddress.value,
                area: event.target.providerarea.value,
                image: event.target.providerimage.value
            })

        })
            .then(res => res.json())
            .then((res) => {
                alert(res.msg)
            },
                (error) => {
                    alert('Failed')
                }
            )

    }
    render() {
        return (

            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Provider
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="FirstName">
                                        <FormLabel>Provider FirstName</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider FirstName"
                                            name="providerfirstname"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="LastName">
                                        <FormLabel>Provider LastName</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider LastName"
                                            name="providerlastname"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderGender">
                                        <FormLabel>Provider Gender</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Gender"
                                            name="providergender"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderEmail">
                                        <FormLabel>Provider Email</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Email"
                                            name="provideremail"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderMobileNo">
                                        <FormLabel>Provider MobileNo</FormLabel>
                                        <Form.Control
                                            type="number"
                                            placeholder="Provider MobileNo"
                                            name="providermobileno"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderAddress">
                                        <FormLabel>Provider Address</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Address"
                                            name="provideraddress"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderArea">
                                        <FormLabel>Provider Area</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Area"
                                            name="providerarea"
                                        />
                                    </FormGroup>

                                    <FormGroup controlId="ProviderImage">
                                        <FormLabel>Provider Image</FormLabel>
                                        <Form.Control
                                            type="file"
                                            placeholder="Provider Image"
                                            name="providerimage"
                                        />
                                    </FormGroup>

                                    <Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Add Provider
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}