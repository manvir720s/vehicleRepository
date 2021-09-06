import React, { Component } from 'react';
import axios from 'axios'; 

export default class CreateVehicle extends Component {

    constructor(props) {
        super(props);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeColour = this.onChangeColour.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeURL = this.onChangeURL.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            vehicle_make: '',
            vehicle_model: '',
            vehicle_year: '',
            vehicle_colour: '',
            vehicle_url: '',
            vehicle_description: ''
        }
    }

    onChangeMake(e){
        this.setState({
            vehicle_make: e.target.value
        }); 
    }

    onChangeModel(e){
        this.setState({
            vehicle_model: e.target.value
        }); 
    }

    onChangeYear(e){
        this.setState({
            vehicle_year: e.target.value
        }); 
    }

    onChangeColour(e){
        this.setState({
            vehicle_colour: e.target.value
        }); 
    }
    onChangeURL(e){
        this.setState({
            vehicle_url: e.target.value
        }); 
    }

    onChangeDescription(e){
        this.setState({
            vehicle_description: e.target.value
        }); 
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Vehicle Make: ${this.state.vehicle_make}`);
        console.log(`Vehicle Model: ${this.state.vehicle_model}`);
        console.log(`Vehicle Year: ${this.state.vehicle_year}`);
        console.log(`Vehicle Colour: ${this.state.vehicle_colour}`);
        console.log(`Vehicle Colour: ${this.state.vehicle_description}`);
        console.log(`Vehicle Colour: ${this.state.vehicle_url}`);


        const newVehicle = {
            vehicle_make: this.state.vehicle_make,
            vehicle_model: this.state.vehicle_model,
            vehicle_year: this.state.vehicle_year,
            vehicle_colour: this.state.vehicle_colour,
            vehicle_url: this.state.vehicle_url,
            vehicle_description: this.state.vehicle_description
        };

        axios.post('http://localhost:3000/vehicles/add', newVehicle)
        .then(res => console.log(res.data));

        
        this.setState({
            vehicle_make: '',
            vehicle_model: '',
            vehicle_year: '',
            vehicle_colour: '',
            vehicle_url:'',
            vehicle_description: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}> 
                <h3>Create New Vehicle</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Make:</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.vehicle_make}
                                onChange={this.onChangeMake}
                        />
                    </div>
                    <div className="form-group">
                        <label>Model:</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.vehicle_model}
                                onChange={this.onChangeModel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year:</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.vehicle_year}
                                onChange={this.onChangeYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Colour:</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.vehicle_colour}
                                onChange={this.onChangeColour}
                        />
                    </div>
                    <div className="form-group">
                        <label>URL:</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.vehicle_url}
                                onChange={this.onChangeURL}
                        />
                    </div>
                    <div className="form-group mt-3 mb-2">
                    <label>Description:</label>
                        <textarea rows ="4"
                                cols="182"
                                value={this.state.vehicle_description}
                                onChange={this.onChangeDescription}
                        />
                    </div>
 
                    <div className="form-group">
                      <input type="submit" value="Create Vehicle" className="btn btn-primary" />
                    </div>
                </form>
            </div>
               
        )
    }
}