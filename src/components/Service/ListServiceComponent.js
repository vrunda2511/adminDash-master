import React, { Component, useState } from 'react';
import { Link } from "react-router-dom"
import { CreateServiceComponent } from "./CreateServiceComponent"
import { UpdateServiceComponent } from "./UpdateServiceComponent"
import { ButtonToolbar } from 'react-bootstrap';

class ListServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: [],
            addModalShow: false,
            editModalShow:false
        }
    }

    componentDidMount() {
        const apiUrl = 'http://localhost:4000/api/getAllCategory';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({ services: data }));
    }

    
    deleteService(serviceId) {
        console.log("Delete", serviceId)
        const { services } = this.state;

        const id = serviceId;
        const apiUrl = 'http://localhost:4000/api/DeleteService/' + id;
        const formData = new FormData();
        formData.append('serviceId', serviceId);

        const options = {
            method: 'DELETE',
            body: formData
        }

        fetch(apiUrl, options)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result,
                        services: services.filter(service => service.service_id !== serviceId)
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {

        const {services,sid,sname,simage} = this.state;

        var addModalClose = () => this.setState({ addModalShow: false });
        var editModalClose = () => this.setState({ ModalShow: false });

        return (
            <div className="container">
                <h2 className="text-center" style={{ marginTop: "15px" }}>Service List</h2>
                <div className="row">
                    <ButtonToolbar>
                        <button className="btn btn-primary" onClick={() => this.setState({ addModalShow: true })}> Add Service</button>
                        <CreateServiceComponent show={this.state.addModalShow} onHide={addModalClose} />
                    </ButtonToolbar>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>Sr.No</th>
                                <th> Service Name</th>
                              
                                <th> Service Created Date</th>
                                <th> Service Modified Date</th>
                                <th > Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.services.map(
                                    service =>
                                        <tr key={service.service_id}>
                                            <td>{service.service_id}</td>
                                            <td> {service.service_name} </td>
                                            <td> {service.created_date}</td>
                                            <td>{service.modified_date}</td>
                                            <td>
                                                <button className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-danger"  onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteService(service.service_id) }}>Delete </button>
                                                {/* <button style={{ marginLeft: "10px" }} className="btn btn-info"> <Link to="ViewServiceComponent" params={{ service_name: service.service_name }}>View</Link> </button> */}
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListServiceComponent;