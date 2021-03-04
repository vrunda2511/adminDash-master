import React,{Component} from "react"
import {Modal,Button,Row,Col,Form, FormGroup,FormLabel} from "react-bootstrap"

export class CreateServiceComponent extends Component{
    constructor(props){
        super(props)
    }
    handleSubmit(event){
        event.preventDefault();
        // alert(event.target.servicename.value)
        // alert(event.target.serviceimg.value)

        fetch('http://localhost:4000/api/AddService',{
            method:'POST',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
              }, 
        
        body:JSON.stringify({
            service_name:event.target.servicename.value,
            service_image:event.target.serviceimg.value
        })
        
       })
       .then(res=>res.json())
       .then((res)=>
       {
           alert(res.msg)
       },
       (error)=>{
           alert('Failed')
       }
       )

    }
    render(){
        return(
            
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Service
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <div className="container">
               <Row>
                 <Col sm={6}>
                     <Form onSubmit={this.handleSubmit}>
                         <FormGroup controlId="ServiceName">
                            <FormLabel>Service Name</FormLabel>
                            <Form.Control 
                                type="text"
                                placeholder="Service Name"
                                name="servicename"
                            />
                         </FormGroup>
                         <FormGroup controlId="ServiceImage">
                            <FormLabel>Service Image</FormLabel>
                            <Form.Control 
                                type="file"
                                placeholder="Service Image"
                                name="serviceimg"
                            />
                         </FormGroup>
                            <Form.Group>
                                <Button variant="primary" type="submit" >
                                    Add Service
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