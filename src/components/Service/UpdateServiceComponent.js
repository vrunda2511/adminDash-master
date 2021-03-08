import React, { Component } from "react"
import { Modal, Button, Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap"

export class UpdateServiceComponent extends Component {
  // constructor(props) {
  //   super(props)
  // }
  handleSubmit(event) {
    event.preventDefault();
    const id = event.target.serviceid.value;
    fetch('http://localhost:4000/api/UpdateService/' + id, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },

      body: JSON.stringify({

        service_name: event.target.servicename.value,
        service_image: event.target.serviceimg.value
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
            Update Service
              </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="ServiceId">
                    <FormLabel>Service Id</FormLabel>
                    <Form.Control
                      type="text"
                      placeholder="Service Id"
                      name="serviceid"
                      disabled
                      defaultValue={this.props.sid}
                    />
                  </FormGroup>
                  <FormGroup controlId="ServiceName">
                    <FormLabel>Service Name</FormLabel>
                    <Form.Control
                      type="text"
                      placeholder="Service Name"
                      name="servicename"
                      defaultValue={this.props.sname}
                    />
                  </FormGroup>
                  <FormGroup controlId="ServiceImage">
                    <FormLabel>Service Image</FormLabel>
                    <Form.Control
                      type="text"
                      placeholder="Service Image"
                      name="serviceimg"
                      defaultValue={this.props.simage}
                    />
                  </FormGroup>
                  <Form.Group>
                    <Button variant="primary" type="submit" >
                      Update Service
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={this.props.onHide}>Update Service</Button> */}
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}