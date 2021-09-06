import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Vehicle = props => (
    <tr>
        <td>{props.vehicle.vehicle_make}</td>
        <td>{props.vehicle.vehicle_model}</td>
        <td>{props.vehicle.vehicle_year}</td>
        <td>{props.vehicle.vehicle_colour}</td>
        <td>
        
            <Link to={"/edit/"+props.vehicle._id}>Edit</Link>
        </td>
    </tr>
)

export default class VehicleList extends Component {

    constructor(props) {
        super(props);
        this.state = {vehicles: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/vehicles/')
            .then(response => {
                this.setState({ vehicles: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    vehicleList() {
        return this.state.vehicles.map(function(currentVehicle, i){
            return <Vehicle vehicle={currentVehicle} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Vehicle List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Colour</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.vehicleList() }
                    </tbody>
                </table>
            </div>
        )
    }
}