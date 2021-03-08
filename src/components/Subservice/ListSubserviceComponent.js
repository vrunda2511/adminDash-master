import React, { Component } from 'react';
class SubserviceComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subservices: []
        }

    }

    componentDidMount() {
        this.refreshlist()
    }
refreshlist(){
    const apiUrl = 'http://localhost:4000/api/getAllSubCategory';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({ subservices: data }));
}

componentDidUpdate(){
    this.refreshlist()
}
    deleteSubService(subserviceId) {
        console.log("Delete", subserviceId)
        const { subservices } = this.state;

        const id = subserviceId;
        const apiUrl = 'http://localhost:4000/api/DeleteSubService/' + id;
        const formData = new FormData();
        formData.append('subserviceId', subserviceId);

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
                        subservices: subservices.filter(subservice => subservice.subservice_id !== subserviceId)
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }


    render() {

        //var addModalClose = () => this.setState({ addModalShow: false });
        return (
            <div className="container">
                <h2 className="text-center" style={{ marginTop: "15px" }}>Subservice List</h2>
                <div className="row">
                    <button className="btn btn-primary"> Add Subservice</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead style={{ textAlign: "center" }}>
                            <tr>
                                <th>Sr.No</th>
                                <th> Service Name</th>
                                <th> Service Price</th>
                                <th> Time Duration</th>
                                <th> Service Modified Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.subservices.map(
                                    subservice =>
                                        <tr key={subservice.subservice_id}>
                                            <td>{subservice.subservice_id}</td>
                                            <td> {subservice.sub_servicename} </td>
                                            <td> {subservice.price}</td>
                                            <td> {subservice.time_duration}</td>

                                            <td>{subservice.modified_date}</td>

                                            <td>
                                                <button className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteSubService(subservice.subservice_id) }}>Delete </button>

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

export default SubserviceComponent;