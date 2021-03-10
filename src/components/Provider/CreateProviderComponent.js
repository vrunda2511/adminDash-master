import React, { Component } from "react"
import { Modal, Button, Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';

export class CreateProviderComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            file:""
          }
          this.handleSubmit=this.handleSubmit.bind(this);
        }

        onfileupload=(e)=>{
            this.state.file=e.target.files[0];
            console.log(this.state.file)
          
          }
    handleSubmit(event) {
        event.preventDefault();
            var formdata = new FormData();
            formdata.append("firstname", event.target.providerfirstname.value);
            formdata.append("lastname", event.target.providerlastname.value);
            formdata.append("gender", event.target.providergender.value);
            formdata.append("mobile_no", event.target.providermobileno.value);
            formdata.append("email", event.target.provideremail.value);
            formdata.append("address", event.target.provideraddress.value);
            formdata.append("profilepicture",this.state.file);
            formdata.append("area", event.target.providerarea.value);

            var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
            };

            fetch("http://localhost:4000/api/AddProvider", requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)
                toast.success('Provider Added Successfully ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            .catch(error => console.log('error', error));
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
                                         <input
               
                                            type="file"
                                            onChange={this.onfileupload}
                                            />
                                    </FormGroup>

                                    <Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Add Provider
                                        </Button>
                                        <ToastContainer
                                        position="top-center"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        />
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