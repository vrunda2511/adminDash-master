import React, { Component } from "react"
import { Modal, Button, Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';

export class UpdateProviderComponent extends Component {
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
        const id = event.target.providerid.value;
            var formdata = new FormData();
            formdata.append("firstname",event.target.providerfirstname.value );
            formdata.append("lastname", event.target.providerlastname.value);
            formdata.append("mobile_no", event.target.providermobileno.value);
            formdata.append("email", event.target.provideremail.value);
            formdata.append("address", event.target.provideraddress.value);
            formdata.append("profilepicture", this.state.file);
            formdata.append("area", event.target.providerarea.value);
            formdata.append("gender", event.target.providergender.value);

            var requestOptions = {
            method: 'PUT',
            body: formdata,
            redirect: 'follow'
            };

            fetch("http://localhost:4000/api/UpdateProvider/"+id, requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)
                toast.success('Provider Updated Successfully ', {
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
                                            disabled
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
                                        <input
               
                                        type="file"
                                        onChange={this.onfileupload}
                                        
                                        />
                                    </FormGroup>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Update Provider
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