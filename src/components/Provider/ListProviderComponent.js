import React, { Component } from 'react';
import { CreateProviderComponent } from "./CreateProviderComponent"
import { UpdateProviderComponent } from "./UpdateProviderComponent"
import { ButtonToolbar } from 'react-bootstrap';

class ListProviderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            providers: [],
            count:[],
            addModalShow: false,
            editModalShow: false
        }
    }

    componentDidMount() {
        const apiUrl = 'http://localhost:4000/api/ViewProvider';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ providers: data.data }
                )
                console.log(data)
            });
            fetch(apiUrl)
            .then(response => response.json())
            .then(count => {
                this.setState({ count: count.count }
                )
               
            });
    }
   
   
    deleteProvider(providerId) {
        console.log("Delete", providerId)
        const { providers } = this.state;

        const id = providerId;
        console.log(id);
        const apiUrl = 'http://localhost:4000/api/Deleteprovider/' + id;
        const formData = new FormData();
        formData.append('providerId', providerId);

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
                        providers: providers.filter(provider => provider.provider_id !== providerId)
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    render() {

        const { pid, pfirstname, plastname, pgender, pmobileno, pemail, paddress, parea, pimage } = this.state;

        var addModalClose = () => this.setState({ addModalShow: false });
        var editModalClose = () => this.setState({ editModalShow: false });

        return (
            <div className="container">
                <h2 className="text-center" style={{ marginTop: "15px" }}>List of Provider ({this.state.count})</h2>
                <div className="row">
                    <ButtonToolbar>
                        <button className="btn btn-primary" onClick={() => this.setState({ addModalShow: true })}> Add Provider</button>
                        <CreateProviderComponent show={this.state.addModalShow} onHide={addModalClose} />
                    </ButtonToolbar>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>Provider Name</th>
                                <th>Provider Gender</th>
                                <th>Provider Email</th>
                                <th>Provider MobileNo</th>
                                <th>Provider Address</th>
                                <th>Provider Area</th>
                                <th colSpan={2}>Actions</th>
                             
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.providers.map(
                                    provider =>
                                        <tr key={provider.provider_id}>
                                            <td>{provider.firstname}  {provider.lastname} </td>
                                            <td>{provider.gender}</td>
                                            <td>{provider.email}</td>
                                            <td>{provider.mobile_no}</td>
                                            <td>{provider.address}</td>
                                            <td>{provider.area}</td>
                                            <td>
                                                <ButtonToolbar>
                                                    <button className="btn btn-primary" onClick={() => this.setState({
                                                        editModalShow: true,
                                                        pid: provider.provider_id,
                                                        pfirstname: provider.firstname,
                                                        plastname: provider.lastname,
                                                        pgender: provider.gender,
                                                        pmobileno: provider.mobile_no,
                                                        pemail: provider.email,
                                                        paddress: provider.address,
                                                        parea: provider.area,
                                                        pimage: provider.image
                                                    })}>Update</button>
                                                    <UpdateProviderComponent
                                                        show={this.state.editModalShow}
                                                        onHide={editModalClose}
                                                        pid={pid}
                                                        pfirstname={pfirstname}
                                                        plastname={plastname}
                                                        pgender={pgender}
                                                        pmobileno={pmobileno}
                                                        pemail={pemail}
                                                        paddress={paddress}
                                                        parea={parea}
                                                        pimage={pimage}
                                                    />
                                                </ButtonToolbar>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteProvider(provider.provider_id) }}>Delete</button>
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

export default ListProviderComponent;