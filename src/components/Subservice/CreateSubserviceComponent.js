import React, { Component } from "react"
import { Modal, Button, Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap"

export class CreateSubserviceComponent extends Component {

    // constructor(props) {
    //     super(props)
    // }
    handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:4000/api/AddSubService', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

            body: JSON.stringify({
                service_name: localStorage.getItem("service_name"),
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
                        Add Subservice
                     </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <FormLabel>Subservice Name</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice Name"
                                            name="subservicename"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Subservice Image</FormLabel>
                                        <Form.Control
                                            type="file"
                                            placeholder="Subservice Image"
                                            name="subserviceimg"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Subservice Price</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice Price"
                                            name="subserviceprice"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Subservice duration</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Subservice duration"
                                            name="subserviceduration"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Subservice short description</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Short description"
                                            name="subserviceshortdesc"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel>Subservice long description</FormLabel>
                                        <Form.Control
                                            type="text"
                                            placeholder="Long description"
                                            name="subservicelongdesc"
                                        />
                                    </FormGroup>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Add Subservice
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