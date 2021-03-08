import React, { Component } from "react"
import { Modal, Button, Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap"

export class UpdateSubserviceComponent extends Component {
    // constructor(props) {
    //   super(props)
    // }
    handleSubmit(event) {
        event.preventDefault();
        const id = event.target.subserviceid.value;
        fetch('http://localhost:4000/api/UpdateSubService/' + id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

            body: JSON.stringify({
                sub_servicename: event.target.subservicename.value,
                image: event.target.subserviceimg.value,
                price: event.target.subserviceprice.value,
                time_duration: event.target.subserviceduration.value,
                short_description: event.target.subserviceshortdesc.value,
                long_description: event.target.subservicelongdesc.value
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
                        Update Subservice
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="SubserviceId">
                                        <FormLabel>Subservice Id</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice Id"
                                            name="subserviceid"
                                            disabled
                                            defaultValue={this.props.subid}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="SubserviceName">
                                        <FormLabel>Subservice Name</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice Name"
                                            name="subservicename"
                                            defaultValue={this.props.subname}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="SubserviceImage">
                                        <FormLabel>Subservice Image</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice Image"
                                            name="subserviceimg"
                                            defaultValue={this.props.subimage}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="SubservicePrice">
                                        <FormLabel>Subservice Price</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice Price"
                                            name="subserviceprice"
                                            defaultValue={this.props.subprice}
                                        />

                                    </FormGroup>
                                    <FormGroup controlId="SubserviceDuation">
                                        <FormLabel>Subservice duration</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice duration"
                                            name="subserviceduration"
                                            defaultValue={this.props.subduration}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="SubserviceShortDesc">
                                        <FormLabel>Subservice Short description</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice short description"
                                            name="subserviceshortdesc"
                                            defaultValue={this.props.subshortdesc}
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="SubserviceLongDesc">
                                        <FormLabel>Subservice Long description</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice long description"
                                            name="subservicelongdesc"
                                            defaultValue={this.props.sublongdesc}
                                        />
                                    </FormGroup>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Service
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