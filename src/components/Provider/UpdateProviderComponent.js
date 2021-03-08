import React, { Component } from "react"
import { Modal, Button, Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap"

export class UpdateProviderComponent extends Component {
    // constructor(props) {
    //   super(props)
    // }
    handleSubmit(event) {
        event.preventDefault();
        const id = event.target.providerid.value;
        fetch('http://localhost:4000/api/UpdateProvider/' + id, {
            method: 'PUT',
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
                        Update Provider
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="ProviderId">
                                        <FormLabel>Provider Id</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Id"
                                            name="providerid"
                                            defaultValue={this.props.pid}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderFirstName">
                                        <FormLabel>Provider First Name</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider First Name"
                                            name="providerfirstname"
                                            defaultValue={this.props.pfirstname}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderLastName">
                                        <FormLabel>Provider Last Name</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Last Name"
                                            name="providerlastname"
                                            defaultValue={this.props.plastname}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderGender">
                                        <FormLabel>Provider Gender</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Gender"
                                            name="providergender"
                                            defaultValue={this.props.pgender}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderEmail">
                                        <FormLabel>Provider Last Name</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Email"
                                            name="provideremail"
                                            defaultValue={this.props.pemail}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderMobile">
                                        <FormLabel>Provider MobileNo</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Mobile No"
                                            name="providermobileno"
                                            defaultValue={this.props.pmobileno}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderAddress">
                                        <FormLabel>Provider Address</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Address"
                                            name="provideraddress"
                                            defaultValue={this.props.paddress}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderArea">
                                        <FormLabel>Provider Area</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Area"
                                            name="providerarea"
                                            defaultValue={this.props.parea}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="ProviderImage">
                                        <FormLabel>Provider Image</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Provider Image"
                                            name="providerimage"
                                            defaultValue={this.props.pimage}
                                        />
                                    </FormGroup>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Update Provider
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