import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

 class ListOrderDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            order: [],
            count:  []
            
           
        }
    }

    confirmorder(placeorder_id) {   

        const { order } = this.state;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjMsImlhdCI6MTYxNTAwOTMyMX0.UA5rdGGciVUCUrqBrr3fl-HWf83TDTwk9yEUn6VyyGE");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("placeorder_id", placeorder_id);
        urlencoded.append("orderstatus", "confirm");
        
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        
        fetch("http://localhost:4000/api/UpdateOrderData", requestOptions)
          .then(response => response.text())
          .then(
            (result) => {
                this.setState({
                    response: result,
                    order: order.filter(order => order.placeorder_id !== placeorder_id)
                });
            },
            (error) => {
                this.setState({ error });
            })
    }

    rejectorder(placeorder_id) {   

        const { order } = this.state;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjMsImlhdCI6MTYxNTAwOTMyMX0.UA5rdGGciVUCUrqBrr3fl-HWf83TDTwk9yEUn6VyyGE");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("placeorder_id", placeorder_id);
        urlencoded.append("orderstatus", "Reject");
        
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        
        fetch("http://localhost:4000/api/UpdateOrderData", requestOptions)
          .then(response => response.text())
          .then(
            (result) => {
                this.setState({
                    response: result,
                    order: order.filter(order => order.placeorder_id !== placeorder_id)
                });
            },
            (error) => {
                this.setState({ error });
            })
    }


     counter(rowno){
        return rowno+=1;
    }
    componentDidMount() {
        const apiUrl = 'http://localhost:4000/api/ViewOrderData';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => this.setState({ order: data.data }));
            // .then(count => this.setState({ count: count.count }));
            fetch(apiUrl)
            .then(response => response.json())
            .then(count => this.setState({ count: count.count }));
         
    }
    render() {
        let i=1;
       const rowNumber=1
        let counter=1
        return (
            <div className="container">
                <h2 className="text-center" style={{ marginTop: "15px" }}>Order List ({this.state.count})</h2>
               
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered"   counter-reset={rowNumber}>
                        
                        <thead style={{ textAlign: "center" }}>
                            <tr counter-increment>
                                
                                <th> Customer Name</th>
                                 <th>Service</th>
                                 <th > Address</th>
                                <th > area</th>
                                <th> Provider Name</th>
                                <th >Provider Contact</th>
                                <th>Order Date</th>
                                <th>Action</th>
                                
                                



                            </tr>
                        </thead>
                        <tbody style={{ textAlign: "center" }}>
                            {
                                this.state.order.map(
                                    order =>
                                        <tr key={order.customer_id} >
                                           
                                            <td>{order.customer_firstname} {order.customer_lastname}</td>
                                            <td> {order.sub_servicename} </td>
                                            <td>{order.address}</td>
                                            <td>{order.area}</td>
                                            <td>{order.provider_firstname} {order.provider_lastname}</td>
                                            <td> {order.provider_mobileno} </td>
                                            <td>{order.order_date}</td>
                                            <td>
                                                <button className="btn btn-info" type="submit" onClick={()=>this.confirmorder(order.placeorder_id)}>Confirm </button>
                                                <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={()=>this.rejectorder(order.placeorder_id)} >Reject </button>
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
export default ListOrderDetails