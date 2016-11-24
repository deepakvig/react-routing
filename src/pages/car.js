import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component {
// Constructor is responsible for setting up props and setting initial stte
  constructor(props){
    // Pass props to the parent component
    super(props);
    // Set initial state
    this.state = {
        // State needed
      cars: []
    };
  }
  componentDidUpdate(){
    console.log("Something1");
  }
  componentDidMount(){
    console.log(this.state.cars);
    // Static data
    
      // Update state
      this.setState({cars: this.props.route.data});
    }
    render(){
      // Map through cars and return linked cars
      const carNode = this.state.cars.map((car) => {
        return (
          <Link
              to={"/cars/"+car.id}
              className="list-group-item"
              key={car.id}>
              {car.name}
          </Link>
        )
      });
      return (
        <div>
          <h1>Cars page</h1>
          <div className="list-group">
              {carNode}
          </div>
        </div>
      );
    }
}

export default Car;